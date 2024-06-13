// Exercise 1A: Temperature check using if-else
let temperature = 20; // I can always change this number, the 20 is not constant, so it can be 10, 40, 15 or any number that will be the temp that day.
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature <= 15) {
    console.log("It's cold.");
} else if (temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Exercise 1B: Temperature check using switch
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
        break;
}

// Exercise 2A: Divisibility Check using if-else
let number = 6; // I can always replace this number it can be 12, 20, 30 and so on.
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Exercise 2B: Divisibility Check using switch
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}

// Exercise 3: For loops
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let sumOfNumbers = 0;
for (let i = 1; i <= 100; i++) {
    sumOfNumbers += i;
}
console.log(sumOfNumbers);

const numbers1 = [1, 2, 3, 4, 5];
for (let number of numbers1) {
    console.log(number);
}

const numbers2 = [3, 7, 2, 5, 10, 6];
let largestNumber = numbers2[0];
for (let number of numbers2) {
    if (number > largestNumber) {
        largestNumber = number;
    }
}
console.log(largestNumber);

// Exercise 4: While loops
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

let sumWhile = 0;
i = 1;
while (i <= 100) {
    sumWhile += i;
    i++;
}
console.log(sumWhile);

i = 5;
while (i < 50) {
    console.log(i);
    i += 5;
}

// Exercise 5: Do While loops
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

let sumDoWhile = 0;
i = 1;
do {
    sumDoWhile += i;
    i++;
} while (i <= 100);
console.log(sumDoWhile);

let userInput;
do {
    userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10);

const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = prompt("Guess a number between 1 and 10:");
} while (guess != correctNumber);
console.log("Correct! The number was " + correctNumber);

//Finally, I explored conditional statements and loops. I wrote code to check temperature ranges and divisibility, using if-else and switch statements for decision-making. I also used for, while, and do-while loops to repeat tasks, such as printing sequences, summing numbers, and creating a simple guessing game. These exercises solidified my understanding of fundamental programming concepts in JavaScript. Now I'm practicing more and more.
