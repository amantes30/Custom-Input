function handleSubmit(input){
    const terminalFrom = document.getElementById('terminal-form');
    const output = document.createElement('h2');
    output.textContent = input;
    const newline = document.createElement('h1');
    switch(input) {
        case 'cls':
            terminalFrom.innerHTML = "";
            terminalFrom.innerHTML = `<h1>~/amantes30><span id="active" class="text"></span><span class="blink">_</span></h1>`;
            break;
        default:
            output.textContent = `Invalid command: "${input}"`;
            output.classList.add('error');
            terminalFrom.appendChild(output);
            newline.innerHTML = `~/amantes30><span id="active" class="text"></span><span class="blink">_</span>`
            terminalFrom.appendChild(newline);
            terminalFrom.scrollTo(0, terminalFrom.scrollHeight)
            break;
    }
}
document.addEventListener('keypress', function(event) {
    const text = document.getElementById('active');
    if (event.key === "Enter") {
        text.id="";
        // remove blink underscore
        text.parentElement.children[1].innerHTML = "";
        const command = text.textContent;
        handleSubmit(command)
        return
    }

    // write
    let curr_text = text.textContent;
    let temp = curr_text.split('')
    temp[temp.length] = event.key;
    text.textContent = temp.join('');
})
// backspace
document.addEventListener('keydown', function(event) {
    const text = document.getElementById('active');
    if (event.key === "Backspace") {
        text.textContent = text.textContent.slice(0,-1);
    }
})