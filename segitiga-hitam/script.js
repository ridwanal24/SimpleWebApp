// DOM
const input = document.querySelector('input');
const outputArea = document.querySelector('.output');

//Function
function buatSegitiga(baris) {
    let output = '';
    for(let i=1;i<=baris;i++){
        for(let z=1;z<=baris-i;z++){
            output += ' ';
        }    
        for(let j=1;j<=i;j++){   
            if(j==baris && i==baris){
                output += '*';
            } else {
                output += '* ';
            }
        }
        output += '\n';
    }

    return output;
}

// Action
let action = _ => {
    let value = input.value; 
    
    if(isNaN(value)){
        outputArea.innerHTML = 'Masukan Angka !!!';
    } else {
        outputArea.innerHTML = buatSegitiga(value);
    }
}

// Input change and keyUp listener
input.addEventListener('keyup', action);
input.addEventListener('change', action);
