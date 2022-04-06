const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=["BUy the food","cook the food","eat the food"];
app.get("/", function(req, res) {
  var today = new Date();
  var CurrentDay = today.getDay();
  var day = "";
  var options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  }
 var day=today.toLocaleDateString("en-us",options);

res.render("list", {kindofday: day,newlistItems:items});
});
app.post("/",function(req,res){
  var item =req.body.newItem;
  items.push(item);
  res.redirect('/');
});




app.listen(3000, function() {
  console.log("Server Started on port 3000");
})
