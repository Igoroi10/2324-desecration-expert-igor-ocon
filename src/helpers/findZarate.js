const findZarate = (heroList) => {
    const zarate = heroList.find((element) => element.name === "Junkpile")
    return zarate
}

export default findZarate