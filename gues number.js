
function action(number) {
    let guesnumber = prompt("Guess the number between 1 and 10");
    if (guesnumber === number) {
        consolel.log("good work");
    }
    else {
        console.log("not matched");
    }
}
let randomnumber = Math.ceil(Math.random());
action(randomnumber);