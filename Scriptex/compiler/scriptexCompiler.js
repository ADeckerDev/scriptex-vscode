let supportedCommands = [
    "clist",
    "cover",
    "item",
    "blurb",
    "expo",
    "ping"
];

function applyCSS(){

    let maxWidthD = 600;
    let fontSizeD = 18;
    let paddingD = `1em`

    return `
    <style>
      .dialoge {
        max-width: ${maxWidthD};
        font-size: ${fontSizeD};
        margin: 0 auto;
        text-align: center;
        padding: ${paddingD};
      }
    </style>
    `
}

function compileScriptexToHtml(text) {
    // For now, wrap raw content for testing

    var document = `
    <!DOCTYPE html>
    <html>
    <div>`

    document += applyCSS();
    document += `
    <div>texthere:${text}</div>
    `

    document += `<div class="dialoge">${compDia(text, 0)}</div>`

    //close and return HTML
    return document += `
    </div>
    </html>`;
}

function compDia(text, entry){

    let character = text[entry];
    var output;

    if (character === `%`){

    }else if (character === `\\`){

    }else if (character === `/`){

    }else{
        output = character;
    }
    
    if (entry + 1 >= text.length) {
        return character;
    } else {
        return character + compDia(text, entry + 1);
    }
}

function commandPass(command){

}

function throwFit(errorMessage){
    throw new Error(errorMessage);
}

module.exports = { compileScriptexToHtml };
