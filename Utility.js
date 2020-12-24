class Utility{

    START_POSITION = 0;
    END_POSITION = 100;
    
    Random = 0;

    rollDie =()=> {
        this.Random = Math.floor((Math.random()*6)+1);
        return this.Random
    }

    optionCheck =()=> {
        this.Random = Math.floor((Math.random()*3)+1);
        return this.Random
    }
    
    mainGamePlay =()=> {

        var newPosition = this.START_POSITION;
        var option = 0;
        var diceNumber = 0;
        var No_Play = 1
        var Ladder = 2;
        var Snake = 3;

        while(newPosition < this.END_POSITION){

            var diceNumber =this.rollDie();
            var option = this.optionCheck();

            console.log(`\n * Dice Rolling... And Number Come =: ${diceNumber}`);
            
            switch(option){

                case No_Play:
                    console.log(`\n * No-Play *`);
                    newPosition = newPosition;
                    break;

                case Ladder:
                    console.log(`\n * Ladder *`);
                    if(newPosition+diceNumber <= 100)
                        newPosition = newPosition + diceNumber;
                    break;
                
                case Snake:
                    console.log(`\n * Snake *`);
                    if(newPosition-diceNumber <= 100)
                        newPosition = newPosition - diceNumber;
                    break;
            }
        }
        console.log(`\n * NewPosition is : ${newPosition}`);
    }

}
module.exports = new Utility()