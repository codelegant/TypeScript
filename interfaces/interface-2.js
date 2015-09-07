/*interface Fullname {
    firstname: string
}
function printName(name: Fullname) {
    console.log(name.firstname)
}
var myName = { age: 10, firstname: "Size 10 Object" };
printName(myName);*/
var printName = function (name) {
    console.log(name.firstname);
};
var myName = { age: 24, firstname: "lai" };
printName(myName);
