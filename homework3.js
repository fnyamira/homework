//Fiona Nyamira
//problem 1

console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);

//problem 2

function consequence(cookieThief) {
	if (cookieThief === 'dad') {
		return "He's going to be in major trouble!";
	}

	if (cookieThief === 'mum') {
		return "No big deal.";
	}

	if (cookieThief === "Me") {
		return " No more cookies for you";
	}

	return "Johnny did it";
}

console.log(consequence('Mum'));


//problem 3 

function place() {
	var day = 'Thursday';
	var time = '6:30PM';
	var room = 'HU 317';

	if (day === 'Thursday' && time === '6:30PM' && room === 'HU317') {
		console.log("You are in CA276");
	}
}
//problem 4

var bartSimpson = '';
var i = 0;

while (i < 10) {
	bartSimpson += 'I will be nice to my sister and Homer "Riggggght he! he! he1.';
	i += 1;
}

console.log(bartSimpson);

//Problem 5

bartSimpson = '';

for (i = 0; i < 10; i += 1) {
	bartSimpson += 'I will be nice to my sister and Homer "Riggggght he! he! he1.';
}

console.log(bartSimpson);