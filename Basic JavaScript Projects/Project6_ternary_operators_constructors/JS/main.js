function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Pasta(Shape, Sauce, Toppings) {
    this.Pasta_Shape = Shape;
    this.Pasta_Sauce = Sauce;
    this.Pasta_Toppings = Toppings;
}

var Pasta1 = new Pasta("Fusilli", "Bolognese", "Parmesan");

function my_Function() {
    document.getElementById("New_and_This").innerHTML ="Pasta 1 is " + Pasta1.Pasta_Shape + " with " + Pasta1.Pasta_Sauce + " Sauce and topped with " + Pasta1.Pasta_Toppings;
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}