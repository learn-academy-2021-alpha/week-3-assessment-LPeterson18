// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("When createFibArray is called", () => {
  it("return [1, 1, 2, 3, 5,8] if 6 is called",() => {
    //arrange
    const argument = 6
    //act
    const actualResult = createFibArray(argument)
    //assert
  expect(actualResult).toEqual([1, 1, 2, 3, 5, 8])
  })
  it("return [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] if 10 is called",() => {
    //arrange
    const argument = 10
    //act
    const actualResult = createFibArray(argument)
    //assert
  expect(actualResult).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.

//pseudocode
//create a function that takes a number as an argument
//use Array(number) to create array with "number" indices
//fibonacci is every number is the sum of the two numbers before it
//.map of array
//each iteration add number using fibonacci to determine which number
//first two numbers set to 1
//afterward sum previous two array elements together to create new element

// const createFibArray = (number) => {
//   var fibArray = Array(number).fill(0)
//   for(let i = 0; i < fibArray.length; i++){
//     if(i === 0){
//       fibArray[i] = 1
//     } else if(i === 1){
//       fibArray[i] = 1
//     } else{
//       fibArray[i] = fibArray[i - 2] + fibArray[i - 1]
//     }
//   }
//   return fibArray
// }
// console.log(createFibArray(6));
//works with for loop
//GET TO WORK WITH .MAP

const createFibArray = (number) => {
  var fibArray = Array(number).fill(0)
  return fibArray.map((number, i) => {
    if(i === 0){
      return fibArray[i] = 1
    } else if(i === 1){
      return fibArray[i] = 1
    } else{
      return fibArray[i] = fibArray[i - 2] + fibArray[i - 1]
    }
  })
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("When oddNumSorter is called", () => {
  it("return [-9, 7, 9, 199] if [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola'] is called",() => {
    //arrange
    const argument = fullArr1
    //act
    const actualResult = oddNumSorter(argument)
    //assert
  expect(actualResult).toEqual([-9, 7, 9, 199])
  })
  it("return [-823, 7, 23] if ['hello', 7, 23, -823, false, 78, null, '67', 6, 'number'] is called",() => {
    //arrange
    const argument = fullArr2
    //act
    const actualResult = oddNumSorter(argument)
    //assert
  expect(actualResult).toEqual([-823, 7, 23])
  })
})


// b) Create the function that makes the test pass.

//pseudocode
//create function
//takes array as argument
// use .filter to remove all non-number elements and all even numbers
//rearrange array using .sort
//return new Array

const oddNumSorter = (array) => {
  return array.filter(element => {
    return typeof element === 'number' && element % 2 !== 0
  }).sort((a,b) => a-b)
}


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.

var middleLetters1 = "alpha"
// Expected output: “p”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”

describe("When findStringMidLetter is called", () => {
  it("return 'p' if 'alpha' is called",() => {
    //arrange
    const argument = middleLetters1
    //act
    const actualResult = findStringMidLetter(argument)
    //assert
  expect(actualResult).toEqual("p")
  })
  it("return 'oc' if 'rhinoceros' is called",() => {
    //arrange
    const argument = middleLetters2
    //act
    const actualResult = findStringMidLetter(argument)
    //assert
  expect(actualResult).toEqual("oc")
  })
})

// b) Create the function that makes the test pass.

//pseudocode
//create function
//takes in string as argument
//if statement for even and if for odd to know whether to take 1 of 2 letters
//.slice to remove letter or set of letters
// 5 letter word need letter at index of 2 => .length of 5 letter word is 5 => subtract 1 = 4 => divide by 2 = 2 => remove 1 letter at 2 index
// 6 letter word need letters at indices of 2 and 3 => .length of 6 letter word is 6 => divide by 2 = 3 => subtract 1 to get index 2 => remove 2 letters
// indices used in .slice are from .length
//return letters sliced out

const findStringMidLetter = (string) => {
  if(string.length % 2 === 0){
    return string.slice((string.length / 2) - 1, (string.length/2) + 1)
  } else if(string.length % 2 !== 0){
    return string.slice(((string.length - 1) / 2), ((string.length-1)/2) + 1)
  }
}


// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe("When createAccumSumArray is called", () => {
  it("return [2, 6, 51, 60] if [2, 4, 45, 9] is called",() => {
    //arrange
    const argument = numbersToAdd1
    //act
    const actualResult = createAccumSumArray(argument)
    //assert
  expect(actualResult).toEqual([ 2, 6, 51, 60 ])
  })
  it("return [0, 7, -1, 11] if [0, 7, -8, 12] is called",() => {
    //arrange
    const argument = numbersToAdd2
    //act
    const actualResult = createAccumSumArray(argument)
    //assert
  expect(actualResult).toEqual([ 0, 7, -1, 11 ])
  })
  it("return [] if [] is called",() => {
    //arrange
    const argument = numbersToAdd3
    //act
    const actualResult = createAccumSumArray(argument)
    //assert
  expect(actualResult).toEqual([])
  })
})

// b) Create the function that makes the test pass.

//pseudocode
//create a new function
//takes an array as an argument
//.map the array
//set element equal to each element before plus current elements
//return new Array

const createAccumSumArray = (array) => {
  var accumSumArray = array.map((number, index) => {
    if(index === 0) {
      console.log(array[index]);
      return array[index] = array[index]
    } else{
      console.log(array[index]);
      array[index] = array[index - 1] + array[index]
      return array[index]
    }
  })
  return accumSumArray
}

//
