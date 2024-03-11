"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(2);
addTwo("2");
//these are not appropriate way of using functions and parameters associated to it as it leads to `any`.
//it can accept strings and also you can use inbuilt functions which are not associated with that data type
//improvised
function addFive(num) {
    // num.toUpperCase()   //these statements will prompt error
    return num + 5;
}
addFive(5);
// addFive("5");  //these statements will prompt error
//defining function with parameters
function signUp(name, email, isPaid) { }
signUp("ankush", "ankush@anonymous.dev", true);
//defining function with parameters and default values
function login(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
login("ankush", "ankush@anonymous.dev");
