var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function create(c) {
    return new c();
}
var Beekeeper = (function () {
    function Beekeeper() {
    }
    return Beekeeper;
})();
var Zookeeper = (function () {
    function Zookeeper() {
    }
    return Zookeeper;
})();
var Animal = (function () {
    function Animal() {
    }
    return Animal;
})();
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        _super.apply(this, arguments);
    }
    return Bee;
})(Animal);
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        _super.apply(this, arguments);
    }
    return Lion;
})(Animal);
function findKeeper(a) {
    console.log(a);
    return a.prototype.keeper;
}
var zookeeper = findKeeper(Lion);
//console.log(zookeeper.nametag); //The result should be "string";
//What is K? a is class Lion,then A is instance of class Lion,K is Zookeeper; 
