import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	vscode.commands.registerCommand('vsc-delete-func.helloWorld', () => {
		vscode.window.showInformationMessage('heiheihei');
	});
	// vscode 怎么删除一个字符
	const editor = vscode.window.activeTextEditor;
	if (!editor) { return; } // 类型收窄
	editor.edit((editBuilder) => {
		editBuilder.delete(new vscode.Range(new vscode.Position(1, 1), new vscode.Position(1, 2)));
	});
}
