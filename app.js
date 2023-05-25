// Re-factor below function

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...numbers) => numbers.filter(n =>  n % 2 === 0);

// findMin

const findMin = (...numbers) => numbers.reduce((min,value) => value < min? value: min)

    //alternative
// const findMin = (...numbers) => Math.min(...numbers)

//mergeObjects

const mergeObjects = (obj1,obj2) => newObject = ({...obj1,...obj2})


// doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...values) => 
   [...arr,...(values.map(value => value * 2))]

//Slice and Dice

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const ranIdx = Math.floor(Math.random()*items.length)
    return [...items.slice(0,ranIdx),...items.slice(ranIdx+1)]
}


/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1,...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key]:val})

const people = {man: 'John'}
const pets = {dog: 'arlo', cat:'kitty'}

/** Return a new object with a key removed. */

// const removeKey = (obj, key) => {
//     let newObj = { ...obj }
//     delete newObj[key]
//     return newObj;
// }

const removeKey = (obj, key) => {
  ({ [key]: undefined, ...obj } = obj);
  return obj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2})


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {...obj,[key]:val}
    return newObj;
}
