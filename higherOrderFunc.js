/*
function repeat(fn, n) {

	for (let i = 0; i < n; i++) {
		fn();
	}
}

function hello() {
	console.log('Hello world');
}

function goodbye() {
	console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

//console.log(filteredNames) // => ['Rich', 'Ray']

function filter(arr,fn) {
	arr.forEach(element => {
		if(fn(element))
			console.log(element);		
	});
}
	// let newArray = [];
	// for(let i =0; i< arr.length ; i++){
	// 	if(fn(arr[i]))
	// 		newArray.push(arr[i]);
	// }
	// return newArray;



// function hazardWarningCreator(typeOfWarning) {

// 	let warningCounter = 0;

// 	return function(location) {
// 		warningCounter++;
// 		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
// 		if (warningCounter <= 1) {
// 			console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
// 		}
// 		else {
// 			console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
// 		}

// 	}
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const deerWarning = hazardWarningCreator('Deer crossing');
// const slideWarning = hazardWarningCreator('Road Slide ahead');

// rocksWarning('Seattle');
// rocksWarning('Seattle');
// deerWarning('San Fransico');
// slideWarning('Portland');

let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let positiveMovements = movements.filter(movement => {
	if(movement[0] >= 0 && movement[1] >= 0)
		return movement;
});
//console.log(positiveMovements);
let steps = [];
steps.push(positiveMovements.map(eachSetOfSteps => {
	return eachSetOfSteps[0] + eachSetOfSteps[1];
}));


positiveMovements.forEach(setOfMovements => {
	console.log(`Number of steps in ${setOfMovements} is  ${setOfMovements[0] + setOfMovements[1]}`);
});

*/

let str = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function decodeSentence(string) {

	let arrayOfWords = string.split(' ');

	let newSentence = arrayOfWords.reduce((word, sentence) => {
		
		if (word.length === 3) {
			return sentence + ' ';
		} 
		else {
			//return sentence + word.indexOf(-1).toUpperCase();
		}
		
	}, []);

	return newSentence.join();
}

console.log(decodeSentence(str));


























