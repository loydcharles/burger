var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	  connection = mysql.createConnection ({
      host: "ysp9sse09kl0tzxj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",	  	  
	  user: "upj8xrlb8oppty1c",
	  password: "oubsulxhf0rvxr91",
	  database: "ngxz30c4orlw0h79"	  
	});
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
