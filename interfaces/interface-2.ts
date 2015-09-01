interface Label{
	label:string
}
function printLabel(labelobj:Label){
	console.log(labelobj.label)
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);