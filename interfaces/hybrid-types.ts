interface Counter {
	(start: number): string;
	interval: number;
	reset(): void;
}
var c: Counter;
c(20);
c.reset();
c.interval = 4;