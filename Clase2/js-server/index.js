console.log("Servidor en Node!");

//Scope
let num1 = 20
let num2 = 18

function suma(x) {
    let num2 = 0
    console.log(x + num2)
}

suma(num1)

//Listas-Arrays
const arr1 = ["verde", "naranja", "violeta", "rojo"]
const arr2 = ["blanco", "negro"]
console.log(typeof(arr1))
console.log(arr1[1])
console.log(arr1.length)
arr1.push("azul")
console.log("arr1 actualizado: ", arr1)
console.log(arr1[arr1.length -1])
console.log("Concat: ", arr1.concat(arr2))

//pop solo lo elimina 
console.log(arr1.pop())
console.log("Pop: ", arr1)


//Objetos
const obj1 = {
    1: "notebook",
    2: "mouse",
    3: "teclado"
}

const obj2 = {
    4: "mate",
    5: "termo",
    6: "yerba"
}

console.log(typeof(obj1))
obj1[4] = "teclado inalambrico"
// tambien podria hacer lo siguiente object "teclado" obj1["teclado"] = "teclado inalambrico"
console.log(obj1)

//Números directos no aceptados, ni al cambiarlo con Num()
obj1.value = "monitor"
console.log(obj1)
console.log(Object.keys(obj1))
console.log(Object.values(obj2))

//typeof me da el tipo de dato primitivo
//Array.isArray -> me confirma si es un array o no
console.log(Array.isArray(Object.values(obj2)))
console.log(Array.isArray(obj2))
console.log("hasOwnProperty: ", obj1.hasOwnProperty(1))
console.log("hasOwn: ", Object.hasOwn(obj1, "mouse"))

//Desestructuring Object
//Un método para extraer valores a variables

let a, b
// console.log(a)
[a, b] = ["esto es A", "esto es B"]
console.log(a, b)
console.log("probando")