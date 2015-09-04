class Animal {
	private name: string;
	constructor(theName: string) { this.name = theName; }
}
class Animal_1 {
	constructor(private name: string) { }
}
class Animal_2 {
	constructor(name: string) { }
}
class Animal_3 {
	constructor(public name: string) { }
}
class Animal_4 {
	public name: string;
	constructor(theName: string) { this.name = theName }
}
