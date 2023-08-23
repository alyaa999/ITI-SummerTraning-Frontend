"use strict";
alert("Welcome to my site");

var x = prompt("Enter your name:");

document.write("<h1>Welcome " + x + "!</h1>");

function sum() {
  let num1 = parseInt(prompt("first number :"));
  let num2 = parseInt(prompt("second number :"));
  let res = num1 + num2;
  document.getElementById("res").innerHTML = "sum: " + res;
}
function Temperature(t) {
  let result = t >= 30 ? "HOT" : "Cold";
  console.log(result);
}

Temperature(4);

function check(faculty) {
  switch (faculty) {
    case "FCI":
      console.log("You're eligible for Programing tracks");
      break;
    case "Engineering":
      console.log("You're eligible for Network and Embedded tracks");
      break;
    case "Commerce":
      console.log("You're eligible for ERP and Social media tracks");
      break;
    default:
      console.log("You're eligible for SW fundamentals track");
      break;
  }
}
