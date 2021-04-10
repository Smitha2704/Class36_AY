class Form{
    constructor(){
        
    }

    display(){
        // Title, Input, Button, Greeting
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(640, 0);

        var input = createInput("Name");
        var button = createButton("Play");

        input.position(620, 160);
        button.position(880, 160);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            var greeting = createElement("h2");
            greeting.html("Hello "+name);
            greeting.position(640,120);

        })
    }
}   