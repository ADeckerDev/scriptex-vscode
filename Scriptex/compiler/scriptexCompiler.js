function compileScriptexToHtml(text) {
    // For now, wrap raw content for testing
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: sans-serif; padding: 2em; }
                h1 { color: #d63384; }
            </style>
        </head>
        <body>
            <h1>Scriptex Preview</h1>
            <pre>${text}</pre>
        </body>
        </html>
    `;
}

module.exports = { compileScriptexToHtml };
