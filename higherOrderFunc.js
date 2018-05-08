
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

//Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
// const filteredNames = myNames.filter(name => {
// 	 return name[0] === 'R';
//  });

const filteredNames = filter(myNames, name =>  name[0] === 'R');

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

//********************************************************************* 

function hazardWarningCreator(typeOfWarning) {

	let warningCounter = 0;

	return function(location) {
		warningCounter++;
		const plural = warningCounter > 1 ? 's' : '';
		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
		console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time${plural} today`);
	}
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const deerWarning = hazardWarningCreator('Deer crossing');
const slideWarning = hazardWarningCreator('Road Slide ahead');

rocksWarning('Seattle');
rocksWarning('Seattle');
deerWarning('San Fransico');
slideWarning('Portland');

let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let positiveMovements = movements.filter(movement => {
	if(movement[0] >= 0 && movement[1] >= 0)
		return movement;
});
console.log(positiveMovements);
let steps = movements.map(eachSetOfSteps => {
	return Math.abs(eachSetOfSteps[0]) + Math.abs(eachSetOfSteps[1]);
});

positiveMovements.forEach(setOfMovements => {
	console.log(`Number of steps in ${setOfMovements} is  ${setOfMovements[0] + setOfMovements[1]}`);
});
//********************************************************************* 

let str = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function decodeSentence(string) {
	return string.split(' ').reduce((acc, word) => {		
		return word.length === 3 ?  acc + ' ' : acc +  word[word.length -1].toUpperCase();
		if (word.length === 3)
			 return acc + ' ';			 		
		else
			return acc +  word[word.length -1].toUpperCase();		
	}, '');	
}
console.log(decodeSentence(str));


























