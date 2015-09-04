class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello, " + this.greeting;
	}
}

var greeter: Greeter = new Greeter("world");
console.log(greeter.greet());