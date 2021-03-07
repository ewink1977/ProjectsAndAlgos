let arr = []

function recursiveSigma(num) {
    if(num > 0) {
        num = Math.floor(num)
        return recursiveSigma(num - 1) + num;
    }
    return 0

}

function recursiveFactorial(num) {
    if( num > 1 ) {
        num = Math.floor(num)
        return recursiveFactorial(num - 1) * num;
    }
    return 1
}


console.log('------ RECURSIVE SIGMA ------')
console.log(recursiveSigma(2.5))
console.log(recursiveSigma(5))
console.log(recursiveSigma(-2))
console.log('------ RECURSIVE FACTORIAL ------')
console.log(recursiveFactorial(3))
console.log(recursiveFactorial(6.5))
console.log(recursiveFactorial(14))