document.querySelector("button").addEventListener("click", function () {
    const color = [randomNumber(255), randomNumber(255), randomNumber(255)];

    document.querySelector(
        "body"
    ).style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
});

function randomNumber(max) {
    return parseInt(Math.random() * max);
}
