(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCT2DLfObqf-O36FAvK5lc9ayyQv0kJ3RA",
        authDomain: "timesheet-ec400.firebaseapp.com",
        databaseURL: "https://timesheet-ec400.firebaseio.com",
        projectId: "timesheet-ec400",
        storageBucket: "",
        messagingSenderId: "298914600732"
    };
    firebase.initializeApp(config);

    // reference to the database
    var database = firebase.database();

    function handleClick(event) {
        // prevent refresh
        event.preventDefault();

        // grab values from form
        var employeeName = $('#employee-name-input').val().trim();
        var role = $('#role-input').val().trim();
        var startDate = $('#start-input').val().trim();
        var rate = $('#rate-input').val().trim();

        // Save the new train details in Firebase
        database.ref().push({
            employeeName,
            role,
            startDate,
            rate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

    }


    $(document).ready(function () {

        // listener on submit
        $('#add-employee-btn').on('click', handleClick);

        database.ref().on('child_added', function (snapshot) {
            var data = snapshot.val();
            var today = Date.now();
            // var dd = String(today.getDate()).padStart(2, '0');
            // var mm = String(today.getMonth() + 1).padStart(2, '0');
            // var yyyy = today.getFullYear();
            // console.log(today);
            
            var startDate = new Date(data.startDate).getTime() / 1000;
            // console.log(startDate);
            // data.startDate.split('/')
            // current - start
            var monthTotal = today - startDate;
            console.log(monthTotal);

                $('tbody').append(`
                <tr>
                    <td>${data.employeeName}</td>
                    <td>${data.role}</td>
                    <td>${data.startDate}</td>
                    <td>${monthTotal}</td>
                    <td>${data.rate}</td>
                    <td></td>
                </tr>
            `)


        });

    });
}());
