function performReverse(number) {
    let rev = 0;
    while (number > 0) {
        remainder = number % 10;
        reverse = reverse * 10 + remainder
        number = Math.floor(n / 10);
        console.log(reverse);
    }
} 
performReverse(345);