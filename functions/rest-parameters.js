function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var emplyeeName = buildName("lai", "xiao", "chai", "yun");
console.log(emplyeeName);
var buildNameFun = buildName;
