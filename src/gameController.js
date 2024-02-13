
import getHeroes from "./gameService.js"

import findZarate from "./helpers/findZarate.js";
import selectHero from "./helpers/selectHero.js";
import roll from "./helpers/roll.js"
import attack from "./helpers/attack.js";
import lifecheck from "./helpers/lifecheck.js";

const mainFunction = async () => {
    const heroList = await getHeroes();

    const villainZarate = findZarate(heroList)

    const superHero = selectHero(heroList)

    villainZarate.hp = villainZarate.powerstats.strength*10>666?666:villainZarate.powerstats.strength*10
    superHero.hp = superHero.powerstats.strength*10>666?666:superHero.powerstats.strength*10

    initialPresentation(villainZarate, superHero)
    let turn = 1;
    let eruditeTurn = roll(1, 3, 5)
    gameLoop(villainZarate, superHero, turn)

}

const gameLoop = (villain, hero, turn) => {
    console.log("**************************************** TURN "+ turn +" START ********************************************************")
    if(villain.powerstats.combat+villain.powerstats.intelligence > hero.powerstats.combat+hero.powerstats.intelligence){
        attack(villain, hero)
        console.log("------------------------------------")
        attack(hero, villain)
    }
    else{
        attack(hero, villain)
        console.log("------------------------------------")
        attack(villain, hero)
    }

    remainingLifeLog(villain, hero)

    console.log("************************************************************************************************")
    
    const finish = lifecheck(villain, hero)
    turn++

    if(!finish)
        gameLoop(villain,hero, turn)
}

const initialPresentation =  (villain, hero) => {
    console.log("You are being attack by Zarate, also known as Junkpile, and when you thought your time was finished " + hero.name+ " comes to your rescue!!!!")
    console.log("-------------------------ZARATE-------------------------------")
    console.log("NAME: Zarate, the villain")
    console.log("ALIAS: " + villain.name)
    console.log("INT: " + villain.powerstats.intelligence)
    console.log("STR: " + villain.powerstats.strength)
    console.log("DUR: " + villain.powerstats.durability)
    console.log("SPE: " + villain.powerstats.speed)
    console.log("POW: " + villain.powerstats.power)
    console.log("COM: " + villain.powerstats.combat)
    console.log("HP: " + villain.hp)
    console.log("--------------------------------------------------------------")
    console.log("-------------------------YOUR HERO-------------------------------")
    console.log("NAME: " + hero.name)
    console.log("INT: " + hero.powerstats.intelligence)
    console.log("STR: " + hero.powerstats.strength)
    console.log("DUR: " + hero.powerstats.durability)
    console.log("SPE: " + hero.powerstats.speed)
    console.log("POW: " + hero.powerstats.power)
    console.log("COM: " + hero.powerstats.combat)
    console.log("HP: " + hero.hp)
    console.log("--------------------------------------------------------------")
}

const remainingLifeLog = (villain, hero) => {
    console.log("-------------------------ZARATE-------------------------------")
    console.log("NAME: Zarate, the villain")
    console.log("ALIAS: " + villain.name)
    console.log("INT: " + villain.powerstats.intelligence)
    console.log("STR: " + villain.powerstats.strength)
    console.log("DUR: " + villain.powerstats.durability)
    console.log("SPE: " + villain.powerstats.speed)
    console.log("POW: " + villain.powerstats.power)
    console.log("COM: " + villain.powerstats.combat)
    console.log("HP: " + villain.hp)
    console.log("--------------------------------------------------------------")
    console.log("-------------------------YOUR HERO-------------------------------")
    console.log("NAME: " + hero.name)
    console.log("INT: " + hero.powerstats.intelligence)
    console.log("STR: " + hero.powerstats.strength)
    console.log("DUR: " + hero.powerstats.durability)
    console.log("SPE: " + hero.powerstats.speed)
    console.log("POW: " + hero.powerstats.power)
    console.log("COM: " + hero.powerstats.combat)
    console.log("HP: " + hero.hp)
    console.log("--------------------------------------------------------------")
}




export default mainFunction