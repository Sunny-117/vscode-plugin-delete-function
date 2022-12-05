import * as vscode from 'vscode';
import { getFunctionNode } from './main';
// import traverse from '@babel/traverse';
export function activate(context: vscode.ExtensionContext) {
	vscode.commands.registerCommand('vsc-delete-func.helloWorld', () => {
		vscode.window.showInformationMessage('heiheihei');
	});
	// vscode 怎么删除一个字符
	const editor = vscode.window.activeTextEditor;
	if (!editor) { return; } // 类型收窄
	const code = editor.document.getText();
	let index = editor.document.offsetAt(editor.selection.active);
	const functionNode = getFunctionNode(code, index);
	if (!functionNode) { return; };

	editor.edit((editBuilder) => {
		// editBuilder.delete(new vscode.Range(new vscode.Position(1, 1), new vscode.Position(1, 2)));
		editBuilder.delete(new vscode.Range(new vscode.Position(functionNode.start.line - 1, functionNode.start.column), new vscode.Position(functionNode.end.line - 1, functionNode.end.column)));
	});
}
