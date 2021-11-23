class Form {
    constructor(){
}
display(){



button.mousePressed(function() {

    input.hide();
    button.hide();

    var name = input.value();

    playerCount +=1;
    player.update(name)
    player.updateCount(playerCount);

    
    greeting.html("Hello" + name)
    greeting.position(130,160)
})
    }
}
