let s = ""; // Store user input
const inputField = document.querySelector('.input');
const buttons = document.querySelectorAll('.b');

// Function to safely evaluate expressions
function safeEval(expression) {
    try {
        return new Function('return ' + expression)();
    } catch {
        return "Error";
    }
}

// Button click events
buttons.forEach((b) => {
    b.addEventListener('click', (a) => {
        const value = a.target.innerHTML;

        if (value === "=") {
            s = safeEval(s); // Use safe evaluation function
            inputField.value = s;
        } else if (value === "c") {
            s = "";
            inputField.value = s;
        } else if (value === "DEL") {
            s = s.slice(0, -1);
            inputField.value = s;
        } else {
            s += value;
            inputField.value = s;
        }
    });
});

// Add keyboard support
document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (/[0-9+\-*/.%]/.test(key)) {
        s += key;
        inputField.value = s;
    } else if (key === "Enter") {
        s = safeEval(s);
        inputField.value = s;
    } else if (key === "Backspace") {
        s = s.slice(0, -1);
        inputField.value = s;
    } else if (key === "Escape") {
        s = "";
        inputField.value = s;
    }
});
