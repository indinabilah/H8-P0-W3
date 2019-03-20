/**Function akan mengembalikan jumlah digit minimal 
 * dari angka yang merupakan faktor angka parameter tersebut, 
 * Contoh, jika angka adalah 24, 
 * maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, 
 * dan 4 * 6. Dari antara faktor tersebut, 
 * yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, 
 * sehingga function akan me-return 2. */

 //digit dari perkalian.. 1*34 brrti 3 digit; 2*2 brrti 2 digit

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var i  
    var j = []
    var faktor = []
    var digit = []
    var digit2 = []
    for(i = 1; i <= angka; i++){
        if(angka % i === 0){
            faktor.push(i)
        }
    }
    // return faktor
    /**
     * 24
     * 1 2 3 4 6 8 12 24
     * 1-2-3 (4 | 6) 8-12-24
     * j dari depan
     * k dari belakang
     */
    for(i = 0; i < faktor.length/2; i++){
        digit.push(faktor[i])
    }

    for(i = faktor.length-1; i >= Math.floor(faktor.length/2); i--){
        digit2.push(faktor[i])
    }
    for(i= 0; i<digit.length; i++){
        var a = String(digit[i])
        var b = String(digit2[i])
        j.push(a + b)
    }

    for(i = 0; i<j.length; i++){
        var c = j[i].length
    }
    return c
    // return digit2
    // return digit
    // return faktor
    // return digit[0] +' '+ digit2[0]
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2