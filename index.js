/* document.write('hello world');
window.alert("i realy love piza!");
this is a single line comment 
let age=21; //numberstype
let firstname= ("areeba"); //stringtyoe
let enrolled= true; //booleantype


console.log("you are " + age + " years old");
console.log("your name is " + firstname);
console.log( "enrolled " +enrolled );
document.getElementById("p1").innerHTML = "hello " + firstname; 
document.getElementById("p2").innerHTML = "you are " + age + " years old"; 
document.getElementById("p3").innerHTML = "enrolled " + enrolled; 


//arithmetic operators

let students=20;
//students=students+1;
//students=students-1;
//students = students*3;
students = students%3;

document.write(students);
//operator predence
1. parenthesis()
2. exponents
3. multiplication or division
4. additon OR subtraction

//get uer input with easy code
 let username = window.prompt("whats your name?")
  document.write(username);
  
 //get user input with practical code
 document.getElementById("Mybutton").onclick =function(){
   let username = document.getElementById("Mytext").value;
    //document.write(username);
    console.log(username);
   let age=document.getElementById("age").value;
    console.log(age)
     let email= document.getElementById("email").value;
console.log(email); 

    //if we want to change our name of label after typing our name:
    document.getElementById("mylabel").innerHTML= "Hello " + username;
 }
 document.getElementById("Mybutton").onclick= function(){
  age= document.getElementById("age").value;
  document.write("you are " + age + " years old.");
}
 
//type conversion
let age= window.prompt("Whts your age?");
age += 1;
document.write(age);
 //it is nor right so we have type conversion, here age is acting as string. we will convert it into number.

let age = window.prompt("how old are you?");

age = Number(age);

document.write(" you are " + age + " years old.");
to font name of data tyep
console.log(typeof age);

//Math functions
let x=3.14;
 //x = Math.round(x);
 x=Math.SQRT2(x);
 document.write(x);
 
//code for getting hypoteneous
let c;
let  a;
let b;
  a= window.prompt("enter value for base")
  a = Number(a);
   b = window.prompt("enter the value for perpendicular");
   b = Number(b);
   c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
   document.write(c);
*/
/* document.getElementById("mybutton").onclick= function(){
  let base = document.getElementById("sideA").value;
  base= Number(base);

  let perpendicular = document.getElementById("sideB").value;
  perpendicular= Number(perpendicular);

  let hypo= Math.sqrt(Math.pow(base,2) + Math.pow(perpendicular,2));
  document.getElementById("label3").innerHTML="Side C: " + hypo;
 } */

//counter program
/*  let count = 0;
 document.getElementById("decreaseBtn").onclick= function(){
 count -= 1;
 document.getElementById("countLabel").innerHTML = count;
 
 }
  document.getElementById("resetBtn").onclick= function(){
 count = 0;
 document.getElementById("countLabel").innerHTML = count;
 }
  document.getElementById("increaseBtn").onclick= function(){
 count += 1;
 document.getElementById("countLabel").innerHTML = count;
 }  */
//string slicing

/* let FullName = "Ali Shahzad";
 let FirstName;
 let LastName;

 FirstName = FullName.slice(0,FullName.indexOf(" "));

 LastName = FullName.slice(FullName.indexOf(" ")+1);

 console.log(FirstName);
 console.log(LastName); */
//check property

/* document.getElementById("mybutton").onclick = function () {
  if (document.getElementById("mycheckbox").checked) {
    document.write("You are subsribed!");
  } else {
    document.write("You are Not subsccribed!");
  }
}; */

//if-else with check property
/* const visabtn = document.getElementById("visabtn");
const cardbtn = document.getElementById("cardbtn");
const paypalbtn = document.getElementById("paypalbtn"); 
document.getElementById("submit").onclick = function () {
  if (visabtn.checked) {
    console.log("you are paying with visa");
  } else if (cardbtn.checked) {
    console.log("you are paying with card");
  } else if (paypalbtn.checked) {
    console.log("you are paying with paypal");
  } else {
    console.log("please select a payment method");
  }
};
*/

// switch statements
/* 
let grade = "F";
switch (grade) {
  case "A":
    document.write("you passed good");
    break;
  case "B":
    document.write("you passed well");
    break;
  case "C":
    document.write("you passed ");
    break;
  case "D":
    document.write("you passed barely");
    break;
  default:
    document.write("you failed");
} */
//switch statment with user input
/*
 document.getElementById("button").onclick = function () {
  var grade = document.getElementById("grade").value;
  switch (grade.toUpperCase()) {
    case "A":
      document.write("You performed good");
      break;
    case "B":
      document.write("You performed well");
      break;
    case "C":
      document.write("You passed well");
      break;
    case "D":
      document.write("You passed");
      break;
    case "E":
      document.write("You passed barely");
      break;
    case "F":
      document.write("You failed");
      break;
    default:
      document.write("You didn't attend the exam");
  }
}; */

