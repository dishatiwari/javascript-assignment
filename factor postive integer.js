function factorsOfPositiveInteger(number) {
    console.log("factor of postive integer number ");
    for (i = 0; i < number; i++) {

        if (number % i === 0 && number > 0) {
            console.log(i);
        }
    }
}
factorsOfPositiveInteger(24);