interface ClockStatic {
	new (hour: number, minute: number);
}
class Clock{
	currentTime: Date;
	constructor(h,m) { };	
}
var ClockInstance: ClockStatic  = Clock;
var clock = new ClockInstance(4, 5);