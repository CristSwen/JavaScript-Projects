function addition_function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;      //Function that does Addition
}

function subtraction_function() {
    var subtraction = 3 - 4;
    document.getElementById("Math2").innerHTML = "3 - 4 = " + subtraction;      //Function that does Subtraction
}

function multiplication_function() {
    var multiplication = 4 * 4;
    document.getElementById("Math3").innerHTML = "4 * 4 = " + multiplication;       //Function that does Multiplication
}

function division_function() {
    var division= 10 / 2;
    document.getElementById("Math4").innerHTML = "10 / 2 = " + division;        //Funciton that does Division
}

function all_four() {
    var all_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math!").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + all_math;     //An equation involving M, S, A, and D
}

function modulous_function() {
    var modulous= 7 % 2;
    document.getElementById("Math6").innerHTML = "The remainder of 7 divided by 2 is " + modulous;      //Modulous gets the remainder of any division equation
}

function unary_function() {
    var x = 12;
    document.getElementById("Math7").innerHTML = -x;        //Unary Takes any number and gives its opposite sign. Positive to negative and vise versa
}

function increment_function() {
    var x = 21;
    x++;
    document.getElementById("Math8").innerHTML = x;     //Increment increases any number by 1.0
}

function decrement_function() {
    var x = 30;
    x--;
    document.getElementById("Math9").innerHTML = x;     //Decrement decreases any number by 1.0.
}

function random_function() {
    document.getElementById("Math10").innerHTML = window.alert(Math.random() * 100);     //random # between 0 and 1 --> window.alert(Math.random())
}

function my_function() {
    var x = 20;
    document.getElementById("Math11").innerHTML = "The Tangent of 20 is " + Math.tan(x);    //This gets the tangent of variable x
}