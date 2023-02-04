//q1
new Set([1, 1, 2, 2, 3, 4]);
//returns set with 1, 2, 3, 4

//q2
// [...new Set("referee")].join("")
//returns the word ref

//q3
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
//has two elements, one equaling true and one false;

//has duplicate

function hasDuplicate(arr) {
	const newSet = new Set(arr);
	if (newSet.size === arr.length) return false;
	return true;
}

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

const vowelCount = (str) => {
	const countObj = {};
	for (char of str) {
		if (countObj[char]) {
			countObj[char]++;
		} else {
			countObj[char] = 1;
		}
	}
	const countMap = new Map();
	countMap.set({ ...countObj });
	return countMap;
};

vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt'); // Map { 'o' => 1 }

///correct below
// function isVowel(char){
//     return "aeiou".includes(char);
//   }

//   function vowelCount(str){
//     const vowelMap = new Map();
//     for(let char of str){
//       let lowerCaseChar = char.toLowerCase()
//       if(isVowel(lowerCaseChar)){
//         if(vowelMap.has(lowerCaseChar)){
//           vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//         } else {
//           vowelMap.set(lowerCaseChar, 1);
//         }
//       }
//     }
//     return vowelMap;
//   }
