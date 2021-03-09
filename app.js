// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = euro => {
    
    return euro * 1.206;
}

console.log(fromEuroToDollar(120));

const fromDollarToYen = dollar => {
    
    return (dollar * 0.83) * 127.9;
}

console.log(fromDollarToYen(100));

const fromYenToPound = yen => {

    return (yen * 0.0078) * 0.8;
}

console.log(fromYenToPound(100));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
