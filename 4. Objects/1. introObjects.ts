function createUser({name:string,isPaid:boolean}){}

// createUser("ankush","nishu") // this won't be accepted as parameters have been declared in function
// createUser("ankush",true); //same goes here  
createUser({name:"ankush",isPaid:true})


//this is how you return objects from a function
function createCourse():{name:string,price:number}{
    return {name:"Python course", price:2300};
}



// #####################################################################################################
//weird behavior of typeScript
//  createUser({name:"ankush",isPaid:true, email:"ankush@gmail.com"})  //this will not be allowed

const user = {name:"ankush",isPaid:true, email:"ankush@gmail.com"};
createUser(user); //but passing same object through variable is allowed 


//way to solve the above problem
//way to create a new data type
type User = {
    name:string,
    email:string,
    isActive:boolean
}

//use that data type to define input and output of function
function createNewUser(user: User):User{
    return {name:"",email:"",isActive:true}
}