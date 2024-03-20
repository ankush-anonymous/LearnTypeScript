//for variables
let score: number | string = 33     //you declared score as both number and string
score = 4;
score  = "ankush"



type unionUser={
    name:string,
    id:number
}
 

type unionAdmin={
    userName:string,
    id:number
}


//with objects
let ankush : unionUser | unionAdmin = {name:"ankush",id:123}
// let ankush : unionUser = {name:"ankush",id:123}  //by this sentence you can't access userName

ankush = {userName:"nishu", id:123 };



//with functions
function getDbId(id:number | string){  //here id as number or string is accepted
    console.log(`DB id is ${id}`);

    // id.toLowerCase() //this won't work as it is not valid for "string | number"
    if(typeof id == "string"){  //alternate way of doing it
        id.toLowerCase();
    }
}
getDbId(3)
getDbId("1234")



//with arrays
const data:string[] = ["ankush","nishu"]
const data2:number[] = [1,2,3]
const data3:string[] | number[] = [1,2,3]  //this can have either number or string
const data4:string[] | number[] = ["1","2","3"]  //this can have either number or string
const data5:(string | number | boolean)[] = ["1",2,true]



