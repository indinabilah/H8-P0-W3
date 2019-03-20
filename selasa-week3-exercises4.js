function cariModus(arr) {
    // you can only write your code here!
    var urut = arr.sort(function(a,b){return a-b})
    var length = urut.length
    var i 
    var j
    var arr2 = []

    for(i = 0; i < length; i++){
      if(urut[i]===urut[i+1]){
        arr2.push(urut[i])
      }
    }

    if(arr2 == arr2.length){
      return -1
    }else if(arr2[0] == arr2[1]){
      return -1
    }else if(arr2[0] == arr2[1]){
      return arr2[0]
    }else{
      return arr2[0]
    }


    // return arr2
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1