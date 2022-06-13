class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];
    }

    keepCalculator(amountOfGames) {
        var totalWins = 0;
        var totalLosses = 0;
        var winCount = 0;
        var lossCount = 0;

        for (let i = 0; i < amountOfGames; i++) {
            var newGame = new Game();

            newGame.keepDoorForTheFinalPick();

            if (newGame.won == true) {
                this.gamesWithSameDoorWon.push(newGame);

                winCount++;

                totalWins = (winCount / amountOfGames) * 100;
            } else {
                this.gamesWithSameDoorLost.push(newGame);

                lossCount++;

                totalLosses = (lossCount / amountOfGames) * 100;
            }
        }
        return [
            totalWins.toFixed(2) +
                "% of games were WON by NOT switching door. ",
            totalLosses.toFixed(2) +
                "% of games were LOST by NOT switching door",
        ];
    }

    changeCalculator(amountOfGames) {
        var totalWin = 0;
        var totalLosses = 0;
        var winCount = 0;
        var lossCount = 0;

        for (let i = 0; i < amountOfGames; i++) {
            var newGame = new Game();

            newGame.switchDoorForTheFinalPick();

            if (newGame.won == true) {
                this.gamesWithDoorChangeWon.push(newGame);

                winCount++;

                totalWin = (winCount / amountOfGames) * 100;
            } else {
                this.gamesWithDoorChangeLost.push(newGame);

                lossCount++;

                totalLosses = (lossCount / amountOfGames) * 100;
            }
        }
        return [
            totalWin.toFixed(2) + "% of games were WON by switching door. ",
            totalLosses.toFixed(2) +
                "% of games were LOST by switching door . ",
        ];
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
        this.doorWithTheCar =
            this.doors[Math.floor(Math.random() * this.doors.length)];
        this.doorWithTheCar.isCar = true;
    }

    pickARandomDoor() {
        this.doorPicked =
            this.doors[Math.floor(Math.random() * this.doors.length)];
    }

    openDoorWithGoat() {
        var Result = this.doors.filter(
            (door1) => door1.number != this.doorPicked.number
        );
        this.openedGoatDoor = Result.find((door) => door.isCar != true);
        this.openedGoatDoor.isOpen = true;
    }

    switchFinalDoorPick() {
        this.finalPick = this.doors.find(
            (door1) =>
                door1.number != this.doorPicked.number && door1.isOpen != true
        );
    }

    keepFinalDoorPick() {
        this.finalPick = this.doorPicked;
    }

    gameWon() {
        this.won = false;
        if (this.doorWithTheCar == this.finalPick) {
            this.won = true;
        }
        return this.won;
    }
}

class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.isOpen = false;
    }
}

var start = new Statistics();

console.log(start.keepCalculator(1000000));
console.log(start.changeCalculator(1000000));
