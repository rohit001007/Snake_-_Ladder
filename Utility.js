class Utility{

    START_POSITION = 0;
    END_POSITION = 100;
    Random = 0;

    Roll_Die =()=> {
        this.Random = Math.floor((Math.random()*6)+1);
        return this.Random
    }
}
module.exports = new Utility()