// Oussama's Advice
// step by step - Everything is working
// Understand accurancy 
// Make it simpler



// Create a variable "assembly" that represents the USS Assembly spaceship with properties "hull" (20),
// "firepower" (5), and "accuracy" (0.7)
// Create an empty list "aliens" to store the alien spaceships


// For each alien spaceship:
//   - Create a variable "alien" with properties "hull" (random number between 3 and 6), 
//"firepower" (random number between 2 and 4), and "accuracy" (random number between 0.6 and 0.8)
//   - Add "alien" to the "aliens" list

// While there are still alien spaceships in the "aliens" list:
//   - Set the current alien spaceship to the first one in the "aliens" list
//   - While the "current alien" spaceship's "hull" is greater than 0 and the assembly's
//     "hull" is greater than 0:
//     - Display a message "You attack the alien spaceship with your lasers"
//     - Check if the attack hits using the assembly's "accuracy" property
//     - If the attack hits:
//       - Subtract the assembly's "firepower" from the current alien spaceship's "hull"
//       - Display a message "You hit the alien spaceship! Its hull is now at [current alien spaceship's hull]"
//     - Else:
//       - Display a message "You missed the alien spaceship"
//     - If the current alien spaceship's "hull" is greater than 0:
//       - Display a message "The alien spaceship attacks you"
//       - Check if the attack hits using the current alien spaceship's "accuracy" property
//       - If the attack hits:
//         - Subtract the current alien spaceship's "firepower" from the assembly's "hull"
//         - Display a message "The alien spaceship hit you! Your hull is now at [assembly's hull]"
//       - Else:
//         - Display a message "The alien spaceship missed you"
//   - If the current alien spaceship's "hull" is less than or equal to 0:
//     - Display a message "You have destroyed the alien spaceship!"
//     - Remove the current alien spaceship from the "aliens" list
//     - Ask the player if they want to retreat or continue fighting the next alien spaceship
//     - If the player chooses to retreat:
//       - Exit the game
//   - If the assembly's "hull" is less than or equal to 0:
//     - Display a message "You have been destroyed. Game over."
//     - Exit the game



Player = {

    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    
    DefenseAttack(index) {

     alien[index].hull - Player.firePower 
    
    let newHullValue = alienship1.hull - Player.firePower 

    return newHullValue

    }
    
    }

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const random2 = (min , max) => Math.random() * (max - min) + min;

// Creating 6 alien ship blueprint

class AlienShip {
    constructor(){
        this.hull = random(3,6)
        this.firePower = random (2,4)
        this.accuracy = random2 (0.6,0.8)
    }

evilAttack(){ 

    // player.hull - alien[index].firePower 
    

    let newHullValue = player.hull - alienship1.firePower 

    return newHullValue
}

}

const alienship1 = new AlienShip()


// let alien = [new AlienShip(), new AlienShip(), new AlienShip(), new AlienShip(), new AlienShip(), new AlienShip()]

// loop for the array 
// for (let i = 0; i<alien.length; i++){
//     alien[i]
//     Player.attack(i)
      Player.attach (alien[i])
    
// }

// console.log(alien)
// input
// Player attacks aleinship - bring down their hull value to  0 or less

if (Math.random() < Player.accuracy){

    Player.DefenseAttack()
    console.log("You attacked the alien spaceship with your lasers")

    if(alienship1.hull > 0) {
        console.log("Alien ship survives")
        if (Math.random() < alienship1.accuracy){
            alienship1.evilAttack()
            console.log("Alienship has attacked you")
        }
        else{
            console.log("Alienship has missed you")
        }
    
    }

    else {
        console.log("Alein ship destroyed")
        // option to retreat or attack
    }
}

else {
    console.log("You missed the alien ship")
    if (Math.random() < alienship1.accuracy){
        alienship1.evilAttack()
        console.log("Alienship has attacked you")
    }
    else{
        console.log("Alienship has missed you")
    }
}




// reduce their hull value by our firePower value Player.firePower - alienship1.hull

// if (Math.random() < alienship1.accuracy) {

//  "we have been hit"
//  alien.firePower - player.hull

//  if (Math.random() < Player.accuracy){
    
//     "They have been hit"

// if (Math.random() > alienship1.accuracy) { they have been hit}

// do something

//output the gameround results












// function generateRandom(min = 0, max = 100) {

//     // find diff
//     let difference = max - min;

//     // generate random number 
//     let rand = Math.random();

//     // multiply with difference 
//     rand = Math.floor( rand * difference);

//     // add with min value 
//     rand = rand + min;

//     return rand;
// }

// console.log(generateRandom());
