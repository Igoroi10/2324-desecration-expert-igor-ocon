import roll from "./roll.js";

const glassUse = (origin, target, erudite) => {
    initialRoll = roll(1, 1, 20)
    console.log(origin.name + " has the glasses of the erudite, and its aiming to use them!")
    console.log("------------------------------------")
    
    switch(initialRoll){
        case (initialRoll < 4):
            leftArm(origin)
            break;
        case (3 < initialRoll < 7):
            rightArm(origin)
            break;
        case (6 < initialRoll < 10):
            skip(origin)
            break;
        case (9 < initialRoll < 14):
            damage(origin, erudite)
            break;
        case (13 < initialRoll < 17):
            place(origin, target)
            break;
        case (16 < initialRoll < 19):
            recoverGlass(origin, erudite)
            break;
        case (initialRoll > 18):
            instaKill(origin, erudite)
            break;
            
    }

    checkGlasses(origin, erudite)
    console.log("------------------------------------")
}

const leftArm = (origin) => {
    if(!origin.leftArmDamaged){
        origin.leftArmDamaged = true;
        origin.powerstats.strength /= 2;

        console.log(origin.name + " has received a massive hit while using the glasses, smashing the LEFT arm in the process")
    }

}

const rightArm = (origin) => {
    if(!origin.rightArmDamaged){
        origin.rightArmDamaged = true;
        origin.powerstats.strength /= 2;

        console.log(origin.name + " has received a massive hit while using the glasses, smashing the RIGHT arm in the process")
    }
}

const skip = (origin) => {
    origin.skip = true;

    console.log(origin.name + " is blinded by the lights and cannot attack!!!!!!!")
}

const damage = (origin, erudite) =>  {
    const damage = roll(1, 1, 10)
    erudite.hpw -= damage

    console.log(origin.name + " hears the phrase 'Tú eres tonto' from the erudite and attacks, dealing " +damage+ " points of damage" )
}

const place = (origin, target) => {
    origin.glasses = false;
    target.glasses = true;

    console.log("A cunning move!!! " +origin.name+ " places the glasses in " +target.name+ "'s eyes")
}

const recoverGlass = (erudite) => {
    origin.glasses = false;
    erudite.glasses = true;
    console.log(origin.name + " hears the phrase 'Tú eres tonto' from the erudite and attacks, but before making any injuries the erudite has recover his glasses and is inmune to any damage")
}

const instaKill = (origin, erudite) => {
    erudite.hpw = 0;
    console.log(origin.name +" uses the erudite glass against the erudite himself, with a blazing blast, the erudite's head rolls, gasping its last breath. The erudite is no more!!!!")

}