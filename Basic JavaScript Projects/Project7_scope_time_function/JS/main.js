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




if (10 < 12) {
    document.write("10 is less than 12 duh");
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("oompa").innerHTML = "How are you today?";
    }
}




function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink!";
    }
    else {
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
}



function Time_function() {
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