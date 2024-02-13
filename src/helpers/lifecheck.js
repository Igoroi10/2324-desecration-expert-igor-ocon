const lifecheck = (villain, hero) => {
    if(hero.hp <= 0){
        console.log("------------------------------------")
        console.log("The villain has won again, now you shall perish")
        console.log("------------------------------------")
        console.log("----------- GAME OVER --------------")
        return true
    }

    else if(villain.hp <= 0){
        console.log("------------------------------------")
        console.log("Thanks to your hero " + hero.name + ", you have defeated Zarate once and for all!")
        console.log("------------------------------------")
        console.log("----------- GAME OVER --------------")
        return true
    }
}

export default lifecheck