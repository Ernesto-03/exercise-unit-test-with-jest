// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = (euros) => {
    let monto = euros * 1.2;
    return monto;
}
console.log(fromEuroToDollar(3.5));
module.exports = { sum, fromEuroToDollar };
