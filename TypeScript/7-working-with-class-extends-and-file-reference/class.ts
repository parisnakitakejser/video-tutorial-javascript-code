///<reference path="interface.ts"/>

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

    fuel_level (fuel_type): object {
        return {
            liter: this._fuel,
            km: this._fuel * 20,
            type: (fuel_type == 'Benzin' ? FuelType.Benzin : FuelType.Diesel)
        }
    }
}