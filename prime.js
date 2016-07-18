
function findPrimenumber(number) {
    for (let i = 0; i < number; i++) {
        if (number % i === 0 && number % 1 === 0) {
            console.log("number is prime");
        }
    }

}
findPrimenumber(17);