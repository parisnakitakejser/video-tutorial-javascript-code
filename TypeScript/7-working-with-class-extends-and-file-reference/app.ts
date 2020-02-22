///<reference path="class.ts"/>

class Opel extends Car {
    brand: string = 'Opel';
}

class Skoda extends Car {
    brand: string = 'Skoda';
}

let car_opel: Opel = new Opel();
console.log(car_opel.brand);

let car_skoda: Skoda = new Skoda();
console.log(car_skoda.brand);