//given
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

//simplify using es2015

const evensOnly = (...args) => args.filter((num) => num % 2 === 0)


//findMin

const findMin = (...args) => args.reduce((max, currValue) => currValue < max ? currValue : max)
//forgot about mathMin

//answer
const actualFindMin = (...args) => Math.min(...args);


//merge objects
const mergeObjects = (firstObj, secondObj) => ({...firstObj, ...secondObj})

//double and return args

const doubleAndReturnArgs = (arr, ...args) => {
    let doubled = [...args].map((n) => n*2);
    return [...arr, ...doubled];
};

//can also do this
const actualDoubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]



/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let itemsCopy = [...items];
    console.log(itemsCopy);
    let random = (Math.floor(Math.random()*items.length));
    itemsCopy.splice(random, 1);
    return itemsCopy;
}

//actual
const actualRemoveRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    const newArray = [...array1, ...array2];
    return newArray;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const newObj = {...obj}
    delete newObj[key];
    return newObj;
};


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    let newObj = {...obj1, ...obj2};
    return newObj;

}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}




////shorthand
function makeColorOldWay(name,hex){
    const color = {};
    color[name] = hex;
    color[hex] = name;
    return color;
}
function makeColor(name,hex){
    return{
        [name]   :hex,
        [hex]   :name,
    }
}

const mystery = {
    [6+7]: 'thirteen'
}
//it evaluates what is inside the hard bracket
//this lets us put a variable inside an object literal