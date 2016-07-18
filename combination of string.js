function calculateSubstring(text) {
    for (let i = 1; i <= a.length; i++) {
        console.log(a.substring(0, i));
    }
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
var s = reverseString("dog");
calculateSubstring("dog");
calculateSubstring(s);