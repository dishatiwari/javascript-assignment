
function performlongestword(s) {

    const str = textstring.split(" ");
    console.log(str.sort());
    for (i = 0; i < str.length; i++) {

        console.log(str[i].length);
    }
}

performlongestword("web development world");