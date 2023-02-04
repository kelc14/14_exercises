//ex1
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // RETURNS: 8
console.log(yearNeptuneDiscovered); // RETURNS: 1846

//ex2
let planetFacts = {
	numberPlanets: 8,
	yearNeptuneDiscovered: 1846,
	yearMarsDiscovered: 1659,
};

let { numberPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears);
// {yearNeptuneDiscovered: 1846,
// yearMarsDiscovered: 1659}

//ex3
function getUserData({ firstName, favoriteColor = 'green' }) {
	return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // returns 'Your name is Alejandro and you like purple.'
getUserData({ firstName: 'Melissa' }); // returns 'Your name is Melissa and you like green.'
getUserData({}); // returns 'Your name is undefined and you like green.'

//ex4
let [first, second, third] = ['Maya', 'Marisa', 'Chi'];

console.log(first); // return "Maya"
console.log(second); // return "Marisa"
console.log(third); // return "Chi"

//ex5
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
	'Raindrops on roses',
	'whiskers on kittens',
	'Bright copper kettles',
	'warm woolen mittens',
	'Brown paper packages tied up with strings',
];

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ["bright copper kettles", "warm woolen mittens", "brown paper packages tied up with strings"];

//ex6
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // ?[10, 30, 20]

//ex6
// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };

//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

//refactored es2015

const obj = {
	numbers: {
		a: 1,
		b: 2,
	},
};
const {
	numbers: { a, b },
} = obj;

//ex7
var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

//one-line array swap
[arr[0], arr[1]] = [arr[1], arr[0]];

//ex8
const arrayResults = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];

const raceResults = ([first, second, third, ...rest]) => ({
	first,
	second,
	third,
	rest,
});
