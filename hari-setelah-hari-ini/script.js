const input = document.querySelector("input");
const button = document.querySelector("button");
const resultHeader = document.querySelector(".result .header");
const resultHari = document.querySelector(".result .hari");
const resultTanggal = document.querySelector(".result .tanggal");
const warning = document.querySelector(".warning");

const list = {
    hari: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
    bulan: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ],
};

button.addEventListener("click", () => {
    if (input.value == "") {
        warning.innerHTML = "*Input Harus Diisi";
    } else {
        if (isNaN(input.value)) {
            warning.innerHTML = "*Harus Berupa Angka";
        } else {
            if (input.value < 0) {
                warning.innerHTML = "*Harus Berupa Angka Positif";
            } else {
                warning.innerHTML = "";
                getHasil();
            }
        }
    }
});

function getHasil() {
    const now = Date.now();
    const hari = parseInt(input.value) * 60 * 60 * 24 * 1000;
    const hasil = new Date(now + hari);
    resultHeader.innerHTML = `${input.value} hari setelah hari ini adalah hari`;
    resultHari.innerHTML = list.hari[hasil.getDay()];
    resultTanggal.innerHTML = `${hasil.getDate()} ${
        list.bulan[hasil.getMonth()]
    } ${hasil.getFullYear()}`;
}
