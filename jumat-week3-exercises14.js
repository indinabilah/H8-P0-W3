/**
 * function changeVocals, 
 * function reverseWord, 
 * function setLowerUpperCase, 
 * function removeSpaces,
 * function passwordGenerator
 * di function passwordGenerator
 * change Vocals -> huruf vokal yang diganti akan menjadi huruf setelah huruf vokal
   aturan change vocals -> 
 * (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
 * reserve/balikkan kata - yg sudah kita ganti huruf vokalnya
 * setLowerUpperCase
 * removeSpaces
 */



 function changeVocals (str) {
    //code di sini
    // var abc = "abcdefghijklmnopqrstuvwxyzABCDEVGHIJKLMNOPQRSTUVWXYZ"
    var vokal = "aiueoAIUEO"
    var vokalTambah = "bjvfpBJVFP"
    var i  
    var j  
    var length = str.length
    var hasil = ''
    for(j = 0; j<length; j++){
        var found = false
        for(i=0; i<vokal.length; i++){
            if(str[j] === vokal[i]){
                found = true
                hasil = hasil + vokalTambah[i]
            }
        }
        if(found === false){
            hasil = hasil + str[j]
        }
    }


    return hasil
  }
//   console.log(changeVocals('tera'))
  
  function reverseWord (str) {
    //code di sini
    var length = str.length
    var i
    var hasil = ''
    for(i = length-1; i >= 0; i--){
        hasil = hasil + str[i]
    }
    return hasil
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var i
    var j
    var abc = "abcdefghijklmnopqrstuvwxyz"
    var abc2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var length = str.length
    var hasil = ''
    for(i = 0; i< length; i++){ 
        var found = false
        for(j = 0; j<abc.length; j++){
            if(str[i] === abc[j]){
                found = true
                hasil = hasil + abc2[j]
            }else if(str[i] === abc2[j]){
                found = true
                hasil = hasil + abc[j]
            }
        }
        if(found === false){
            hasil = hasil + str[i]
        }
    }
    return hasil

  }
  
  function removeSpaces (str) {
    //code di sini
    var spkos =''
    var length = str.length
    for(i=0; i<length; i++){
        if(str[i] === ' '){
            spkos = spkos+''
        }else{
            spkos = spkos+str[i]
        }
    }
    return spkos
  }
  
  function passwordGenerator (name) {
    //code di sini
    var ubahTambah = changeVocals(name)
    var balikKata = reverseWord(ubahTambah)
    var ubahKata = setLowerUpperCase(balikKata)
    var hapusSpasi = removeSpaces(ubahKata)
    var result = hapusSpasi
    if(result.length <= 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return result
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'