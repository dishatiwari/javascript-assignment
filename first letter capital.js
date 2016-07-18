function changeToUpperCase(textstring) {
    return textstring.substr(0, 1).toUpperCase() + textstring.substr(1);
}
let uc_str = new Array(4);
var s = 'this is quick brown fox';
const str = s.split(' ');
for (let i = 0; i < str.length; i++) {
    uc_str = changeToUpperCase(str[i]);

    console.log(uc_str);
}