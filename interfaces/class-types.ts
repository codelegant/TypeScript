interface ClolkInterface {
	currentTime: Date;
	setTime(d: Date);
}
class Clock implements ClolkInterface {
	currentTime: Date;
	setTime(d: Date) {
		this.currentTime = d;
	}
	constructor(h: number, m: number) { }
}
var clock = new Clock(12, 21);
clock.setTime(2);