"use strict";
alert("Welcome to my site");

var x = prompt("Enter your name:");

document.write("<h1>Welcome " + x + "!</h1>");

function sum ( )
{
     let  num1 = parseInt(prompt("first number :"));
     let  num2 = parseInt(prompt("second number :"));
     let res = num1+num2 ;
      document.getElementById("res").innerHTML = "sum: " + res;
}