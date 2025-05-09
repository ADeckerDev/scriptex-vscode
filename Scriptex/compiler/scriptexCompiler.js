let supportedCommands = [
    "clist",
    "cover",
    "item",
    "blurb",
    "expo",
    "ping"
];

var cast = {
    sh: "Sherlock Holmes"
}

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
    if (entry + 1 >= text.length) {
            return character;
    }
    
    if (character === `%`){
        return compDia(text, text.indexOf('\n', entry));
    }else if (character === '\n'){
        return '</div><div class=dialoge>'+ compDia(text, entry + 1);


    }else if (character === `\\`){
        //return character
    }else if (character === `/`){
        if (text[entry + 1] === ` `){
            return character + compDia(text, entry+1)
        }else return invokeName(text, entry + 1) + compDia(text, entry + 1);
    }else{
        output = character;
    }

    return character + compDia(text, entry + 1);
}

function commandPass(command){

}

function invokeName(text, entry){
    let end = text.indexOf(' ', entry)
    let name;

    if (end === -1){
        throwFit("Name never ends at line: " + entry);
        name = "Syntax error"
    } else {
        name = text.slice(entry, end);
    }

    let i = end;
    while (i < text.length && (text[i] === ' ' || text[i] === '\n' || text[i] === '\t' || text[i] === '\r')){
        i++
    }

    console.log("I is :" + i + text[i]);
    

    return name.toUpperCase() + '</div><div class=dialoge>' + compDia(text, i);
}

function throwFit(errorMessage){
    throw new Error(errorMessage);
}

module.exports = { compileScriptexToHtml };
