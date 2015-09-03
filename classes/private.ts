class Animal{
	private name: string;
	constructor(theName: string) { this.name = theName;}
}

class Rhino extends Animal{
	constructor() { super("Lai");}
}

class Employee{
	private name: string;
	constructor(theName: string) { this.name = theName;}
}

var animal = new Animal("Gota");
var rhino = new Rhino();
var employee = new Employee("Bob");
