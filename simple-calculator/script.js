let isOperator = false;
let isDecimal = false;
Array.from(document.querySelectorAll(".btn")).forEach(function (btn) {
    btn.addEventListener("click", function () {
        const value = this.innerHTML;

        if (value === "=") {
            calc();
        } else if (value === "C") {
            clear();
        } else {
            update(value);
        }
    });
});

function update(value) {
    if ("+-x/".includes(value)) {
        if (!isOperator) {
            let temp = document.querySelector(".display").innerHTML;
            temp = temp.split("");
            temp[temp.length] = value;
            temp = temp.join("");
            console.log(temp);
            document.querySelector(".display").innerHTML = temp;
            isOperator = true;
            isDecimal = false;
        }
    } else {
        if (value == ".") {
            if (!isDecimal) {
                document.querySelector(".display").innerHTML += value;
                isDecimal = true;
            }
        } else {
            document.querySelector(".display").innerHTML += value;
            isOperator = false;
            isDecimal = false;
        }
    }
}

function clear() {
    isStart = true;
    document.querySelector(".display").innerHTML = "0";
}

function calc() {
    document.querySelector(".display").innerHTML = eval(
        document.querySelector(".display").innerHTML.replaceAll("x", "*")
    );
}
