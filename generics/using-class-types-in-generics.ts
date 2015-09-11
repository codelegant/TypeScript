function create<T>(c: { new (): T; }): T {
	return new c();
}

class Beekeeper {
	hasMask: boolean;
}

class Zookeeper {
	nametag: string;
}

class Animal {
	numLegs: number;
}

class Bee extends Animal {
	keeper: Beekeeper;
}

class Lion extends Animal {
	keeper: Zookeeper;
}

function findKeeper<A extends Animal, K>(a: { new (): A; prototype: { keeper: K } }): K {
	console.log(a);
	return a.prototype.keeper;
}
var zookeeper = findKeeper(Lion);
console.log(zookeeper.nametag);//The result should be "string";
//What is K? a is class Lion,then A is instance of class Lion,K is Zookeeper;