var x;
var y = { name: "Alice", location: "Seattle" };
x = y;
//To check whether y can be assigned to x
//the compiler checks each property of x to find a corresponding compatible property in y. 
function greet(n) {
    alert('Hello, ' + n.name);
}
greet(y); // OK
