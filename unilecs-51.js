let str1 = 'ABC';
let str2 = 'ABCA';

function compareChar(str) {
    for(let i=0; i < str.length; i++) {
        for(let j=i+1; j < str.length; j++) {
            if(str[i] === str[j]) {
                    return false;
            }
        }
    }
    return true;
}

console.log('str = ' + str1 + '; Answer = ' + compareChar(str1));
console.log('str = ' + str2 + '; Answer = ' + compareChar(str2));