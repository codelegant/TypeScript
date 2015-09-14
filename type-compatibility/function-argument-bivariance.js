var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyborad"] = 1] = "Keyborad";
})(EventType || (EventType = {}));
;
function listenEvent(eventType, handler) {
    console.log(eventType + ":" + handler);
    return handler;
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, function (e) { return console.log(e.x + "," + e.y); });
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, function (e) { return console.log(e.x + "," + e.y); });
listenEvent(EventType.Mouse, (function (e) { return console.log(e.x + "," + e.y); }));
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, function (e) { return console.log(e); });
