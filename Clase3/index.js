
//SINCRONISMO
//Secuencial y bloqueante
/*
console.log("---------INICIO FS Sincronico---------")

function fsSync() {
    const data = fs.readFileSync("doc.txt", "utf8")
    console.log(data)
    const newData = fs.writeFileSync("doc.txt", "Sobreescribiendo...")
    console.log(newData)
    console.log(newData)
}

fsSync()
console.log("----------FIN FS Sincronico----------")
console.log("FUERAA!")




//ASINCRONISMO
function callback(a, b, cb) {
    //return es una palabra reservada y permite que la función sí o sí retorne un valor
    return cb(a, b)
}

function suma(x, y) {
    return x + y
}

console.log(callback(10, 22, suma))



console.log("---------INICIO FS CALLBACKS---------")
function fsCallbacks() {
    fs.readFile("doc.txt", "utf8", (err, data) => {
        console.log("Error de lectura en FS: ", err)
        console.log("Data en FS: ", data)
    })
}

fsCallbacks()
console.log("---------FIN FS CALLBACKS---------")

console.log("---------INICIO FS CALLBACKS---------")
function fsCallbacks() {
    fs.readFile("doc.txt", "utf8", (err, data) => {
        console.log("Data en FS: ", data)

        fs.writeFile("doc.txt", "Testeando...", () => {
            fs.readFile("doc.txt", "utf8", (err, data) => {
                console.log(data)

                fs.readFile("doc.txt", "utf8", (err, data) => {
                    console.log(data)

                    //CALLBACK HELL: No!!!
                    //No se puede mantener a largo plazo, es un problema la lectura de las respuestas o saber donde termina cada proceso
                    //Es poco performante porque tarda mucho más por cuanto más callbacks existan
                    fs.readFile("doc.txt", "utf8", (err, data) => {
                        console.log(data)
                    })
                })
            })
        })
    })
}

fsCallbacks()
console.log("---------FIN FS CALLBACKS---------")
*/

