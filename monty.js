class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];

    }

    keepCalculator(amountOfGames) {

        var total = 0;

        for (let i = 0; i < amountOfGames; i++) {

            var newGame = new Game()

            newGame.keepDoorForTheFinalPick()

            if (newGame.won == true) {

                this.gamesWithSameDoorWon++

                total = this.gamesWithSameDoorWon / amountOfGames * 100
            } else {

                this.gamesWithSameDoorLost++
            }
        }
        return total.toFixed(2) + "% of games were won by NOT switching door. "
    }

    changeCalculator(amountOfGames) {

        var total = 0;

        for (let i = 0; i < amountOfGames; i++) {

            var newGame = new Game()

            newGame.switchDoorForTheFinalPick()

            if (newGame.won == true) {

                this.gamesWithDoorChangeWon++

                total = this.gamesWithDoorChangeWon / amountOfGames * 100
            } else {

                this.gamesWithDoorChangeLost++
            }
        }
        return total.toFixed(2) + "% of games were won by NOT switching door. "
    }

}
class Game {
    constructor() {

        this.doors = [];
        this.doorWithTheCar;
        this.doorPicked;
        this.openedGoatDoor;
        this.finalPick;
        this.won;

    }
    keepDoorForTheFinalPick() {
        this.createDoors();
        this.setCarInRandomDoor();
        this.pickARandomDoor();
        this.openDoorWithGoat();
        this.keepFinalDoorPick();
        return this.gameWon();


    }

    switchDoorForTheFinalPick() {
        this.createDoors();
        this.setCarInRandomDoor();
        this.pickARandomDoor();
        this.openDoorWithGoat();
        this.switchFinalDoorPick();
        return this.gameWon();

    }
    createDoors() {

        let door1 = new Door(1, false);
        let door2 = new Door(2, false);
        let door3 = new Door(3, false);

        this.doors.push(door1, door2, door3);
    }

    setCarInRandomDoor() {
        this.doorWithTheCar = this.doors[Math.floor(Math.random() * this.doors.length)];
        this.doorWithTheCar.isCar = true;
    }

    pickARandomDoor() {
        this.doorPicked = this.doors[Math.floor(Math.random() * this.doors.length)];
    }

    openDoorWithGoat() {

        var Result = this.doors.filter(door1 => door1.number != this.doorPicked.number)
        this.openedGoatDoor = Result.find(door => door.isCar != true);
        this.openedGoatDoor.isOpen = true
    }

    switchFinalDoorPick() {
        this.finalPick = this.doors.find(door1 => door1.number != this.doorPicked.number && door1.isOpen != true)

    }

    keepFinalDoorPick() {
        this.finalPick = this.doorPicked
    }

    gameWon() {
        this.won = false;
        if (this.doorWithTheCar == this.finalPick) {
            this.won = true;
        }
        return this.won
    }
}

class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.isOpen = false;

    }
}

var stats = new Statistics()

console.log(stats.keepCalculator(10000000))
console.log(stats.changeCalculator(10000000))