function my_dictionary() {
    var Game = {        //Creating a dictionary for a game
        Title:"Nier:Automata",
        Genre:"RPG",
        SubGenre:"Bullet Hell",
        SubGenre2:"Hack And Slash",
        ReleaseYear:"2017",
        Creator:"Yoko Taro"
    };
    delete Game.ReleaseYear;        //Deletes the Release Year key value pair
    document.getElementById("Dictionary").innerHTML = Game.Title;       //Getting the value from the key Title
    document.getElementById("Dictionary2").innerHTML = Game.ReleaseYear;        //Getting the value from the key ReleaseYear
}