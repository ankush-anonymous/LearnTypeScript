const superHeros :string[] = []    //this is how you declare a array
const superPowers:number[] = []

const heroPowers : Array<number> = []  //alternate way of declaring number type array

type arrayUser = {
    name:string,
    isActive:boolean
}

const allUsers : arrayUser[] = []; //to create array of particular TYPE

superHeros.push("IronMan")
superPowers.push(2)
allUsers.push({
    name:"ankush",
    isActive:true
})


const MLmodels : number[][]= [   //number[][] to insert array inside an array
    [255,233,233]
]
 
 