//while loop
/* let username = " ";
document.getElementById("mybutton").onclick = function () {
  username = document.getElementById("username").value;
  while (username == "" || username == null) {
    username = prompt("Enter username");
  }
  document.write("hello " + username);
}; */

//WITH CHATGPT
/* let username = "";
document.getElementById("mybutton").onclick = function () {
  username = document.getElementById("username").value;
  while (username.trim() === "") {
    username = prompt("Please enter a valid username:");
  }
  document.write("Hello, " + username);
}; */

//for loop= repeat code limited no. of time
/* for (let i = 1; i <= 10; i += 1) {
  document.write(i + "\n");
} */

//break= breaks out of a loop entirely
// continue= skip an iteration of a loop
/* for (let i = 0; i <= 20; i += 1) {
  if (i == 13) {
    break;
  }
  document.write(i + "<br />");
}
document.write("<br />");
for (let i = 0; i <= 20; i += 1) {
  if (i == 13) {
    continue;
  }
  document.write(i + "<br />");
} */

//nested loop

//functions
/* startprogram();

function startprogram() {
  let username = "areeba";
  let age = 20;
  happybirthday(username, age);
}

function happybirthday(username, age) {
  document.write("happy birthday to you!" + "<br />");
  document.write("happy birthday to you!" + "<br />");
  document.write("happy birthday dear ", username + "<br />");
  document.write("happy birthday to you!" + "<br />");
  document.write("you are ", age, " years old");
}
 */

//return statment
//calculate area of  RECTANGlE USING A function and return a value
/* let width;
let height;
let area;

width = window.prompt("enter value of width of rectangle");
height = window.prompt("enter value of height of rectangle");

area = getArea(width, height);
document.write("the area is ", area);

function getArea(width, height) {
  //let result = width * height;
  return width * height;
}
 */

//ternary operators
//shortcut of if-else

/* let adult = getage(12);

document.write(adult);
function getage(age) {
  return age >= 18 ? true : false;
} */

//var vs let
//var will change our window properties but let will not

//template literls
/* let username = "areeba";
let items = 20;
let total = 75;

 document.write("hello ", username + "<br />");
document.write("you have ", items, " in your cart" + "<br />");
document.write("your total is $ ", total); 
//instead we will use template literals
 document.write(`hello ${username}` + "<br />");
document.write(`you have ${items} in your cart` + "<br />");
document.write(`your total is $${total}`);  */

//toLocaleString() = return a string with a language sensitive representation of this number.
// number.toLocaleString(locale, {options})
//locale= specify that language
//options= objects with formatting options

/*let num = 123456.789;
//num = num.toLocaleString("en-US"); //US english
//num = num.toLocaleString("hi-IN"); //Hindi
//num = num.toLocaleString("de-DE"); //standard german
document.write(num); 

//for currency
//num = num.toLocaleString("en-US", { style: "currency", currency: "USD" });
//num = num.toLocaleString("hi-IND", { style: "currency", currency: "INR" });
document.write(num);*/

//number guessing game
/* const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("button").onclick = function () {
  let guess = document.getElementById("number").value;
  guesses += 1;
  if (guess == answer) {
    alert(`${answer} is the number. It took you ${guesses} guesses.`);
  } else if (guess > answer) {
    alert("too big");
  } else {
    alert("too small");
  }
};
 */

//temprature converstion
/* document.getElementById("submitButton").onclick = function () {
  let temp;
  if (document.getElementById("cbutton").checked) {
    temp = document.getElementById("textbox").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("tempvalue").innerHTML = temp + "C";
  } else if (document.getElementById("fbutton").checked) {
    temp = document.getElementById("textbox").value;
    temp = Number(temp);
    temp = toFahranheit(temp);
    document.getElementById("tempvalue").innerHTML = temp + "F";
  } else {
    document.getElementById("tempvalue").innerHTML = "Select a value";
  }
};
function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}
function toFahranheit(temp) {
  return (temp * 9) / 5 + 32;
} */

//arrays
/* let fruits = ["apple", "banana", "mango"];
//document.write(fruits[2]);

fruits.push("kivi"); //adding a string
fruits.pop(); //removing
fruits.unshift("orange"); //addition at start
fruits.shift(); //removing from start
document.write(fruits);

let index = fruits.indexOf("apple");
document.write(index);
 */

//spread operator (...)
//it will print each word individually
/* let class1 = ["ali", "areeba", "iqra"];
let class2 = ["warda", "abdullah", "hamza"];

class1.push(...class2);
document.write(class1); */
