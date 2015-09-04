(function() {
	interface GreeterIn {
		new (message: string): Greeter;
	}
	class Greeter {
		greeting: string;
		constructor(msg) {
			this.greeting = msg;
		}
		greet() {
			return "Hello," + this.greeting;
		}
	}
	var GreeterInstance: GreeterIn = Greeter;
	var greeter = new GreeterInstance("laichuanfeng");
	console.log(greeter.greet());
	function test({firstname ="lai", lastname = "chuanfeng"}){
		return [firstname,lastname];
	}
	var [firstname, lastname] = test({lastname:"caiyun",firstname:"xiao"});
	//console.log(test({lastname:"caiyun",firstname:"xiao"}));
})();
