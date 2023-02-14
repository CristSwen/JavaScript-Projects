function Call_Loop() {      //This function is a While loop. While X is less than 10 it will add to num and X.
    var num = "";
    var X = 1;
    while (X < 10) {
        num += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = num;
}


var word = "Hello World";           //This block of code shows how to print the length of a var. This will print 11
var length = word.length;
document.getElementById("Word").innerHTML = length;


var instruments = ["Violin", "Viola", "Cello", "Bass", "Trumpet", "Bassoon"];       //This code/function shows the array being utilitzed in a for loop. the instruments will print out.
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("List_Of_Instruments").innerHTML = content
}


function array_Function() {         //This array function shows how to create an empty array, add to it, and call it in a statement
    var Best_Cat = [];
    Best_Cat[0] = "Tabby";
    Best_Cat[1] = "Calico";
    Best_Cat[2] = "Siberian Forest";
    Best_Cat[3] = "Maine Coon";
    document.getElementById("Array").innerHTML = "The best cat in world is a " + Best_Cat[3] + ".";
}


function constant_function() {              //This constant function is showing how the dictionary is constant, but can be added to and changed. 
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"Black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}


var L = 22;         //This code makes use of the Let statement to show that Let will only change the L within its block scope
{
    let L = 56;
}
document.getElementById("Let").innerHTML = L;


function myFunction(name) {         //This function makes use of the return statement to return "Hello" with a name that was input
    return "Hello " + name;
}
document.getElementById("Return").innerHTML = myFunction("Sakura");


let car = {             //Utilizing the let statement and return to concatenate a sentence using those variables
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();