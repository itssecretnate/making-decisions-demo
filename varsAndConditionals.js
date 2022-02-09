/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Eowyn and
    Witch King of Angmar.
*/ 

// Definte attack values for Ewoyn and Witch King.
let eowynAttack = 50;
let witchKingAttack = 45;

if(eowynAttack > witchKingAttack) console.log("Eowyn is stronger!");
else if (eowynAttack < witchKingAttack) console.log("Witch King of Angmar is stronger!");
else console.log("They are the same strength.");

// Define Ewoyn's health and defense.
let eowynHealth = 100;
let eowynDefense = 0;

if(eowynHealth + eowynDefense <= witchKingAttack) console.log("Eowyn is dead.");
else {
    // eowynHealth -= witchKingAttack;

    console.log(`Eowyn is down to: ${eowynHealth}.`);
}

let coinLandsHeads = false;

if(coinLandsHeads === true) console.log("Witch King gets to run away.");
else console.log("Witch King got stabbed in the face.");

// Let Witch King attack until Eowyn has died.
for(let i = 0; eowynHealth > 0; i++) {
    eowynHealth -= witchKingAttack;
    console.log(`Eowyn has ${eowynHealth} left. Witch King has attacked ${i} times.`);
    if(eowynHealth <= 0) console.log("Eowyn has died.");
}

// while(eowynHealth > 0) {
//     eowynHealth -= witchKingAttack;
//     console.log(`Ewoyn has ${eowynHealth} left`);
// }