import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
/**
 * 业务逻辑
 */
export function getFunctionNode(code: string) {

	let functionNode;
	const ast = parse(code);
	traverse(ast, {
		FunctionDeclaration(path) {
			functionNode = {
				name: path.node.id?.name,
				start: path.node.loc?.start,
				end: path.node.loc?.end
			};
		}
	});
	return functionNode;
}