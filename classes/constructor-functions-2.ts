class Greeter {
	static standardGreeting = "Hello, there";
	greeting: string;
	greet() {
		if (this.greeting) {
			return "Hello, " + this.greeting;
		} else {
			return Greeter.standardGreeting;
		}
	}
}

var greeter1: Greeter = new Greeter();
console.log(greeter1.greet());

var greeterMarker: typeof Greeter = Greeter;
//var greeterMarker = Greeter;
greeterMarker.standardGreeting = "Hey there!";
var greeter2: Greeter = new greeterMarker();
console.log(greeter2.greet());