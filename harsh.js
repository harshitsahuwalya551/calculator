let display = document.getElementById("display");
let buttons = document.querySelectorAll(".button");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");

for (item of buttons) {
    item.addEventListener('click', (e) => {
        let text = e.target.innerText;

        if (text === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "";
                alert("Invalid input");
            }
        } else {
            try {
                display.value += text;
            } catch (error) {
                alert("Invalid input");
            }
        }
    });
}

equal.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "";
        alert("Invalid input");
    }
});

clear.addEventListener('click', () => {
    display.value = '';
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ((/[0-9+\-*/.]/).test(key)) {
        display.value += key;
    } else if (key === 'Enter') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "";
            alert("Invalid input");
        }
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});

function power() {
    display.value = Math.pow(display.value, 2);
}

function sin() {
    display.value = Math.sin(display.value);
}

function cos() {
    display.value = Math.cos(display.value);
}

function tan() {
    display.value = Math.tan(display.value);
}

function log() {
    display.value = Math.log(display.value);
}

function pi() {
    display.value = Math.PI;
}

function exp() {
    display.value = Math.exp(display.value);
}

function cube() {
    display.value = Math.pow(display.value, 3);
}

function root() {
    display.value = Math.pow(display.value, 1 / 2);
}

function fact() {
    let num = parseInt(display.value);
    if (num < 0) {
        alert("Factorial is not defined for negative numbers.");
        return;
    }
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    display.value = f;
}
