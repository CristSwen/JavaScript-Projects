function Call_Loop() {
    var num = "";
    var X = 1;
    while (X < 10) {
        num += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = num;
}