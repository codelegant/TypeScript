(function () {
    var Greeter = (function () {
        function Greeter(msg) {
            this.greeting = msg;
        }
        Greeter.prototype.greet = function () {
            return "Hello," + this.greeting;
        };
        return Greeter;
    })();
    var GreeterInstance = Greeter;
    var greeter = new GreeterInstance("laichuanfeng");
    //console.log(greeter.greeting);
    function test(_a) {
        var _b = _a.firstname, firstname = _b === void 0 ? "lai" : _b, _c = _a.lastname, lastname = _c === void 0 ? "chuanfeng" : _c;
        return [firstname, lastname];
    }
    var _a = test({ lastname: "caiyun", firstname: "xiao" }), firstname = _a[0], lastname = _a[1];
    console.log(test({ lastname: "caiyun", firstname: "xiao" }));
})();
