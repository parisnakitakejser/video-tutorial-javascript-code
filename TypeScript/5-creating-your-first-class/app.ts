class Car {
    brand: string;
    model: string;

    private _fuel: number = 0;
    private _engine_on: boolean;

    get engine_on(): boolean {
        return this._engine_on;
    }

    set engine_on(newEngineOn: boolean) {
        this._engine_on = newEngineOn;
    }

    fuel_level (): object {
        return {
            liter: this._fuel,
            km: this._fuel * 20
        }
    }
}

let car: Car = new Car();
car.brand = 'Opel';
car.model = 'Insiga';
car.engine_on = true;
console.log('engine_on:', car.engine_on);
console.log(car.fuel_level());