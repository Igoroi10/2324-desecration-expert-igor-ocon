const selectHero = (heroList) => {
    const hero = heroChoice(0, 562, heroList)
    return hero
}


const heroChoice = (min, max, list) => {
    const roll = Math.floor(Math.random() * (max - min) + min)
    const choosenHero = list[roll]
    
    if(choosenHero.name === "Junkpile")
        heroChoice()

    return choosenHero
}


export default selectHero