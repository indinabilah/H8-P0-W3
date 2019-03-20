/**  Contohnya, halo akan menjadi ahlo. 
 * Kamu tidak perlu memikirkan 
 * apabila ada simbol ataupun angka didalam string tersebut. */

function urutkanAbjad(str) {
    // you can only write your code here!
    var i  
    var j
    var abc = "abcdefghijklmnopqrstuvwxyz"
    var length = str.length
    var hasil = ''

    for(j = 0; j<abc.length; j++){
        for(i=0; i<length; i++){
            if(str[i] === abc[j]){
                hasil = hasil + str[i]
            }
        } 
    }
    return hasil
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'