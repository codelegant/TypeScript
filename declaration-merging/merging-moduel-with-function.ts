function buildLabel(name: string): string {
	return buildLabel.prefix + name + buildLabel.suffix;
}
module buildLabel {
	export var suffix = "";
	export var prefix = "Hello, ";
}
console.log(buildLabel("lai chuanfeng"));