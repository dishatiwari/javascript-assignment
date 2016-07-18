function findLargestNumber(number) {
    for (let i = 0; i < arraylist.length; i++) {
        if (number < arraylist[i]) {
            console.log(arraylist[i]);
        }
    }
}
let arraylist = [12, 23, 45, 67, 54, 15, 9, 5, 90, 34]
let inputnumber = prompt("Please enter Number");
findLargestNumber(inputnumber);
