// DOM
const inputTinggi = document.querySelector("[name=tinggi]");
const inputBerat = document.querySelector("[name=berat]");
const inputGender = document.querySelector("[name=gender]");
const buttonHitung = document.querySelector("[name=hitung]");

const warningKosong = document.querySelector(".kosong");
const warningMinimal = document.querySelector(".minimal");
const warningAngka = document.querySelector(".angka");

function resetWarning() {
    warningKosong.classList.remove("warning-show");
    warningAngka.classList.remove("warning-show");
    inputTinggi.classList.remove("warning");
    warningMinimal.classList.remove("warning-show");
}

function process() {
    let result = null;

    switch (inputGender.value) {
        case "male":
            result = inputTinggi.value - 100 - (inputTinggi.value - 100) * 0.1;
            break;
        case "female":
            result = inputTinggi.value - 100 - (inputTinggi.value - 100) * 0.15;
            break;
    }

    inputBerat.value = result;
}

buttonHitung.addEventListener("click", () => {
    resetWarning();
    if (inputTinggi.value == "") {
        warningKosong.classList.add("warning-show");
        inputTinggi.classList.add("warning");
    } else {
        if (isNaN(inputTinggi.value)) {
            warningAngka.classList.add("warning-show");
            inputTinggi.classList.add("warning");
        } else {
            if (parseInt(inputTinggi.value) < 100) {
                warningMinimal.classList.add("warning-show");
                inputTinggi.classList.add("warning");
            } else {
                resetWarning();
                process();
            }
        }
    }
});
