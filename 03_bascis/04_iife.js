// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iifi
    console.log(`DB connected`);
})();

//  if iifi ek saath then semicolon is must

( (name) => {
    // unmaned iifi
    console.log(`DB connected TWO ${name}`);
})("khushi")


// chai()