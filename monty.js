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
    }

    createDoors() {
        let door1 = new Door(1, false);
        let door2 = new Door(2, false);
        let door3 = new Door(3, false);

        this.doors.push(door1, door2, door3);
    }

    setCarInRandomDoor() {
        let carGenerator = Math.floor(Math.random() * 3) + 1
        this.doorWithTheCar = this.doors[carGenerator - 1]
        this.doorWithTheCar.isCar = true;
        return this.doorWithTheCar.isCar
    }
    pickARandomDoor() {
        let pickDoorGenerator = Math.floor(Math.random() * 3) + 1
        this.doorpicked = this.doors[pickDoorGenerator - 1]
        return this.doorPicked
    }
    openDoorWithGoat() {

    }

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