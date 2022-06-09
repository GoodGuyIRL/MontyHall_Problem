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
        this.doorWithTheCar;
        this.doorPicked;
        this.openedGoatDoor;
        this.finalPick;
        this.won;



        // this.createDoors();
        // this.setCarInRandomDoor();
        // this.pickARandomDoor();
        // this.openDoorWithGoat();
        // this.switchFinalDoorPick();
        // this.gameWon();


        // this.keepFinalDoorPick();
    }
    keepDoorForTheFinalPick() {
        this.createDoors();
        this.setCarInRandomDoor();
        this.pickARandomDoor();
        this.openDoorWithGoat();
        this.keepFinalDoorPick();
        return this.gameWon();


    }

    changeDoorForTheFinalPick() {
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

        this.openedGoatDoor = this.doors.filter(door1 => door1.number != this.doorPicked.number && door1.isCar != true)
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

let newGame = new Game()
console.log(newGame.changeDoorForTheFinalPick())