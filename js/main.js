let phrase = 'La mejor forma de predecir el futuro es creándolo'

/*
1.- Crear una función que me cuente la cantidad de palabras de cualquier string
*/

const countWords = text => {
  let words = text.split(' ')
  let wordsQuantity = words.length
  return wordsQuantity
}

console.log(countWords(phrase))
/*
2.- Crear una función que imprima la cantidad de letras de cada palabra en un string
*/

const printLettersAmount = text => {
  let words = text.split(' ')
  words.forEach(word => {
    let lettersAmount = word.length
    console.log(lettersAmount)
  })
}

console.log(printLettersAmount(phrase))
/*
3.- Crear una función que me entregue una lista de cada una de las palabras con la cantidad de letras que tiene

    "hola mundo"
        "hola - 4"
        "mundo - 5"
    "Corazón coraza"
        "Corazón - 7"
        "coraza - 6"
*/

const createNewList = text => {
  let words = text.split(' ')
  let result = words.map(word => {
    return `${word} - ${word.length}`
  })
  console.log(result)
  return result
}

createNewList(phrase)
/*
4.- Crear una función que me entregue una lista con aquellas palabras que tengan menos de 5 letras
    "hola mundo"
        "hola"
    "Corazón coraza"
*/
const filterSmallWords = text => {
  let words = text.split(' ')
  let result = words.filter(word => {
    return word.length < 5
  })
  return result
}

console.log(filterSmallWords(phrase))
/*
5.- Crear una función que me entregue un string con las palabras que tengan una cantidad de letras par
    "La mejor forma de predecir el futuro es creándolo"
        "La de predecir el futuro es"
    "uno dos tres cuatro cinco seis"
        "tres cuatro seis"
*/

const createEvensString = text => {
  let words = text.split(' ')
  let result = words.reduce((accum, word) => {
    let lettersAmount = word.length
    let isEven = lettersAmount % 2 == 0
    console.log(isEven)
    return isEven ? `${accum} ${word}` : accum
  }, '')
  return result
}

console.log(createEvensString(phrase))
