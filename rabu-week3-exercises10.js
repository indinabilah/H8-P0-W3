/**
 * Contoh jika arr inputan adalah 
 * [['Platinum', 'Fox', 'female', 1995], 
 * ['John', 'Doe', 'male', 2000]] maka output:
 * Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
 * John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
 */

function changeMe(arr) {
    // you can only write your code here!
    var length = arr.length
    var data = {}
    
    for(i = 0; i < length; i++){
      console.log([i+1] +'. '+ arr[i][0] + arr[i][1])

      data.firstName= arr[i][0]
      data.lastName= arr[i][1]
      data.gender= arr[i][2]
      
      if(arr[i][3] === undefined){
        data.age = 'Invalid Birth Year'
      }else {
        var sum = 2019 - arr[i][3]
        data.age = sum
      }
      console.log(data)
    }

    

  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""