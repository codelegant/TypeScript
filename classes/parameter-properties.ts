class Animal {
	constructor(public name: string) { }
	move(meters: number) {
		console.log(this.name + " moved " + meters + "m.");
	}
}
var animal = new Animal("lai");