console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")

const data = {
    name: "juan",
    age: '25',
    country: "MX",
    "favorite food": "tacos",
    "favorite food categories": {
        mexican: "tacos",
        italian: "pizza",
    },
    screens: ["lg", "hp"]
}

///DOT NOTATION
console.log(data.name)

///// braket notation
console.log(data.age)

//////mix
console.log(data["favorite food categories"]["mexican"])
console.log(data["favorite food categories"]["italian"])

////arreglos
console.log(data.screens[0])
console.log(data.screens[1])
