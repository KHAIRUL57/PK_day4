console.log("loading");
const h1 = document.querySelector("h1");

console.assert(document.querySelector("h2"), "h2 not found");
const numbers = [
    { first: "Neil", last: "Amstrong"},
    { first: "adam", last: "Khan"},
    { first: "budi", last: "handara"},
]

console.table(numbers)
let number = 1
let string = `Pesantren Kodiing ${number}`
console.log(string)

let info  = ["first", "Second", "third"]
console.log (info[0]) //Second
console.log (info.length) //array method

let plus = 1 + 1
let minus = 2 - 3
let modulus = 7 % 5
let multiple = 4 * 3
console.log(plus)
console.log(minus)
console.log(modulus)
console.log(multiple)

let integer = 8
let comparison = integer == "8"
let comparison1 = integer !== 8
console.log(comparison)
console.log(comparison1)

let comparison2 = integer = 12 && integer ===8
console.log(comparison2)






let currentDate = new Date()
console.log(currentDate)

let year  = currentDate.getFullYear()
console.log(`this year is ${year}`)

let month = currentDate.getMonth()
console.log(`this year is ${month}`)

let date = currentDate.getDate()
console.log(`thiS year is ${date}`)
