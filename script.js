//console.log("hello world!");

//-----------------------------

//if statement
// let age=25;
// if(age>18){
//     console.log("vote");
// }

//--------------------

//taking user input using prompt
// let number= prompt("Enter a number");
// if (number%5 === 0){
// console.log("multiple of 5");
// }
// else{
//     console.log("not the multiple of 5");
// }

//----------------

let grades = prompt("Enter your grades!");
if (grades>90 && grades<=100){
  console.log("Grade A");
}else if(grades>=70 && grades<=89){
    console.log("Grade B");
}
else if(grades>=60 && grades<=69){
    console.log("Grade C");
}
else if(grades>50 && grades<=59){
    console.log("Grade D");
}
else if(grades>=0 && grades<=49){
    console.log("Grade F");
}
else{
    console.log("Not correct marks");
}