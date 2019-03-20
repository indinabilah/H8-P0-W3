/**
 * function tersebut 
 * mengembalikan nilai true 
 * jika di dalam string tersebut 
 * terdapat karakter a dan b 
 * yang memiliki jarak 3 karakter lain minimal satu kali. 
 * Jika tidak ditemukan sama sekali, kembalikan nilai false. 
 * Jarak bisa dari a ke b, atau b ke a.
 */

function checkAB(num) {
    // you can only write your code here!
    var i  
    var j
    var length = num.length
    var a = []
    var b = []
    var angkaA = 0
    var angkaB = 0
    var hasil = false

    for(i = 0; i < length; i++){
      if(num[i] === 'a' && num[i+4] === 'b'){
        a.push(i)
        hasil = true
      }else if(num[i] === 'b' && num[i+4] === 'a'){
        b.push(i)
        hasil = true
      }
    }

    // return 'array a : ' + a +' array b : '+ b
    return hasil
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false