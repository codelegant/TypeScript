var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
var clock = new Clock(12, 21);
var a = Date.now;
clock.setTime(a);
console.log(clock.currentTime);
