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

function Add_numbers_4() {      //Intentional nonfunctioning function
    console.log(Y + 100);
}

Add_numbers_3();
Add_numbers_4();