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