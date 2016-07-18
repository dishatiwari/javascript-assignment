let i = 0;
let inputnumber = prompt("enter any number");
let rem = Math.floor(inputnumber % 10);
let div = Math.floor(inputnumber / 10);
let result = 1;

function calculatingPower() {
    let obtainpower = Math.pow(div, i);
    if (i != rem) {
        i++;
        calculatingPower();
    }

    console.log(obtainpower);

}
console.log("The exponent of a number says how many times the base number is used as a factor82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent");
console.log("         ");

calculatingPower(); 