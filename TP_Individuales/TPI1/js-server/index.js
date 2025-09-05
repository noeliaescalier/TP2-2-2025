import fs from 'fs'

function filtrarPorCondicion(array, condicion) {
   let esCondicionValida = condicion === 'number' || condicion === 'string' || condicion === 'boolean'
   let arrayFiltrado = array.filter(elemento => typeof (elemento) === condicion)
   let nuevoArrayOrdenadoYfiltrado = arrayFiltrado.sort(function (a, b) {
      if (condicion === 'number') {
         return a - b
      } else {
         if (a > b) {
            return 1
         }
         if (a < b) {
            return -1
         }
         return 0
      }
   })
   let setSinDuplicados = new Set(nuevoArrayOrdenadoYfiltrado)
   let arraySinDuplicados = [...setSinDuplicados]
   if (esCondicionValida && arraySinDuplicados.length > 0) {
      fs.promises.writeFile("doc.txt", arraySinDuplicados.join(",") + "\n", { flag: 'a' })
         .then(() => console.log('Lo que se va escribiendo es: ',  arraySinDuplicados.join(",")))
         .catch((error) => console.log(error))

   } else {
      console.log('La condicion no es valida o el nuevo array no tiene datos')
   }

}

filtrarPorCondicion([2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false], 'number')
filtrarPorCondicion([2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false], 'string')
filtrarPorCondicion([2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false], 'boolean')
filtrarPorCondicion([2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false], 'casa')
filtrarPorCondicion([], 'number')



