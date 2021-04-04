const message = 'dyvayv9 f6b dr5a a6 b5t6cv9 ayv 0vt9va0 6w ayv b5zcv90v, 69 f6b 1b0a dr5a a6 7b90bv r tr9vv9 z5 ayv ih0a tv5ab9f, sr0zt t647bav9 796x9r44z5x z0 r5 v00v5azr3 02z33 a6 3vr95 - 0av7yv5 yrd2z5x';
const dictionary = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');

let shiftMax = 50;

for(let shiftStep=1;shiftStep<=50;shiftStep++){
    result = [];
    for(let i=0;i<message.length;i++){
        if(!dictionary.includes(message[i])){
            result.push(message[i]);
        } else {
            for(let j=0;j<dictionary.length;j++){
                if(message[i] == dictionary[j]){
                    let afterShift = j-shiftStep;
                    if (afterShift<0){
                        afterShift = dictionary.length + afterShift;
                    }
                    result.push(dictionary[afterShift]);
                    break;
                }
            }
        }
    }

    if(result.join('').includes('computer')){
        console.log('Message : ', result.join(''));
        console.log('After',shiftStep,'shift to left');
        break;
    }
}
