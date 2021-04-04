const inpDari = document.querySelector("[name=dari]");
const inpKe = document.querySelector("[name=ke]");
const btnSubmit = document.querySelector("button.cek_kurs");
const divHasil = document.querySelector(".hasil");

const globalData = {
    kurs: {},
    label: [],
    state: {
        dari: "USD",
        ke: "IDR",
    },
};

fetch(
    "http://api.exchangeratesapi.io/v1/latest?access_key=4575241a44cdcf5f106487acd3400439"
)
    .then((data) => data.json())
    .then((data) => {
        globalData.kurs = data.rates;
        Object.entries(globalData.kurs).forEach(([key]) => {
            globalData.label.push(key);
        });

        loadAllSelect();
        validateSelect();
    });

btnSubmit.addEventListener("click", () => {
    let result =
        (globalData.kurs[inpKe.value] * globalData.kurs.EUR) /
        globalData.kurs[inpDari.value];

    result = Math.ceil(result * 100) / 100;
    divHasil.innerHTML = `${inpKe.value} ${result}`;
});

inpDari.addEventListener("change", function () {
    globalData.state.dari = this.value;
    loadAllSelect();
    validateSelect();
    console.log(globalData.state);
});

inpKe.addEventListener("change", function () {
    globalData.state.ke = this.value;
    loadAllSelect();
    validateSelect();
    console.log(globalData.state);
});

function loadAllSelect() {
    let optDari = "";
    let optKe = "";
    globalData.label.forEach((item) => {
        if (item == globalData.state.dari) {
            optDari += `<option value="${item}" selected>${item}</option>`;
        } else {
            optDari += `<option value="${item}">${item}</option>`;
        }
    });

    globalData.label.forEach((item) => {
        if (item == globalData.state.ke) {
            optKe += `<option value="${item}" selected>${item}</option>`;
        } else {
            optKe += `<option value="${item}" >${item}</option>`;
        }
    });

    inpDari.innerHTML = optDari;
    inpKe.innerHTML = optKe;
}

function validateSelect() {
    let e;
    e = document.querySelector(
        `select[name=ke] option[value=${inpDari.value}]`
    );
    e.parentElement.removeChild(e);

    e = document.querySelector(
        `select[name=dari] option[value=${inpKe.value}]`
    );

    e.parentElement.removeChild(e);
}
