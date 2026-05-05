const marvels_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvels_heros.push(dc_heros)

// console.log(marvels_heros);
// console.log(marvels_heros[3][1]);

// const allHeros = marvels_heros.concat(dc_heros)
// console.log(allHeros);


//  spread (most used)

const all_new_heros = [...marvels_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array. flat (Infinity)  // flattens the array
// console.log(real_another_array);


console.log(Array.isArray("khushi"))
console.log(Array.from("khushi"))    // converts given string to array
console.log(Array.from({name: "khushi"})) // gives empty array    # interesting 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // add all the values into an array
