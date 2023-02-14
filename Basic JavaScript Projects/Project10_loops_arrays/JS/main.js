function Call_Loop() {
    var num = "";
    var X = 1;
    while (X < 10) {
        num += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = num;
}


var word = "Hello World";
var length = word.length;
document.getElementById("Word").innerHTML = length;


var instruments = ["Violin", "Viola", "Cello", "Bass", "Trumpet", "Bassoon"];
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("List_Of_Instruments").innerHTML = content
}


function array_Function() {
    var Best_Cat = [];
    Best_Cat[0] = "Tabby";
    Best_Cat[1] = "Calico";
    Best_Cat[2] = "Siberian Forest";
    Best_Cat[3] = "Maine Coon";
    document.getElementById("Array").innerHTML = "The best cat in world is a " + Best_Cat[3] + ".";
}


function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"Black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}


var L = 22;
{
    let L = 56;
}
document.getElementById("Let").innerHTML = L;

function myFunction(name) {
    return "Hello " + name;
}
document.getElementById("Return").innerHTML = myFunction("Sakura");