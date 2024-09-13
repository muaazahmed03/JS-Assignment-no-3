// Q1 

// var city = prompt("Please tell me your country name")

// if(city === "karachi"){
//     alert("Welcome to city of lights")
// }

// Q2 

// var gender = prompt("Please tell me your gender")

// if(gender === "male"){
//     alert("Good Morning Sir.")
// }
// else if(gender === "female"){
//     alert("Good Morning Ma'am.")
// }

// Q3 

// var signal = prompt("Write the traffic signal color Red, Yellow, Green")

// if(signal === "red"){
//     alert("Must Stop")
// }
// else if(signal === "yellow"){
//     alert("Ready To Move")
// }
// else if(signal === "green"){
//     alert("Move Now")
// }
// else {
//     alert("Incorrect")
// }

// Q4 

// var fuel = +prompt("Enter remaining fuel in car")

// if(fuel < 0.25){
//     alert("Please refill the fuel in your car")
// }

// Q5 
// a 
// var a = 4
// if (++a === 5){
//     alert("Given condition of vaiable is true")
// }
// yes, it works 

// b 
// var b = 82 
// if(b++ === 83){
//     alert("Given condition of vaiable is true")
// }
// No, it does not work 

// c 
// var c = 12 
// if(c++ === 13){
//     alert("Condition 1 is true")
// }
// condition 1 is false 
// if(c === 13){
//     alert("Condition 2 is true")
// }
// condition 2 is true 
// if(++c < 14){
//     alert("Condition 3 is true")
// }
// condition 3 is false 
// if(c === 14){
//     alert("Condition 4 is true")
// }
// condition 4 is True 

// d 
// var d = materialCost = 20000
// var laborCost = 2000
// var totalCost = materialCost + laborCost

// if(totalCost === laborCost + materialCost){
//     alert("The Cost equals")
// }
// yes, the totalCost is equal to the laborCost and materialCost

// e 
// if(true){
//     alert("True")
// }
// if(false){
//     alert("False")
// }
// only true displayed 

// f 
// if("car" < "cat"){
//     alert("car is smaller than cat")
// }
// yes it works 

// Q6 
// var subject1 = +prompt("Marks of Subject 1")
// var subject2 = +prompt("Marks of Subject 2")
// var subject3 = +prompt("Marks of Subject 3")
// var totalMarks = +prompt("Total Marks??")

// var sum = subject1 + subject2 + subject3
// var percentage = sum / totalMarks * 100

// var Remarks 
// var Grade 

// if(percentage >= 80){
//     Remarks = "Excellent"
//     Grade = "A-One"
// }
// else if(percentage >= 70){
//     Remarks = "Good"
//     Grade = "A"
// }
// else if(percentage >= 60){
//     Remarks = "You need to improve"
//     Grade = "B"
// }
// else if(percentage < 60){
//     Remarks = "Sorry"
//     Grade = "Fail"
// }

// document.write("<h1>Mark Sheet</h2><br>")
// document.write(`Total Marks: ${totalMarks} <br>`)
// document.write(`Marks Obtained: ${sum} <br>`)
// document.write(`Percentage: ${percentage} <br>`)
// document.write(`Grade: ${Grade} <br>`)
// document.write(`Remarks: ${Remarks} <br>`)

// Q7 

// var num = +prompt("Guess The Secret Number 1-10")

// if(num === 3){
//     alert("Bingo! Correct Answer")
// }
// else if(num === 2){
//     alert("Close Enough To The Correct Answer")
// }
// else if(num === 4){
//     alert("Close Enough To The Correct Answer")
// }
// else{
//     alert("No, it's not the correct answer")
// }

// Q8 

// var number = +prompt("Enter A Number To Check It Is Divided By 3 or Not")
// if (number % 3 === 0){
//     alert(`The ${number} is divided by 3`)
// }
// else{
//     alert(`The ${number} is not divided by 3`)
 // }

// Q9 

// var num = +prompt("Write any number")

// if(num % 2 === 0){
//     alert("This Is An Even Number")
// }
// else{
//     alert("This Is An Odd Number")
// }

// Q10 

// var temp = prompt("Write a Temperature")
// if (temp > 40){
//     alert("It is to hot outside.")
// }
// else if(temp > 30){
//     alert("The Weather today is Normal.")
// }
// else if(temp > 20){
//     alert("Today's Weather is cool.")
// }
// else if (temp > 10){
//     alert("OMG! Today's weather is so Cool.")
// }

// Q11 

// var first = +prompt("Enter a First Number to Calculation")
// var second = +prompt("Enter a Second Number to Calculation")
// var operation = prompt("Enter The Operation (+ , - , % , / , *)")

// var res 

// if(operation === "+"){
//     res = first + second
//     alert(`The answer of ${first} + ${second} is ${res}`)
// }
// else if(operation === "-"){
//     res = first - second
//     alert(`The answer of ${first} - ${second} is ${res}`)
// }
// else if(operation === "%"){
//     res = first % second
//     alert(`The answer of ${first} % ${second} is ${res}`)
// }
// else if(operation === "/"){
//     res = first / second
//     alert(`The answer of ${first} / ${second} is ${res}`)
// }
// else if(operation === "*"){
//     res = first * second
//     alert(`The answer of ${first} * ${second} is ${res}`)
// }
// else {
//     alert("please enter the number and operation")
// }
