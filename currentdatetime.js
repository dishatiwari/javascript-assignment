function todayTime() {
    let date = new Date();
    let currenttime = date.toTimeString();
    console.log("current time" + "   " + currenttime);
}
function todayDate() {
    let date = new Date();
    let currentdate = date.toDateString();
    console.log("current date" + "   " + currentdate);
}

todayTime();
todayDate();