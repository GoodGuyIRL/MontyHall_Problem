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

        this.createDoors();
        this.setCarInRandomDoor()
        this.pickARandomDoor()
        this.openDoorWithGoat()

    }

    createDoors() {

        let door1 = new Door(1, false);
        let door2 = new Door(2, false);
        let door3 = new Door(3, false);

        this.doors.push(door1, door2, door3);

    }

    setCarInRandomDoor() {

        let carGenerator = Math.floor(Math.random() * 3) + 1;
        this.doorWithTheCar = this.doors[carGenerator - 1];
        this.doorWithTheCar.isCar = true;
        return this.doorWithTheCar.isCar;

    }

    pickARandomDoor() {

        let pickDoorGenerator = Math.floor(Math.random() * 3) + 1;
        this.doorpicked = this.doors[pickDoorGenerator - 1];
        return this.doorPicked;

    }
    openDoorWithGoat() {

        var Result = this.doors.filter(door => door.isCar != true);
        this.openedGoatDoor = Result.find(door => door.number != this.doorPicked)
        this.openedGoatDoor.isOpen = true
        return this.openedGoatDoor.isOpen;

    }

    finalDoorPick() {

    }
}

class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.isOpen = false;

    }
}

let game = new Game()

console.log(game)