let inputName = prompt('Lütfen adınızı girin')
let aName = document.querySelector("#myName")
aName.innerHTML = `${inputName}`

// https://www.w3schools.com/js/js_dates.asp 
// buradan buldum
//let date = document.querySelector("#clock")
//const d = new Date();
//document.getElementById("demo").innerHTML = d.getFullYear();
//document.getElementById("demo").innerHTML = d.getMonth() + 1;
//document.getElementById("demo").innerHTML = d.getDate();
//document.getElementById("demo").innerHTML = d.getHours();
//document.getElementById("demo").innerHTML = d.getMinutes();
//document.getElementById("demo").innerHTML = d.getSeconds();

Weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

function showTime() {
    const today = new Date(),
        day = Weekdays[today.getDay()];
    let yr = today.getFullYear();
    let mn = today.getMonth() + 1;
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = dateControl(h);
    m = dateControl(m);
    s = dateControl(s);
    document.getElementById('myClock').innerHTML = yr + " yılında ve " + mn + ". ayında " + h + ":" + m + ":" + s + " " + day;
    setTimeout(showTime, 1000);

}

function dateControl(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}
showTime()