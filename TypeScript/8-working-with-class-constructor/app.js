var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(car_brand, car_model) {
        this.car_brand = car_brand;
        this.car_model = car_model;
        console.log('car constructor');
    }
    Object.defineProperty(Car.prototype, "brand", {
        get: function () {
            return this.car_brand;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this.car_model;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var CarOpel = /** @class */ (function (_super) {
    __extends(CarOpel, _super);
    function CarOpel(engine_type, model) {
        var _this = _super.call(this, 'Opel', model) || this;
        _this.engine_type = engine_type;
        console.log('opel car constructor');
        return _this;
    }
    CarOpel.prototype.engine = function () {
        return this.engine_type;
    };
    return CarOpel;
}(Car));
var car = new Car();
var opel = new CarOpel('Disel', 'Corsa');
console.log('CarOpel brand:', opel.brand);
console.log('CarOpel brand:', opel.model);
console.log('CarOpel brand:', opel.engine());
//# sourceMappingURL=app.js.map