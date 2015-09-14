enum EventType { Mouse, Keyborad };
interface Event { timestamp: number; }
interface MouseEvent extends Event { a: number; b: number }
interface KeyEvent extends Event { KeyCode: number }
function listenEvent(eventType: EventType, handler: (n: Event) => void) {
	console.log(`${eventType}:${handler}`)
	return handler;
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(`${e.x},${e.y}`));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) => console.log(`${(<MouseEvent>e).x},${(<MouseEvent>e).y}`));
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(`${e.x},${e.y}`)));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));