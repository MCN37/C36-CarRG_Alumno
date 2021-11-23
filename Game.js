class Game {
    constructor(){}

    getState(){

    
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })
}

update(state){
    database.ref("/").update({
    gameState : state
    });
}

start(){
    if(gameState === 0){
    


    }
}

}