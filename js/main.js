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

/*Esta es la función que crea un elemento de lista con el texto que indiquemos como parámetro*/
const createKoderItem = itemText => {
  let koderItem = document.createElement('li')
  let koderItemText = document.createTextNode(itemText)
  koderItem.appendChild(koderItemText)
  koderItem.classList.add('list-group-item')
  return koderItem
}

const addElementToList = listElement => {
  document.getElementById('koders-list').appendChild(listElement)
}

/*esta es la función que se ejecuta cuando damos click al botón*/
document.getElementById('add-koder').addEventListener('click', () => {
  console.log(koderName)
  document.getElementById('koders-list').replaceChildren()
  kodersArray.push(koderName)
  console.log(kodersArray)
  printNames(kodersArray)
})

const printNames = arrayToPrint => {
  arrayToPrint.forEach(nombre => {
    //console.log(nombre)
    let listElement = createKoderItem(nombre) //=><li>Lore</li>
    addElementToList(listElement)
  })
}

//const printKodersList = () => {}
