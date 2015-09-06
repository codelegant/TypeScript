var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
})();
var greeter1 = new Greeter();
console.log(greeter1.greet());
var greeterMarker = Greeter;
greeterMarker.standardGreeting = "Hey there!";
var greeter2 = new greeterMarker();
console.log(greeter2.greet());
