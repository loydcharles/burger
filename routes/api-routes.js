var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {  
    
     db.Burger.findAll({}).then(function(dbBurger) {
       // We have access to the todos as an argument inside of the callback function
       // res.json(dbBurger);       
       var hbsObject = {
        Burger: dbBurger
      };
      res.render("index", hbsObject)
     });      
  });

  app.post("/", function(req, res) {
      db.Burger.create({
          burger_name: req.body.burger_name,
          devoured: req.body.devoured
        }).then(function() {
        // We have access to the new todo as an argument inside of the callback function
        res.redirect("/");
      });
  });

  app.put("/:id", function(req, res) {
    db.Burger.update({
      devoured : 1 },
      {
        where: {
          id: req.params.id
      }
    }).then(function() {
      res.redirect("/");
    });
  });

};
