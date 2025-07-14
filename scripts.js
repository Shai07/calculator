const number = document.querySelector('.number');
const operation = document.querySelector('.operation');
const equal = document.querySelector('.equal');
const display = document.querySelector('.display');

//use splice(index to remove, how many to remove starting with this index) to remove one element from list

let problem = "5 + 5 * 5"; // return 30;

console.log(solve(problem));


// solves str math expressions with priority to order of operation.
function solve(str) {
    let arr = str.split(' ');
    //console.log(arr);
    while (arr.includes('x') || arr.includes('/') || arr.includes('+') || arr.includes('-')) {
        for (let i = 1; i < arr.length; i += 2) {
            if (arr[i] === 'x') {
                arr[i-1] = Number(arr[i-1]) * Number(arr[i+1]);
                arr.splice(i, 2);
            } else if (arr[i] === '/') {
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
    return arr[0];


}

