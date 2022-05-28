/*aquí se guarda el nombre del koder*/
let koderName

let kodersArray = []

/*aquí sacamos el nombre del input*/
const getKoderName = event => {
  koderName = event.target.value
  console.log(koderName)
}

/*esta es la función que se ejecuta cuando escribimos en el input*/
document.getElementById('koder-name').addEventListener('keyup', event => {
  getKoderName(event)
})

/*esta es la función que se ejecuta cuando damos click al botón*/
document.getElementById('add-koder').addEventListener('click', () => {
  console.log(koderName)
  kodersArray.push(koderName)
  console.log(kodersArray)
})
