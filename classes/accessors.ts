class Employee {
	fullName: string;
}
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
	console.log(employee.fullName);
}