import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
/**
 * 业务逻辑
 */
export function getFunctionNode() {
	const code = `
		function getName(){
			return 'name'
		}
		function getDemo(){
			return 'name'
		}
	`;
	const ast = parse(code);
	traverse(ast, {
		FunctionDeclaration(path) {
			console.log(path.node);
		}
	});
}