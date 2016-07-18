function factorialRecursion(inputnumber) {

    if (inputnumber === 0) {
        return 1;
    }
    return inputnumber * factorialRecursion(inputnumber - 1);

}
let number = prompt("enter d number to calculate its factorial");
let factresult = factorialRecursion(number);
console.log(factresult);