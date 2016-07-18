function action(source, target) {
    let arr = ["SUNDAY", "MONDAY", "TUESDAY", "WENSDAY", "THURSDAY", "FRIDAY", "saturday"];
    let remyear = source - target;
    let result = (remyear % 7);
    let i = (7 - result);

    console.log("1st jan 2050 ..day is " + arr[i]);
}
console.log("1st jan 2014... day is sunday");
action(2050, 2014);