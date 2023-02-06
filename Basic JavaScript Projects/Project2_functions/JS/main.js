function My_First_Function() {           //This function creates a button that when pressed will display, "This is the button text!"
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}

function my_Function() {            //This function concatenates the two strings under the sentence variable and will display a "Click here!" text. If that "CLick Here!" is clicked it will display the concatenated sentence.
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}