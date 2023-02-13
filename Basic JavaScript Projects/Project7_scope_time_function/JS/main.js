var X = 10;                         //Variable for Global scope
function Add_numbers_1() {          //Global scope function
    document.write(20 + X + "<br>");
}

function Add_numbers_2() {      //Global scope function
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();




function Add_numbers_3() {          //Local scope function
    var Y = 10;
    document.write(20 + Y + "<br>");
}

function Add_numbers_4() {     //Intentional nonfunctioning function
    document.write(Y + 100);
}

Add_numbers_3();
Add_numbers_4();




if (10 < 12) {                                  //A if function to check if a number is smaller than the other
    document.write("10 is less than 12 duh");
}

function get_Date() {                           //This if function checks if the current hour is less than 18:00 then asks a question if it is less than 18:00
    if (new Date().getHours() < 18) {
        document.getElementById("oompa").innerHTML = "How are you today?";
    }
}




function Age_Function() {                   //This if and else function will ask you to input a number age. If you are under 21 it will give you one response vice versa
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink!";
    }
    else {
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
}



function Time_function() {                      //This else if function will tell you what time of day it is using the date methods
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}