function buildLabel(name) {
    return buildLabel.prefix + name + buildLabel.suffix;
}
var buildLabel;
(function (buildLabel) {
    buildLabel.suffix = "";
    buildLabel.prefix = "Hello, ";
})(buildLabel || (buildLabel = {}));
console.log(buildLabel("lai chuanfeng"));
