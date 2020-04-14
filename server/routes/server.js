var express = require('express');
var router = express.Router();
var arr=new Array();
var valid=false;
router.post('/Register', function(req, res) {
  arr.push(req.body);
  console.log("The values in the array register is",arr);
});
router.post('/Login', function(req, res) {
 let UserName=req.body.UserName;
 let Password=req.body.Password;
 console.log("The values of username and password is",UserName,Password);
 console.log("The array is",arr);
 arr.map(name=>{
   if(name.UserName==UserName && name.Password==Password)
   {
      res.status(200).json({
         valid:true
      });
   }
   else{
     res.status(200).json({
       valid:valid
     })
   }
 })
});

module.exports = router;
