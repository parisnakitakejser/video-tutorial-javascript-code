enum FuelType {
    'Benzin',
    'Diesel'
}

interface Fuel {
    type: FuelType;
    liter: number;
    km: number;
}

interface Benzin extends Fuel {

}

let BenzinFuel: Benzin = {
    type: FuelType.Benzin,
    liter: 100,
    km: 100 * 20
};

console.log('BenzinFuel:', BenzinFuel)