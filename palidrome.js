function findPalidrome(textstring) {
    let reversestring = textstring.reverse();
    if (reversestring === textstring) {
        console.log("string is palidrome");
    }
    else {
        console.log("string is not palidrome");
    }

}
findPalidrome('wow');