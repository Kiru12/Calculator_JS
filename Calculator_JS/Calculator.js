console.log("Javascript Calculator by Kiru https://github.com/Kiru12")


document.getElementById('center-block').readOnly = true;
let textBox = document.getElementById('center-block');
buttons = document.querySelectorAll('button');
let textBoxValue = '';


for (btn of buttons) {
    btn.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            textBoxValue += textBox;
            textBox.value = textBoxValue;
        }
        else if (buttonText == 'C') {
            textBoxValue = "";
            textBox.value = textBoxValue;
        }
        else if (buttonText == '=')
        {
            textBox.value = eval(textBoxValue);
        }
        else {
            textBoxValue += buttonText;
            textBox.value = textBoxValue;
        }
    })
}


document.addEventListener("keydown", function(event) {
    console.log(event.which);
    if(event.shiftKey==57) {
        event.key = '(';
    }
    else if(event.shiftKey==48) {
        event.key = ')';
    }
    else if(event.shiftKey==53) {
        event.key = '%';
    }
    if(event.keyCode==88) {
        textBoxValue += '*';
        textBox.value = textBoxValue;
    }
    if(event.key<=9 || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='.' || event.key=='/' || event.key=='%' || event.key=='(' || event.key==')') {
        textBoxValue += event.key;
        textBox.value = textBoxValue;
    }
    if(event.keyCode == 13 || event.keyCode == 187)
    {
        textBox.value = eval(textBoxValue);
    }
    else if(event.keyCode == 46) {
        textBoxValue = "";
        textBox.value = textBoxValue;
        console.clear();
    }
    else if(event.keyCode == 8)
    {
        textBoxValue = textBoxValue.slice(0,-1);
        textBox.value = textBoxValue;
    }
    else if(event.keyCode == 67)
    {
        textBoxValue == "";
        textBox.value = textBoxValue;
        console.clear();
    }
})

/*
btn.onclick = function() {
    textBox.value = "40";
};
*/

