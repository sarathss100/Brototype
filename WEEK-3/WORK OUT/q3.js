const principalAmount = Number( prompt( `Please enter the Principal Amount : ` ) );
const interestRate = Number( prompt( `Please enter the Interest Rate : ` ) );
const numberOfYears = Number( prompt( `Please enter the Number of Years : ` ) );
const simpleInterest = ( principalAmount * interestRate * numberOfYears ) / 100;

console.log( `Principal Amount entered : Rs. ${ principalAmount }` );
console.log( `Interest Rate entered : ${ interestRate } %` );
console.log( `Number of years entered : ${ numberOfYears }` );
console.log( `Total Interest amount is ${ simpleInterest }` );