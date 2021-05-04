const circle = document.querySelector(".circle");

let mouseMove = true;
let hasChangeColor = false;

window.onmousemove = (e) => {
    // console.log(circle.style.left);
    setTimeout(() => {
        circle.style.left = `${e.pageX - 25}px`;
        circle.style.top = `${e.pageY - 25}px`;
        mouseMove = true;
        hasChangeColor = false;
        if (mouseMove) console.log("mouse bergerak");
    }, 100);
};

setInterval(() => {
    mouseMove = false;
    if (mouseMove == false && hasChangeColor == false) {
        circle.style.backgroundColor =
            "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";
    }
    hasChangeColor = true;
    if (hasChangeColor) console.log("telah ganti warna");
}, 100);

function randomRGB() {
    return parseInt(Math.random() * 255);
}
