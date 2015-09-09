function identity<T>(arg: T): T {
	return arg;
}
var myIdentity: <T>(arg: T) => T = identity;

var identity_1: <U>(arg: U) => U = identity;

var identity_2: { <T>(arg: T): T } = identity;
