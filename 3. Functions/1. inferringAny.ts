function addTwo(num){
    return num +2;
}

addTwo(2)
addTwo("2")
//these are not appropriate way of using functions and parameters associated to it as it leads to `any`.
//it can accept strings and also you can use inbuilt functions which are not associated with that data type


//improvised
function addFive(num:number){
    // num.toUpperCase()   //these statements will prompt error
    return num+5;
}
addFive(5);
// addFive("5");  //these statements will prompt error


//defining function with parameters
function signUp(name:string, email:string, isPaid:boolean){}
signUp("ankush","ankush@anonymous.dev",true);


//defining function with parameters and **default values
function login(name:string, email:string, isPaid:boolean = false){}
login("ankush","ankush@anonymous.dev");



//this is how you define the return type of a function
function addTen(num:number):number{
    return num+10;
    // return "ankush"; //these statements won't work

}

const ten = (num:number):number=>{
    return num+10;
}
addTen(5);


export{}