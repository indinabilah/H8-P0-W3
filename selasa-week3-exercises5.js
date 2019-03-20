/**Functiona akan me-return sebuah kata baru 
 * dimana setiap huruf akan digantikan 
 * dengan huruf alfabet setelahnya. 
 * Contoh, huruf a akan menjadi b, 
 * c akan menjadi d, 
 * k menjadi l, 
 * dan z menjadi a. */


function ubahHuruf(kata) {
    // you can only write your code here!
    var abc = "abcdefghijklmnopqrstuvwxyz"
    var i  
    var j  
    var length = kata.length
    var hasil = ''

    for(j = 0; j<length; j++){
        for(i=0; i<abc.length; i++){
            if(kata[j] === abc[i]){
                hasil = hasil + abc[i+1]
            }
        } 
    }

    return hasil
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu