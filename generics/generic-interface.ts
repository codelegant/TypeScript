interface GenericIdentityFn {
	<T>(arg: T): T;
}
function identity<T>(arg: T): T {
	return arg;
}
var myIdentity: GenericIdentityFn = identity;


interface Identity<T>{
	(arg: T): T;
}
var identity_1: Identity<number> = identity;