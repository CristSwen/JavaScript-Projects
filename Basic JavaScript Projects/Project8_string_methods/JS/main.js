function full_Sentence() {                  //This function uses concatenation to combine all four of the variable strings into a full sentence
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}


function Slice_Method() {               //Slice will take the characters from 27 to 33 and only print those
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}



var text1 = "This is some text";            //toUpperCase turns the string text all into uppercase
var text2 = document.write(text1.toUpperCase());

var str = "This is a string";                   //indexOf grabs the index of where the word string starts
var str2 = document.write(str.indexOf("string"));



function string_Method() {          //toString converts a number to a string
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}



function precision_Method() {               //The toPrecision method only grabs the first 10 index's of the number
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

var num = 6.673299;         //This method converts the number into a string and shorts the decimal down to the specified number of places
document.write(num.toFixed(3));

var num2 = 22;              //valueOf returns the primitive version of what you typed. so 22
var num3 = document.write(num2.valueOf());
