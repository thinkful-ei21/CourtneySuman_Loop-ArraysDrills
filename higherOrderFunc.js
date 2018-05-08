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

*/

function hazardWarningCreator(typeOfWarning) {

	let warningCounter = 0;

	return function(location) {
		warningCounter++;
		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
		if (warningCounter <= 1) {
			console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
		}
		else {
			console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
		}

	}
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const deerWarning = hazardWarningCreator('Deer crossing');
const slideWarning = hazardWarningCreator('Road Slide ahead');

rocksWarning('Seattle');
deerWarning('San Fransico');
slideWarning('Portland');







