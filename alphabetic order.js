
function alphabeticOperation(stringtext) {
    console.log("before string " + "  " + stringtext);
    let stringsplit = stringtext.split("");
    let straplhabetic = stringsplit.sort();
    console.log("after reverse" + "  " + straplhabetic);

}
alphabeticOperation('webmaster');