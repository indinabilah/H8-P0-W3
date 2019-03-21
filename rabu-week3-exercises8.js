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
        var found = false
        for(j = 0; j<abc.length; j++){
            if(kalimat[i] === abc[j]){
                found = true
                hasil = hasil + abc2[j]
            }else if(kalimat[i] === abc2[j]){
                found = true
                hasil = hasil + abc[j]
            }
        }
        if(found === false){
            hasil = hasil + kalimat[i]
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