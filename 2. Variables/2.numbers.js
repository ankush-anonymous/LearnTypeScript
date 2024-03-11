//in typeScript there is no particular int / float all are inferred as `number`
var var1 = 1234;
//var1.    {when you put `.` you can see all the functions associated with that particular data type in javascript}
//boolean
var var2 = true;
//type inference 
var var3 = 1234;
var3.toFixed(); //even though you didn't mentioned the data type of var3 still in will consider it as number
// var3 = "ankush" //this statement will give you error because typeScript is smart enough to know number & string
