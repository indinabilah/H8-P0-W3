/**
 * Function akan me-return string tersebut 
 * dengan menukar karakter yang uppercase menjadi lowercase, 
 * dan sebaliknya. Spasi dan simbol diabaikan
 */

function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var i  
    var j
    var abc = "abcdefghijklmnopqrstuvwxyz"
    var abc2 = "ABCDEVGHIJKLMNOPQRSTUVWXYZ"
    // var acak = "0123456789!@#$%^&*-+=,. "
    // var lengthAcak = acak.length
    var length = kalimat.length
    var hasil = ''
    
    for(i = 0; i< length; i++){
        for(j = 0; j<abc.length; j++){
            if(kalimat[i] === abc[j]){
                hasil = hasil + abc2[j]
            }else if(kalimat[i] === abc2[j]){
                hasil = hasil + abc[j]
            }
        }

        if(kalimat[i] === '0'){
            hasil = hasil + '0'
        }else if(kalimat[i] === '1'){
            hasil = hasil + '1'
        }else if(kalimat[i] === '2'){
            hasil = hasil + '2'
        }else if(kalimat[i] === '3'){
            hasil = hasil + '3'
        }else if(kalimat[i] === '4'){
            hasil = hasil + '4'
        }else if(kalimat[i] === '5'){
            hasil = hasil + '5'
        }else if(kalimat[i] === '6'){
            hasil = hasil + '6'
        }else if(kalimat[i] === '7'){
            hasil = hasil + '7'
        }else if(kalimat[i] === '8'){
            hasil = hasil + '8'
        }else if(kalimat[i] === '9'){
            hasil = hasil + '9'
        }else if(kalimat[i] === ' '){
            hasil = hasil + ' '
        }else if(kalimat[i] === '-'){
            hasil = hasil + '-'
        }else if(kalimat[i] === '!'){
            hasil = hasil + '!'
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"