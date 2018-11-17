//variable for my age
const myAge = 100
//variable for early years
let earlyYears = 2;
earlyYears *= 10.5;
//variable for later years after early years
let laterYears = myAge-2;
//changes later years to dog years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//finds the total amount of dog tears your age is by adding the later and early years
const myAgeInDogYears = earlyYears + laterYears;
//store a name such that its only in lower case
const myName = 'Jessica'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

