/**
 * function highestScore 
 * untuk mendapatkan 
 * student dengan nilai tertinggi 
 * dari setiap <class>
 */

function highestScore (students) {
    // Code disini
    scoring = {}
    for(i = 0; i <students.length; i++){
        if(scoring[students[i].class] === undefined){
            scoring[students[i].class] = {
            name: students[i].name,
            score: students[i].score
            }
        }
        if(scoring[students[i].class].score < students[i].score){
            scoring[students[i].class] = {
                name: students[i].name,
                score: students[i].score
            }
        }
    }
    
    return scoring
    
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}

  /**
   * if(students.length === 0){
        return {}
    }
    var Obj= {
        foxes: {},
        wolves: {},
        tigers: {} 
    }
    var arrF =[] //foxes
    var arrW = []//wolves
    var arrT = []//tigers
    var ObjClass= {
        foxes: arrF, wolves: arrW, tigers: arrT
    }
    // return students
    // class
    for(i = 0; i<students.length; i++){
        if(students[i].class === 'foxes'){
            arrF.push(students[i])
        }if(students[i].class === 'wolves'){
            arrW.push(students[i])
        }if(students[i].class === 'tigers'){
            arrT.push(students[i])
        }
    }
    // return ObjClass 
    // return arrF[0+1].score
    //foxes
    for(i = 0; i<arrF.length; i++){
        if(arrF[0].score < arrF[1].score){
            Obj.foxes = arrF[1]
        }else{
            Obj.foxes = arrF[0]
        }
    }
    // return Obj.foxes
    //wolves
    for(i = 0; i<arrW.length; i++){
        if(arrW[0].score < arrW[1].score){
            Obj.wolves = arrW[1]
        }else{
            Obj.wolves = arrW[0]
        }
    }
    //tigers
    for(i = 0; i<arrT.length; i++){
        if(arrT[0].score < arrT[1].score){
            Obj.tigers = arrT[1]
        }else{
            Obj.tigers = arrT[0]
        }
    }
    // return Obj.tigers
    //scoring
    // for(i = 0; i< students.length;i++){
    //     if(students[i].score < students[i+1].score){
    //         return students[i+1].score
    //     }else{
    //         return students[i].score
    //     }
    // }
    return Obj
   */