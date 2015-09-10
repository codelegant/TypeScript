interface GenericIdentityFn {
	<T>(arg: T): T;
}
function identity<T>(arg: T): T {
	return arg;
}
var myIdentity: GenericIdentityFn = identity;

//明确接口的类型
interface Identity<T>{
	(arg: T): T;
}
var identity_1: Identity<number> = identity;
