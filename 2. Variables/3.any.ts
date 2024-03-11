
let hero

function getHero(){
    return "thor";
}

hero = getHero; //at this point typeScript infers hero as `any` because it cannot expect any data type



let heroine: string
function getHeroine(){
    return "blackWidow";
}

heroine = getHeroine();