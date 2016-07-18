function convertIntofahrenheit(celsius) {
    let fahrenheit = (1.8 * celsius) + 32;
    console.log(fahrenheit);
}
function convertIntocelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8
    console.log(celsius);
}
convertIntofahrenheit(60);
convertIntocelsius(45);