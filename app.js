let isTerminalActive = true;
const terminalFrom = document.getElementById('terminal-form');

// make sure the terminal is focused on
terminalFrom.addEventListener('click', ()=>{
    terminalFrom.classList.toggle('active', true);
    isTerminalActive = true;
})
document.addEventListener('mousedown', (evt)=>{
    if(evt.target.id !== 'terminal-form'){
        terminalFrom.classList.toggle('active', false);
        isTerminalActive = false;
    }
})

document.addEventListener('keypress', function(event) {
    if(isTerminalActive) {
        const text = document.getElementById('active');
        if (event.key === "Enter") {
            text.id="";
            // remove blink underscore
            text.parentElement.children[1].innerHTML = "";
            const command = text.textContent;
            handleSubmit(command)
            return
        }
        write(text, event.key);
    }
})// backspace
document.addEventListener('keydown', function(event) {
    if(isTerminalActive) {
        const text = document.getElementById('active');
        if (event.key === "Backspace") {
            text.textContent = text.textContent.slice(0,-1);
        }
    }
})



// Functions
function handleSubmit(input){
    const output = document.createElement('h2');
    output.textContent = input;
    const newline = document.createElement('h1');
    switch(input) {
        case 'cls':
            terminalFrom.innerHTML = "";
            break;
        case 'projects':
            output.innerHTML = `<a href="#">Photos</a>`
            terminalFrom.appendChild(output);
            break;
        case 'help':
            output.innerHTML = `
            <h3>Commands</h3>
            <p>cls - <span>Clears the terminal</span></p>
            <p>help - <span>List available commands</span></p>
            `;
            terminalFrom.appendChild(output);
            break;
        default:
            output.textContent = `Invalid command: "${input}"`;
            output.classList.add('error');
            terminalFrom.appendChild(output);
            break;
    }
    makeNewLine();
    function makeNewLine(){
        newline.innerHTML = `~/amantes30><span id="active" class="text"></span><span class="blink">_</span>`
        terminalFrom.appendChild(newline);
        terminalFrom.scrollTo(0, terminalFrom.scrollHeight)
    }
}
// write
function write(current_txt, letter){
    let curr_text = current_txt.textContent;
    let temp = curr_text.split('')
    temp[temp.length] = letter;
    current_txt.textContent = temp.join('');
}