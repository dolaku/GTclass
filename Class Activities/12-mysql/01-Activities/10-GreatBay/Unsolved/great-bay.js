var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "great_bay_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: 'list',
                name: 'choice',
                message: 'Are you posting or bidding?',
                choices: ['Post', 'Bid']
            }

        ]).then(function (inqRes) {
            if (inqRes.choice === 'Post') {
                // prompt for item info
                postItem();


            } else if (inqRes.choice === 'Bid') {
                // show list of all available items
                readProducts();

                bidItem();


            }
        })


});

function postItem() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'item',
                message: 'What is your item?'
            },
            {
                type: 'input',
                name: 'price',
                message: 'How much?'
            }
        ]).then(function (postItemRes) {
            createProduct(postItemRes.item, postItemRes.price);
            console.log(postItemRes.item);
            console.log(postItemRes.price);
        });

}

function bidItem() {
    


    // get items from table
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        // console.log(res);

        // prompt to select item to bid on
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'availItems',
                    message: 'Which item do you want to bid on?',
                    choices: function() {
                        var availItemsArr = [];
                        for (var i = 0; i < res.length; i++) {
                            availItemsArr.push(res[i].item);

                        }
                        return availItemsArr;
                    }
                }, {
                    type: 'input',
                    name: 'bidPrice',
                    message: 'How much do you want to bid?'
                }
            ]).then(function(postBidRes) {
                console.log(postBidRes);
                // if (res.item === postBidRes.item) {
                //     console.log(res[0].item);
                // }
                
                var itemsForBid;
                var originalItemPrice;
                
                // loop through all items, match item name, access price
                for (var i = 0; i < res.length; i++) {
                    if (postBidRes.item === res[i].item) {
                        itemsForBid = res[i];
                        originalItemPrice = res[i].price;
                        
                    }
                    console.log(res[0]);
                    console.log(itemsForBid);
                }
                
                // compare bid to top_bid
                if (parseFloat(postBidRes.price) > originalItemPrice) {
                    console.log('You have the highest bid');
                }


            })


        
    });

}


function createProduct(item, price) {
    console.log("Inserting a new product...\n");
    var query = connection.query(
        "INSERT INTO products SET ?",
        {
            item,
            price
        },
        function (err, res) {
            console.log(res.affectedRows + " product inserted!\n");
            // Call updateProduct AFTER the INSERT completes
            // updateProduct();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}


function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
    });
}




