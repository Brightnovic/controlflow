//CONTROL FLOW
//Control Flows are statements that directs the flow of a program.

//Ways to control flow include:
// if statement
// if else  statement
// if elseif else statement
//switch case
// tenary operator
//Nullish coalescing

//IF STATEMENT:
//Syntax
/* 
    if (cond) {
        //body

    }
*/
// IF statement only runs the code in the body when the condition is True

//Example

const money = true

if (money) {
    console.log("PARTY!!!")
}

let age = 19

if (age >= 18) {``
    document.write ("<h2> You are Authorized </h2>");
    
}


// GETTING USER'S INPUT
//BROWSER'S PROMPT
// HTML INPUT

//BROWSERS PROMPT //Prompt must return a string or Null
const usersName = prompt("Enter Your Name:")
console.log("Your name is: ", usersName)

const sum = prompt("Enter Your Number:")
console.log(sum + 10)

//Converting from string to number:
//parseInt
const sum1 = parseInt(prompt("Enter Your Number:"))
console.log(sum1 + 10)
//parssFloat
const sum2 = parseFloat(prompt("Enter Your Number:"))
console.log(sum2 + 10)
//+
const sum3 = +prompt("Enter Your Number:")
console.log(sum3 + 10)

// HTML INPUT
// documen.querySelector()
// const inputElement = document.querySelector("input")
// console.dir(inputElement)

// const inputValue = inputElement.value
// console.log("INPUT", inputValue)

// console.log(inputValue + 10)

// document.getElementById()
const inputElement = document.getElementById("input")
console.log(inputElement)

const inputValue = inputElement.value
console.log("INPUT", inputValue)


//if else Statement
//Eg:

const myAge = 15

if (myAge >= 15) {
    console.log("You are an Adult")
}
else{
    console.log ("You are not an Adult")
}


//if elseif else Statement
//Eg:

const time = 13

if (time >= 0 && time<=11) {
    console.log("Good Morning")
}
else if (time >= 12 && time <=15) {
    console.log ("Good Afternoon")
}
else {
    console.log ("Good Evenning")
}

//Switch Case: It is Use to check a variable against MULTIPLE known variables

//Traffice Light
const color = "RED"

switch (color){
    case"RED":
        console.log("STOP")
    break

    case"GREEN":
        console.log("GO")
    break

    case"AMBER":
        console.log("GET READY")
    break

    default: 
        console.log("INVALID COLOR")
    break
}


//TENARY OPERATOR (Shortcut for writing if... else statemet)
//SYNTAX:
// (cond) ? True block: else block

//Example:
(myAge >= 18) ? 
  console.log("You are an Adult")
  : console.log ("You are not an Adult")


//NULLISH COALESCING (First checks the value at the left hand and if it is null or undefined it chooses the right value, otherwise it chooses the left value )

let taxRate = 0 
taxRate = taxRate ?? 1

console.log("Tax Rate:", taxRate)





