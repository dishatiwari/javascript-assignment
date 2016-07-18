function performLongestword(stringtext) {

    for (var i = 0; i < stringtext.length; i++) {
        if (stringtext[i] === 'a' || stringtext[i] === 'e' || stringtext[i] === 'i' || stringtext[i] === 'o' || stringtext[i] === 'u') {
            count++;
        }
    }
    console.log(count);
} var count = 0;
performLongestword("quick brown fox");
