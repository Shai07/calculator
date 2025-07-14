const buttons = document.querySelectorAll('.row div');
const equal = document.querySelector('.equals');
const display = document.querySelector('.display');
let reset = false;

// solves str math expressions with priority to order of operation.
function solve(str) {
    let arr = str.split(' ');
    //console.log(arr);
    while (arr.includes('x') || arr.includes('÷') || arr.includes('+') || arr.includes('-')) {
        for (let i = 1; i < arr.length; i += 2) {
            if (arr[i] === 'x') {
                arr[i-1] = Number(arr[i-1]) * Number(arr[i+1]);
                arr.splice(i, 2);
            } else if (arr[i] === '÷') {
                arr[i-1] = Number(arr[i-1]) / Number(arr[i+1]);
                arr.splice(i, 2);
            }
        }
        for (let i = 1; i < arr.length; i += 2) {
            if (arr[i] === '+') {
                arr[i-1] = Number(arr[i-1]) + Number(arr[i+1]);
                arr.splice(i, 2);
            } else if (arr[i] === '-') {
                arr[i-1] = Number(arr[i-1]) - Number(arr[i+1]);
                arr.splice(i, 2);
            }
        }
    }
    if (arr[0] === Infinity) return "ERROR";
    return arr[0];


}

// allows to press numbers and operation, making sure decimal can't be pressed twice for same number
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    if (button.id === 'delete') display.textContent = 0;
    else if (button.id === 'decimal') {
        if (display.textContent.indexOf(' ') === -1) {
            if (!display.textContent.includes('.')){
                if (reset === true) {display.textContent = '0.1'; reset = false}
                else display.textContent += '.';
            }
        } else if (!display.textContent.slice(display.textContent.lastIndexOf(' ')).includes('.')) display.textContent += '.';
    } else {
        if (reset === true) {display.textContent = button.textContent; reset = false;}
        else display.textContent = (display.textContent === '0') ? button.textContent: display.textContent + button.textContent;
    }
    
})});

// equal function
equal.addEventListener('click', function() {
    display.textContent = solve(display.textContent);
    reset = true;
})

