//in typeScript there is no particular int / float all are inferred as `number`

let var1 : number = 1234;
//var1.    {when you put `.` you can see all the functions associated with that particular data type in javascript}

//boolean
let var2 : boolean = true;


//type inference ==> its not necessary always to put `:dataType` after each declaration
let var3 = 1234;
var3.toFixed();  //even though you didn't mentioned the data type of var3 still in will consider it as number
// var3 = "ankush" //this statement will give you error because typeScript is smart enough to know number & string

export {}
