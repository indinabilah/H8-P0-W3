function cariMedian(arr) {
    // you can only write your code here!
    // var urut = arr.sort(function(a, b){return a-b})
    var length = arr.length
    var a 
    var b
    var hasil = 0

    for(i = 0; i < length; i++){
        // a = a + arr[i]
        // b = a/length
        // if(b === length){
        //     hasil = hasil + arr[i]
        // }
        if(length % 2 === 0){
            a = length / 2
            hasil = (arr[a-1]+arr[a])/2
        }else if(length % 2 !== 0){
            a = length % 2
            hasil = arr[a+1]
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5