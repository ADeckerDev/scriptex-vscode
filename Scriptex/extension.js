const vscode = require('vscode');
const { compileScriptexToHtml } = require('./compiler/scriptexCompiler');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('✅ Scriptex extension activated');

    let currentPanel = null;

    const previewCommand = vscode.commands.registerCommand('Scriptex.showPreview', () => {
        try {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage('⚠ No active editor!');
                return;
            }

            console.log('📝 Active editor detected:', editor.document.uri.fsPath);

            const document = editor.document;
            const htmlContent = compileScriptexToHtml(document.getText());

            if (currentPanel) {
                console.log('🔄 Updating existing preview panel');
                currentPanel.webview.html = htmlContent;
                currentPanel.reveal(vscode.ViewColumn.Beside);
            } else {
                console.log('🆕 Creating new preview panel');
                currentPanel = vscode.window.createWebviewPanel(
                    'scriptexPreview',        // panel type
                    'Scriptex Preview',       // panel title
                    vscode.ViewColumn.Beside, // beside editor
                    {
                        enableScripts: true,
                        retainContextWhenHidden: true
                    }
                );

                currentPanel.webview.html = htmlContent;

                currentPanel.onDidDispose(() => {
                    console.log('❌ Preview panel closed');
                    currentPanel = null;
                }, null, context.subscriptions);
            }
        } catch (err) {
            console.error('❗ Error in Scriptex.showPreview command:', err);
            vscode.window.showErrorMessage('Error opening Scriptex preview. Check console for details.');
        }
    });

    context.subscriptions.push(previewCommand);

    vscode.workspace.onDidChangeTextDocument(event => {
        if (
            currentPanel &&
            event.document === vscode.window.activeTextEditor.document &&
            event.document.languageId === 'scriptex'
        ) {
            console.log('✏ Detected document change, updating preview');
            const updatedHtml = compileScriptexToHtml(event.document.getText());
            currentPanel.webview.html = updatedHtml;
        }
    });
}

function deactivate() {
    console.log('🛑 Scriptex extension deactivated');
}

module.exports = {
    activate,
    deactivate
};
