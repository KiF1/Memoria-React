import React, { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import game from "./game/game";

function MemoryGame(){

    const [gameover, SetGameOver] = useState(false);
    const [cards, SetCards] = useState([]);
   useEffect(()=>{
    SetCards(game.createCardsFromTechs())
   },[])
   
    function restart(){
        game.clearCards();
        SetCards(game.createCardsFromTechs())
    SetGameOver(false);
}
function handleflip(card){
game.flipCard(card.id, ()=>{
    // gameOverCallback
    SetGameOver(true)
},()=>{
    // noMatchCallback
    SetCards([...game.cards])
})
 SetCards([...game.cards])
}
    return(
<div>
<GameBoard handleflip={handleflip} cards={cards}></GameBoard>
<GameOver show={gameover} handlerestart={restart}></GameOver>
   </div> )
}

export default MemoryGame;