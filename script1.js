const c = 1
{
    const c = 2
}

console.log(c)

let grade = 88

if(grade >= 90) {
    console.log("A")
} else if (grade >= 80) {
    console.log("B")
} else if (grade >= 97) {
    console.log("c")
} else if (grade >= 65) {
    console.log("D")
} else if (grade >= 90) {
    console.log("E")
} else if (grade >= 87) {
    console.log("F")
}

let animal = "giraffe"
switch (animal) {
    case "Cow":
        console.log("this is cow")
        break
    case "Giraffe":
        console.log("this is giraffe")
        break
    case "Dog":
        console.log("this is Dog")
        break
    case "Pig":
        console.log("this is pig")
        break
    default:
        console.log("this is not animal")
        break

}

let text = ""
for ( let i = 0; i < 5; i++) {
    text += i + ","
    console.log(text)
}

let person = {firstName: "Jhon", lastName: "Doe", age: 25 }
let text1 = ""
for (let x in person) {
    text += person[x] + " "
    console.log(text)
}

let i = 0
let text2 = ""
while (i < 5) {
    text2 += i + ","
    i++
    console.log(text2)
}

let text3 =""
let a = 0
do {
    text3 += a + ","
    a++
    console.log(text3)
} while (i < 5)
