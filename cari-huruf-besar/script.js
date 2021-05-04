const button = document.querySelector("button");
const input = document.querySelector("input");
const hasil = document.querySelector(".hasil");

button.addEventListener("click", () => {
    if (input.value == "") {
        hasil.innerHTML = "Masukan isi";
    } else {
        if (input.value.match(/\d+/g)) {
            hasil.innerHTML = "Tidak bisa berisi angka";
        } else {
            let result = input.value.match(/[A-Z]/g);
            if (result) {
                result = result.length;
            } else {
                result = 0;
            }
            hasil.innerHTML = `Pada kata/kalimat "${input.value}" terdapat ${result} huruf besar.`;
        }
    }
});
