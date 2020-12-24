class Utility{

    START_POSITION = 0;
    END_POSITION = 100;

    SNAKE=1;
    LADDER=2;
    NO_PLAY=3;

    newPosition;  
    diceCount;

    rollDice = (Random) => {
      Random = Math.floor((Math.random()*6)+1);
      return Random;
    }
  
    optionCheck = (Random) => {
      Random = Math.floor((Math.random()*3)+1);
      return Random;
    }
    
    mainGamePlay = (newPosition) =>
     {
       if(newPosition<this.END_POSITION)
       {
          let diceNumber=this.rollDice();
          let option=this.optionCheck();

          console.log(`\n * Dice No : ${diceNumber}`);

          switch(option)
          {
            case this.SNAKE:
                console.log('\n * Snake *');
                if(newPosition-diceNumber >= this.START_POSITION){
                  newPosition = newPosition - diceNumber;
                }
                break;

            case this.LADDER:
                console.log('\n * Ladder *');
                if(newPosition+diceNumber <= this.END_POSITION){
                  newPosition = newPosition + diceNumber;
                } 
               break;

            case this.NO_PLAY:
                console.log('\n * No Play *');
                newPosition = newPosition;
                break;
          }
      }
        console.log(`\n * New Position Is : ${newPosition}`);
        return newPosition;
     }
 
     twoPlayers = () =>
     {
         let player1Position = this.START_POSITION
         let player2Position = this.START_POSITION
         this.diceCount = this.START_POSITION
        
         while( player1Position < this.END_POSITION && player2Position <  this.END_POSITION ){

            console.log(`\n * Player 1 :-)   `);
            player1Position = this.mainGamePlay(player1Position);
            console.log("----------------------------------------------------------------");
            if(player1Position == this.END_POSITION){
              console.log(` \n *--- PLAYER 1 WON ---* `);
              break;
            }
 
            console.log(`\n * Player 2 :-)   `);
            player2Position = this.mainGamePlay(player2Position);
                console.log("----------------------------------------------------------------");
            if(player2Position == this.END_POSITION){
              console.log(`\n *--- PLAYER 2 WON ---*`);
              break;
            }            
        }
     }    
}
module.exports = new Utility()