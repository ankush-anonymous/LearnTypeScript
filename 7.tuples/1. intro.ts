// we know how array works

//but in tuples => order of data type can also be defined

let tupUser : [string, number, boolean]

tupUser = ["ankush",123,true]
// tupUser = ["ankush",true,123] //this will give error 

//use case in RGB
let rgb :[number,number,number] = [255,255,255]
// rgb = [1,2,3,4] //this isn't allowed 
// rgb[1] = "ankush"
// rgb.push("ankush")