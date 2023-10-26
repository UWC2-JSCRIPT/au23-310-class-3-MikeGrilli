// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class SpaceShip {
    constructor(name , topSpeed, weaponType, attackDamage, health) {
        this.name = name
        this.topSpeed = topSpeed
        this.weaponType = weaponType
        this.attackDamage = attackDamage
        this.health = health
    }
    accelerate() {
        const { name, topSpeed } = this
        // console.log(this)
        console.log(`${name} has a top speed of ${topSpeed} miles per hour.`)
    }
    combat() {
        const { name, weaponType, attackDamage, health } = this
        console.log(`${name} uses ${weaponType}, which do ${attackDamage} damage. The ships total health is ${health}.`)
    }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const ship1 = new SpaceShip('The Dirk Digler', 700, 'Lasers', 30, 100)
const ship2 = new SpaceShip('Pineapple Express', 1300, 'Plasma Cannons', 10, 100)

ship1.accelerate()
ship2.accelerate()

// ship1.combat()
// ship2.combat()



// Attacking program
const attackShipTwo = (spaceShipOne, SpaceShipTwo) => {
    const firstStrike = spaceShipOne.attackDamage
    const targetedShip = spaceShipOne.health
    const totalHealthRemaining =  targetedShip - firstStrike
    SpaceShipTwo.health = totalHealthRemaining
    console.log(`${spaceShipOne.name} hit the ${SpaceShipTwo.name} for ${firstStrike}. ${SpaceShipTwo.name} has ${SpaceShipTwo.health} health remaining`)
}

attackShipTwo(ship1,ship2)



