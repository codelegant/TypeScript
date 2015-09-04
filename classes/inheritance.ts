class Animal {
	name: string;
	constructor(theName: string) { this.name = theName; }
	move(meters: number = 0) {
		console.log(this.name + " moved " + meters + "m.");
	}
}

class Snake extends Animal {
	//不用重写constructor，用了反而让人迷惑，除非你想指定某个值
	//constructor(name: string) { super(name); }
	constructor() { super("laichuanfeng");}
	move(meters = 5) {
		console.log("Slithering...");
		super.move(meters);
	}
}

class Horse extends Animal {
	constructor(name: string) { super(name); }
	move(meters = 45) {
		console.log("Galloping...");
		super.move(meters);
	}
}
var sam = new Snake();
var tom: Animal = new Horse("Tommy the Palomino");
sam.move();
//tom.move(34);
//tom.name;