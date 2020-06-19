const express = require("express");
const bodyParser = require("body-parser")
const app =express();


app .use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html");
});
app.post("/",function (req,res) {
    var num1 = Number(req.body.num1);
    var num2 =Number(req.body.num2);
    var result =num1+num2;
    res.send("the sum is "+result);
    
});
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var heightm = height/100;
    var normalb = 25;
    var bmi = weight/(heightm*heightm);
    if(bmi<16)
    {   
        var normal = normalb-bmi;
        res.send("your bmi is " + bmi + " you need to improve your bmi  by "+ normal );
    }
    else if (bmi>16 && bmi<17) {
        var normal = normalb - bmi;
        res.send("your bmi is " + bmi + " you need to improve your bmi  by " + normal);
        
    }
    else if(bmi>17 && bmi<18.5)
    {
        var normal = normalb - bmi;
        res.send("your bmi is " + bmi + " you need to improve your bmi  by " + normal);
    }
    else if (bmi>18.5 && bmi<25) {
        
        res.send("your bmi is "+bmi + "your bmi is normal be healthy");
    }
    else(bmi>25)
    {
        var normal = bmi - normalb;
        res.send("your bmi is " + bmi + " you need to decrease  your bmi  by " + normal);
    }
});
app.listen(3000,function(){
console.log("port 3000 has started thank you")
});