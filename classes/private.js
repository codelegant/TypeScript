var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
})();
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        _super.call(this, "Lai");
    }
    return Rhino;
})(Animal);
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
})();
var animal = new Animal("Gota");
var rhino = new Rhino();
var employee = new Employee("Bob");
