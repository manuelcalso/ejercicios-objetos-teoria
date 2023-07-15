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


///// ITERACION OBJETOS
///OBJET KEYS
const user = {
    id: 0,
    name: "mike",
    lastName: "Nieva",
}

const keys = Object.keys(user)
console.log("keys", keys)

/////for ...in
for(index in user){
    console.log("index", index)
    console.log("resultado",user[index])
}

///OBJETIVO ES IMPRIMIR PROPIEDAD Y VALOR
const newUser = {

    id: 356,
  
    name: "Mike Nieva",
  
    email: "email@email.com",
  
    country: "México",
  
  }

for(property in newUser){
    
    console.log(newUser[property])
}

//OOP
////CLASES
//// IMPORTANTO EMPEZAR CON MAYUSCULA EL NOMBRE DE LA CLASE 
class Rectangulo {
    /// PROPIEDADES
    constructor(nombre, ancho, altura){
        this.nombre = nombre
        this.ancho = ancho
        this.altura = altura
    }

    //// COMPORTAMIENTOS
    calcularArea(){
        return this.ancho * this.altura

    }

    obtenerNombre(){
        return this.nombre
    }


}

const miRectangulo = new Rectangulo("rectangulin", 35, 10)
console.log("miRectangulo", miRectangulo)    
console.log("area de rectangulin", miRectangulo.calcularArea())
console.log("cual es el nombre:", miRectangulo.obtenerNombre())


const suRectangulo = new Rectangulo("rectangulon", 95, 25)
console.log("suRectangulo", suRectangulo)
console.log("area de rectangulon", suRectangulo.calcularArea())
console.log("cual es el nombre:", suRectangulo.obtenerNombre())