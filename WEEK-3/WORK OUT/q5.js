const mark = Number( prompt( `Please enter your mark : ` ) );

console.log( `You are entered ${ mark }` );
if ( mark > 90 ) {
    console.log( `Your Grade is A` );
} else if ( mark < 90 && mark >= 80 ) {
    console.log( `Your Grade is B` );
} else if ( mark < 80 && mark >= 70 ) {
    console.log( `Your Grade is C` );
} else if ( mark < 70 && mark >= 60 ) {
    console.log( `Your Grade is D` );
} else if ( mark < 60 && mark >= 80 ) {
    console.log( `Your Grade is E` );
} else {
    console.log( `Your are failed!` );
}