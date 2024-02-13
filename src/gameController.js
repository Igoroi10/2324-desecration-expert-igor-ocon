
import getHeroes from "./gameService.js"

import findZarate from "./helpers/findZarate.js";
import selectHero from "./helpers/selectHero.js";
import roll from "./helpers/roll.js"
import attack from "./helpers/attack.js";
import lifecheck from "./helpers/lifecheck.js";
import glassUse from "./helpers/erudite.js";

const mainFunction = async () => {
    const heroList = await getHeroes();

    const villainZarate = findZarate(heroList)

    const superHero = selectHero(heroList)

    villainZarate.hp = villainZarate.powerstats.strength*10>666?666:villainZarate.powerstats.strength*10
    superHero.hp = superHero.powerstats.strength*10>666?666:superHero.powerstats.strength*10

    villainZarate.rightArmDamaged = false
    villainZarate.leftArmDamaged = false
    villainZarate.glasses = false

    superHero.rightArmDamaged = false
    superHero.leftArmDamaged = false
    superHero.glasses = false
    
    const erudite = {
        name: "El Erudito X.G.",
        ang: 0,
        hpw: -1000,
        hpg: "Invincible",
        glasses: false,
        stay: false,
        appears: true,
    }

    initialPresentation(villainZarate, superHero)
    let turn = 1;
    let eruditeTurn = roll(1, 3, 5)
    gameLoop(villainZarate, superHero, erudite, turn, eruditeTurn)

}

const gameLoop = (villain, hero, erudite, turn, eruditeTurn) => {
    console.log("**************************************** TURN "+ turn +" START ********************************************************")
    if(eruditeTurn === turn){
        eruditeInit(erudite, villain, hero)
    }
    else{
        console.log("erudite turn")
        console.log(eruditeTurn)
    }

    if(erudite.stay){
        eruditeStats(erudite)
    }
    
    if(villain.powerstats.combat+villain.powerstats.intelligence > hero.powerstats.combat+hero.powerstats.intelligence){
        if(villain.glasses){
            glassUse(villain, hero, erudite)
        }
        attack(villain, hero)
        console.log("------------------------------------")
        if(hero.glasses){
            glassUse(hero, villain, erudite)
        }
        attack(hero, villain)
    }
    else{
        if(hero.glasses){
            glassUse(hero, villain, erudite)
        }
        attack(hero, villain)
        console.log("------------------------------------")
        if(villain.glasses){
            glassUse(villain, hero, erudite)
        }
        attack(villain, hero)
    }

    if(!erudite.stay && eruditeTurn === turn){
        const newEruditeRoll = roll (1, 3 ,5)
        eruditeTurn += newEruditeRoll
    }
    remainingLifeLog(villain, hero)

    console.log("************************************************************************************************")
    
    const finish = lifecheck(villain, hero)
    turn++

    if(!finish)
        gameLoop(villain,hero, erudite, turn, eruditeTurn)
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

const eruditeInit = (erudite, villain, hero) => {
    console.log("********************************************************************")
    console.log("********************************************************************")
    console.log("Enters erudite init HPW")
    console.log(erudite.hpw)
    console.log("********************************************************************")
    console.log("********************************************************************")

    const anger = roll(1, 1, 20)
    erudite.ang = anger;

    console.log(anger)
    
    if(erudite.hpw === -1000)
        erudite.hpw = 1+anger;

    if(erudite.hpw > 0){
        console.log("--------------------------------------------------------------")
        console.log(erudite.name + " appears from nowhere!!!! ")

        erudite.appears = true;

            if (erudite.ang < 5)
                console.log("He is not very angry, he looks kinda cool and chilled")

            else if (4 < erudite.ang < 10)
                console.log("His face looks kinda red, it looks that the fury of the erudite is rising")

            else if(9 < erudite.ang < 16)
                console.log("His boiling range has left his face almost completely red!!!")
            else
                console.log("HE IS THE ANGER, HE IS THE FURY, THERE IS ONLY RED IN HIS FACE!!!!!")

    
        if(villain.powerstats.combat+villain.powerstats.intelligence > hero.powerstats.combat+hero.powerstats.intelligence){
            console.log("In the middle of his appearance, Zarate throws himself and wears the glasses of the erudite")
            villain.glasses = true;
        }
    
        else{
            console.log("In the middle of his appearance," +hero.name +"throws himself and wears the glasses of the erudite")
            hero.glasses = true;
        }
        console.log("--------------------------------------------------------------")
    }

}

const eruditeStats = (erudite) => {
    const anger = roll(1, 1, 20)
    erudite.ang = anger;

    if (erudite.ang < 5)
    console.log("He is not very angry, he looks kinda cool and chilled")

    else if (erudite.ang < 10)
        console.log("His face looks kinda red, it looks that the fury of the erudite is rising")

    else if(erudite.ang < 16)
        console.log("His boiling range has left his face almost completely red!!!")
    else
        console.log("HE IS THE ANGER, HE IS THE FURY, THERE IS ONLY RED IN HIS FACE!!!!!")
}



export default mainFunction