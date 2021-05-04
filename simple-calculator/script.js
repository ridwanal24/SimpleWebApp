let data = '0';
let isDecimal = false;

Array.from(document.querySelectorAll('.btn')).forEach(function (btn) {
    btn.addEventListener('click', function () {
        const value = this.innerHTML;

        if (value === '=') {
            calc();
        } else if (value === 'C') {
            clear();
        }
        else {
            update(value);
        }
    });
});

function update(value) {


    if (value === '+' || value === '/' || value === 'x' || value === '-' || value === '=')

        // ========
        if (isDecimal) {
            if (value === '.') {
                value = '';
            }
        }

    if (data === '0') {
        if (value === '+' || value === '/' || value === 'x' || value === '-' || value === '=') {
            value = '';
        }
    } else {
        if (isDecimal) {
            value = '';
        }
    }

    data += value
    if (data.length > 0) document.querySelector('.display').innerHTML = data.replaceAll('*', 'x');
    data = data.replaceAll('x', '*')
    console.log(data)
}

function clear() {
    document.querySelector('.display').innerHTML = '0';
    data = '0';
}

function calc() {
    document.querySelector('.display').innerHTML = eval(data);

}