import roll from "./roll.js"

const attack = (origin, target) => {
    if(origin.hp>0){
        const hitRol = roll(1, 1, 100)

        if(hitRol <= origin.powerstats.combat ){
            console.log(origin.name + " attacks "+ target.name +"!")

            const damageRoll = roll(1, 1, 20)

            console.log("------------ DAMAGE ROLL --------------")
            console.log(damageRoll)

            if(damageRoll < 3)
                fumble(origin, damageRoll)
            else if(damageRoll > 17)
                crit(origin, target, damageRoll)
            else
                hit(origin, target, damageRoll)
        }

        else{
            console.log(origin.name + " tries to attack, but " + target.name + " dodges with cunning moves!")
        }
    }
}

const fumble = (origin, diceRoll) => {
    if(diceRoll === 1){
        const penalty = roll(1, 1, 3)
        const damage = Math.ceil(origin.powerstats.speed/penalty)
        origin.hp -= damage

        console.log (origin.name + "trips with his feet, taking " + damage + "!")
    }
    if(diceRoll === 2){
        const penalty = roll(4, 1, 3)
        const damage = Math.ceil(origin.powerstats.speed/penalty)
        origin.hp -= damage

        console.log (origin.name + "trips with his feet, taking " + damage + "!")
    }
}

const hit = (origin, target, diceRoll) => {
    const damage = Math.ceil(((origin.powerstats.power+origin.powerstats.strength)*diceRoll)/100)
    target.hp -= damage

    console.log(target.name + " squirms in pain from " + origin.name + "attack, taking " + damage + " damage!")
}

const crit = (origin, target, diceRoll) => {
    const normalDamage = Math.ceil(((origin.powerstats.power+origin.powerstats.strength)*diceRoll)/100)
    
    let multiplier

    if(diceRoll === 20)
        multiplier = roll(3, 1, 5)
    else if(diceRoll === 19)
        multiplier = roll(2, 1, 3)
    else
        multiplier = roll(1, 1, 3)

    const critDamage = Math.ceil(origin.powerstats.intelligence*origin.powerstats.durability/100*multiplier)

    const totalDamage = normalDamage+critDamage
    target.hp -= totalDamage

    console.log("A battle critical hit!!!!! " + origin.name + ", strikes fiercely to " + target.name + " , dealing " +totalDamage+ " damage, the agony screams can be heard from the deepest mine to the tallest mountain!")
}

export default attack