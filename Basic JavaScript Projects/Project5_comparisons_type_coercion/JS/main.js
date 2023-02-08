document.write("12" + 2);

document.write(typeof "Word");

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;     //Will print NaN, because you cannot divide 0/0. Therefore it is Not A Number.
    document.getElementById("Test2").innerHTML = isNaN("This is a string");
    document.getElementById("Test3").innerHTML = isNaN("202");
}

function Infinity_function() {
    document.getElementById("Test4").innerHTML = (2E310);       //prints infinity if the number is larger than infinity
    document.getElementById("Test5").innerHTML = (-2E310);      //prints -infinity if the number is larger than negative infinity
}

function boolean_function() {
    document.getElementById("Test6").innerHTML = (10 > 2);      //The boolean function function is > < or ==. Pretty much everything below this
}

function equality_function() {
    document.getElementById("Test7").innerHTML = (10 == 2);     //The equal function says that if both values are equal it is true
}

function Equal_data_function() {
    x = 12;
    y = "twelve";
    document.getElementById("Test8").innerHTML = (x === y);     //The equal data function says that if both data types and data are the same it is true
}

function and_function() {
    document.getElementById("Test9").innerHTML = (12 < 20 && 6 > 3);        //The and function says if both are true then it is true. if one isn't true, it is false.
}

function or_function() {
    document.getElementById("Test10").innerHTML = (12 == 10 || 5 > 2);      //The or function says if either or is true, it is true
}

function not_function() {
    document.getElementById("Test11").innerHTML = !(10 == 10);     //If something is trut he not operator will make it false
}