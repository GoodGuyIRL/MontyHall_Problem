class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];
    }
}
class Game {
    constructor() {
        this.doors = [];
        this.doorPicked;
        this.openedGoatDoor;
        this.finalPick;
        this.won;

        this.createDoors();
    }

    createDoors() {
        let door1 = new Door(1, false);
        let door2 = new Door(2, false);
        let door3 = new Door(3, false);

        this.doors.push(door1, door2, door3);
    }

    setCarInRandomDoor() {
        let oneToThreeGenerator = Math.floor(Math.random() * 3) + 1
        return oneToThreeGenerator
    }
    //Add any method needed
}
class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.opened = false;
    }
}




let game = new Game()

console.log(game)


//console.log(game.setCarInRandomDoor())