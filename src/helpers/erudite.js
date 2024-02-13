import roll from "./roll.js";

const glassUse = (origin, target, erudite) => {
    console.log(origin.name + " has the glasses of the erudite, and its aiming to use them!")
    console.log("------------------------------------")

    console.log("***************** ANGER CHECK ***********")
    console.log(erudite.ang)
    
        if(erudite.ang < 4)
            leftArm(origin)

        else if(erudite.ang < 7)
            rightArm(origin)

        else if (erudite.ang < 10)
            skip(origin)

        else if(erudite.ang < 14)
            damage(origin, erudite)

        else if (erudite.ang < 17)
            place(origin, target)

        else if(erudite.ang < 19)
            recoverGlass(origin, erudite)

        else if (erudite.ang > 18)
            instaKill(origin, erudite)



    checkGlasses(origin, erudite)
    console.log("------------------------------------")
}

const leftArm = (origin) => {
    if(!origin.leftArmDamaged){
        origin.leftArmDamaged = true;
        origin.powerstats.strength /= 2;

        console.log(origin.name + " has received a massive hit while using the glasses, smashing the LEFT arm in the process")
    }
    else
        console.log(origin.name + "'s left arm is already damaged")

}

const rightArm = (origin) => {
    if(!origin.rightArmDamaged){
        origin.rightArmDamaged = true;
        origin.powerstats.strength /= 2;

        console.log(origin.name + " has received a massive hit while using the glasses, smashing the RIGHT arm in the process")
    }
    else
        console.log(origin.name + "'s right arm is already damaged")
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

const checkGlasses = (origin, erudite) => {
    if(origin.glasses){
        origin.glasses = false
        erudite.glasses = true
        erudite.stay = false
        erudite.appears = false
        console.log(origin.name + " feels dizzy and leaves the glasses on the ground, it that very moment the erudite takes the glasses and dissapears, fading into mist")
    }
    else{
        erudite.stay = true
        console.log("The erudite struggles to recover his glasses, it seems that he shall be around for a little longer!!!!")
    }

}

export default glassUse