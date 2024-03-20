
let hero

function getHero(){
    return 2;
}

hero = getHero; //at this point typeScript infers hero as `any` because it cannot expect any data type



let heroine: string
function getHeroine(){
    return "blackWidow";
}

heroine = getHeroine();
// heroine = getHero(); //this statement gives you error because it accepts only string 