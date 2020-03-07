class Car {
    constructor(private car_brand?: string, private car_model?: string) {
        console.log('car constructor')
    }

    get brand() {
        return this.car_brand;
    }

    get model() {
        return this.car_model;
    }
}

class CarOpel extends Car {
    constructor(private engine_type: string, model: string) {
        super('Opel', model);
        console.log('opel car constructor');
    }

    engine () {
        return this.engine_type;
    }
}

let car: Car = new Car();
let opel: CarOpel = new CarOpel('Disel', 'Corsa');

console.log('CarOpel brand:', opel.brand);
console.log('CarOpel brand:', opel.model);
console.log('CarOpel brand:', opel.engine());