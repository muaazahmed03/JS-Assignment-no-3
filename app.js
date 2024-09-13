// var username = prompt("Enter your user name")

// var email = prompt("Enter your email")

// var name1 = prompt("Enter your name")

// console.log(`Welcome user! your name is ${name1}. My email is ${email}. My user name is ${username}`)

// Tempelates Literals 
// `` --> this is called backtex

// var name = "muaaz"
// console.log(`My name is ${name}`)

// var userInput = prompt("Enter Your number")
// document.write(`${userInput} x 1 = ${userInput*1} <br> 
//   ${userInput} x 2 = ${userInput*2} <br>
//   ${userInput} x 3 = ${userInput*3} <br>
//   ${userInput} x 4 = ${userInput*4} <br>
//   ${userInput} x 5 = ${userInput*5} <br>
//   ${userInput} x 6 = ${userInput*6} <br>
//   ${userInput} x 7 = ${userInput*7} <br>
//   ${userInput} x 8 = ${userInput*8} <br>
//   ${userInput} x 9 = ${userInput*9} <br>
//   ${userInput} x 10 = ${userInput*10} <br>
//   `)

            //  Chapter 10 (If Statement )

            
            // Datatypes 
            // String
            // number 
            // undefined 
            // Boolean Treue or False 
            // Null 
            
            // () --> parenthesis 

// var city = prompt("Your place?");

// if(city === "karachi"){
//     alert("Mobile nikal karrway")
// }
// else{
//     alert("ok bhai mubarak ho")
// }
 
// ==, ===, >, <, >=, <=, !== comparison operator 

// var age = +prompt("Enter Your Age");
// // + --> number k lye 

// if(age >= 18){
//     console.log("You Are Eligible")
// }
// else{
//     console.log("You Are Not Eligible")
// }

//               Practice again 

// var city = prompt("Enter Your City")

// if(city === "karachi"){
//     alert("Mobile nikal Karrway!")
// }
// if(city === "lahore"){
//     alert("Khush reh shehzaday!")
// }
// else{
//     alert("Welcome Bhai")
// }

// var age = prompt("Enter the age for CNIC")

// if(age === 18){
//     alert(`aja bhai jeele apni zindagi`)
// }
// if(age >= 18){
//     alert(`ap chote ho abhi ${18-age} saal bad ana`)
// }
// else{
//     alert(`${age-18} saal guzar gaye ab to banwa le CNIC`)
// }

// var gender = prompt("Enter your Gender")
// var message;

// if(gender === "male"){
//     message = "Welcome Mr."
// }
// if(gender === "female"){
//     message = "Welcome Miss."
// }

// alert(message);

// Chapter 11 (Comparison Operator )

// !== not operator 
// var rollno = +prompt("Enter your roll number")

// if(rollno !== 500){
//     alert("Yor are not allowed")
// }
// if(rollno !== 300){
//     alert("Yor are not allowed")
// }
// else{
//     alert("You are Sit in exam")
// }

// 1 -- true
// 0 -- false
// " " -- true
// "" -- false
// undefined -- false
// null -- false 

// var a = 0 

// if(a){
//     console.log("if call..")
// }
// else{
//     console.log("else call..")
// }

//               Chapter No 12 (if else and else if)

// var percentage = +prompt("Enter Your Percentage")

// if(percentage <= 50){
//     alert("Your grade is D")
// }
// else if(percentage <= 60){
//     alert("Your grade is C")
// }
// else if(percentage <= 70){
//     alert("Your grade is B")
// }
// else if(percentage <= 79){
//     alert("Your grade is A")
// }
// else if(percentage <= 100){
//     alert("Your grade is A+")
// }
// else {
//     alert("Incorrect")
// }

// var city = prompt("Enter your city name")

// if(city === "karachi"){
//     alert("mobile nikal karrway")
// }
// else if(city === "lahore"){
//     alert("Welcome to Lahore")
// }
// else if(city === "islamabad"){
//     alert("Welcome to Islamabad")
// }
// else if(city === "hyderabad"){
//     alert("Welcome to Hyderabad")
// }
// else {
//     alert("Welcome!")
// }

var userInput = +prompt("Enter Your number")

if(userInput == "" ){
    document.write(`5 x 1 = 5 <br> 
        5 x 2 = 10 <br>
        5 x 3 = 15 <br>
        5 x 4 = 20 <br>
        5 x 5 = 25 <br>
        5 x 6 = 30 <br>
        5 x 7 = 35 <br>
        5 x 8 = 40 <br>
        5 x 9 = 45 <br>
        5 x 10 = 50  <br>
        `)
}
else{
    document.write(`${userInput} x 1 = ${userInput*1} <br> 
          ${userInput} x 2 = ${userInput*2} <br>
          ${userInput} x 3 = ${userInput*3} <br>
          ${userInput} x 4 = ${userInput*4} <br>
          ${userInput} x 5 = ${userInput*5} <br>
          ${userInput} x 6 = ${userInput*6} <br>
          ${userInput} x 7 = ${userInput*7} <br>
          ${userInput} x 8 = ${userInput*8} <br>
          ${userInput} x 9 = ${userInput*9} <br>
          ${userInput} x 10 = ${userInput*10} <br>
      `)

}