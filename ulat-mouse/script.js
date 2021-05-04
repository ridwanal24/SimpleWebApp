const circle = Array.from(document.querySelectorAll('.circle'));

let change = true;

window.onmousemove = e => {    
    circle.forEach((item, index) => {
        setTimeout(()=>{
            item.style.left = `${e.pageX - 25}px`;
            item.style.top = `${e.pageY - 25}px`;
            if(change){
                item.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
                change = false;
            }
        }, (index+10)*100);
    });
}

setInterval(() => {
    change = true;
},100)

function random(){
    return parseInt(Math.random()*255);
}
