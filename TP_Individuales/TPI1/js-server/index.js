import fs from "fs"
//import fs from "fs/promises"

/*
function filtrarPorCondicion(array,condicion) {

    fs.promises.readFile("doc.txt", "utf8")
        .then((respuesta) => console.log(respuesta))
        .catch((error) => console.log(error))
}
*/


 function filtrarPorCondicion(array,condicion) {
   let esCondicionValida = condicion == 'number' || condicion == 'string' || condicion == 'boolean'
   let  arrayFiltrado = array.filter(elemento=> typeof(elemento) == condicion)
   let nuevoArrayOrdenadoYfiltrado = arrayFiltrado.sort(function(a, b){
    if(condicion == 'number'){
       return a - b
    }else{
       if(a>b){
        return 1
       }
       if(a<b){
        return -1
       }
       return 0
    }
})
   let setSinDuplicados = new Set(nuevoArrayOrdenadoYfiltrado);
   let arraySinDuplicados = [...setSinDuplicados]
   if(esCondicionValida && arraySinDuplicados.length > 0){
         // let data = await fs.readFile("doc.txt", "utf8")
            let data = fs.promises.writeFile("doc.txt",arraySinDuplicados.join(",") + "\n", {flag: 'a' })
             .then(data => console.log(data))
             .catch(error => console.log(error))

   }else{
        console.log('La condicion no es valida o el nuevo array no tiene datos')
   }

filtrarPorCondicion([2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false],'number')
filtrarPorCondicion([2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false],'string')
filtrarPorCondicion([2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false],'boolean')
filtrarPorCondicion([2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false],'casa')

   /*
   if(esCondicionValida && nuevoArrayOrdenadoYfiltrado.length > 0){
         
    fs.promises.readFile("doc.txt", "utf8")
        .then((respuesta) => {
            console.log(respuesta)
        fs.writeFile("doc.txt", arraySinDuplicados)
        })
        .catch((error) => console.log(error))
   }
    */
}


//--------------------------------------CORRECTA---------------------------------------------------------
/*

async function filtrarPorCondicion(array,condicion) {
   let esCondicionValida = condicion == 'number' || condicion == 'string' || condicion == 'boolean'
   let  arrayFiltrado = array.filter(elemento=> typeof(elemento) == condicion)
   let nuevoArrayOrdenadoYfiltrado = arrayFiltrado.sort(function(a, b){
    if(condicion == 'number'){
       return a - b
    }else{
       if(a>b){
        return 1
       }
       if(a<b){
        return -1
       }
       return 0
    }
})
   let setSinDuplicados = new Set(nuevoArrayOrdenadoYfiltrado);
   let arraySinDuplicados = [...setSinDuplicados]
   if(esCondicionValida && nuevoArrayOrdenadoYfiltrado.length > 0){
         // let data = await fs.readFile("doc.txt", "utf8")
            await fs.writeFile("doc.txt",arraySinDuplicados.join(",") + "\n", {flag: 'a' })
           

   }

}

*/


//console.log('Number:',filtrarPorCondicion([2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false],'number'))
//console.log('String:',filtrarPorCondicion([2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false,"d","m"],'string'))
//console.log('Boolean:',filtrarPorCondicion([2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false,false,true],'boolean'))
