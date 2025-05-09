let supportedCommands = [
    "clist",
    "cover",
    "item",
    "blurb",
    "expo",
    "ping"
];

function compileScriptexToHtml(text) {
    // For now, wrap raw content for testing

    var document = `
    <!DOCTYPE html>
    <html>
    <p>`

    // Open text stream
    text.split('\n').forEach(line => {
        if (line[0] === "\\"){
            
        }
    });

    //close and return HTML
    return document += `
    </p>
    </html>`;
}

function commandPass(command){

}

function throwFit(errorMessage){
    
}

module.exports = { compileScriptexToHtml };
