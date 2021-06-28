setInterval(() => {
    const date = new Date();

    // jarum detik
    const position_seconds = date.getSeconds() * 360 / 60;
    document.querySelector('.jarum-detik__section').style.transform = `rotate(${position_seconds}deg)`;

    // jarum menit
    const range_minutes = 360 / 60 / 60;
    const position_minutes = (date.getMinutes() * 360 / 60) + (range_minutes * date.getSeconds());
    document.querySelector('.jarum-menit__section').style.transform = `rotate(${position_minutes}deg)`

    // jarum jam
    const range_hours = 360 / 12 / 60;
    const position_hours = (date.getHours() * 360 / 12) + (range_hours * date.getMinutes());
    document.querySelector('.jarum-jam__section').style.transform = `rotate(${position_hours}deg)`

    // jam digital
    let [h, m, s] = [`${date.getHours()}`, `${date.getMinutes()}`, `${date.getSeconds()}`];
    console.log(s.length);
    h = h.length == 1 ? '0' + h : h;
    m = m.length == 1 ? '0' + m : m;
    s = s.length == 1 ? '0' + s : s;
    document.querySelector('.jam-digital').innerHTML = `${h}:${m}:${s}`
}, 500);