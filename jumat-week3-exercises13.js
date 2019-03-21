/**
 * function sorting dan function getTotal
 * arrNumber u/mengetahui angka yg paling besar
 *    dan berapa kali muncul
 * terdapat function mostFrequentLargestNumbers
 */

function sorting(arrNumber) {
  // code di sini
  var urut =[]
  var length = arrNumber.length
  for(i = 0; i < length; i++){
      for(j = 0; j < length-i; j++){
          if(arrNumber[j] > arrNumber[j+1]){
              urut = arrNumber[j] //kalo kecil switch tempat
              arrNumber[j] = arrNumber[j+1] //switch tempat ke depan 
              arrNumber[j+1] = urut //nentuin pebanding nantinya
          }
      }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  var sama = arrNumber[arrNumber.length-1]
  var jml = 0

  for(i = 0; i< arrNumber.length; i++){
    if(sama === arrNumber[i]){
      jml += 1
    }
  }
  if(arrNumber.length === 0 ){
    return ''
  }
  return 'angka paling besar adalah '+sama+' dan jumlah kemunculan sebanyak '+jml+' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));