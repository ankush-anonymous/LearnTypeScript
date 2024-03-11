//a good habit to define the return type of the function
function consoleError(errorMsg:string):void{
    console.log(errorMsg);
    
    // return errorMsg; // this function won't return anything therefore use void 
}


//this function will never return 
function handleError(errorMsg:string):never{
    throw new Error(errorMsg);
}