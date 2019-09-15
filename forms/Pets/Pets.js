let numbers = [3,17,94,11,45,76,22,2,77,32,87]
numberLength = numbers.length
console.log('There are ' +  numberLength +  ' numbers in the array.')


let pets = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]

/*
Option 1
let pos = pets.indexOf('Vinny');
pets.splice(pos, 1)
console.log(pets)

let pos = pets.indexOf('Marty');
pets.splice(pos, 1)
console.log(pets)

pets.unshift('Nancy')
console.log(pets)

pets.push("Alex")
console.log(pets)


let posRiley = pets.indexOf('Riley');
console.log(posRiley)
console.log(pets)

let posCindy = pets.indexOf('Cindy');
console.log(posCindy)
console.log(pets)

let withMarmaduke = pets + " ,Marmaduke"
console.log(withMarmaduke)
*/

/*
Option 2
let removedArray = pets.shift()
console.log(removedArray)

pets.unshift("Barney")
console.log(pets)

let newPets = ['Ted','Fred','Jed','Ned','Ed','Zed']
let allPets = pets.concat(newPets)
console.log(allPets)

let removedArray = allPets.shift()
console.log(removedArray)

let petString = allPets.join()
console.log(petString)

allPets.unshift("Agnes")
console.log(allPets)
*/