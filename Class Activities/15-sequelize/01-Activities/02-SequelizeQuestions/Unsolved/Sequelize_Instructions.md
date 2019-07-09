* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
		- a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
		- ORM that makes working with db easier

  	- Answer: What advantages does it offer?
		- is easy to learn and has dozens of cool features like synchronization, association, validation, etc. It also has support for PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL.

  	- Answer: How do I install it? How do I incorporate it into my app?
		- npm install sequelize
		- To connect to the database, you must create a Sequelize instance. This can be done by either passing the connection parameters separately to the Sequelize constructor or by passing a single connection URI:
	  		
			const Sequelize = require('sequelize');

			// Option 1: Passing parameters separately
			const sequelize = new Sequelize('database', 'username', 'password', {
			host: 'localhost',
			dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
			});

			// Option 2: Passing a connection URI
			const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

  	- Answer: What the heck is a Sequelize model? What role will it play?
	  	- reflects the structure of your data - representation of table data

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 
		  	Name of table
			  	Build out columns (as an object) with 
				  	- types (strings, integer, etc)
					- data validations

  		- How would I query for all the records where the Independence Year was less than 50 years ago?
		  - model.findAll() where... year - 50

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

		  findAll()... offsets... limit... 

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
