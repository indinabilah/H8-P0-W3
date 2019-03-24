/**
 * function naikAngkot(listPenumpang)
 * satu parameter berupa array dua dimensi
 * A - F -> diwajibkan membayar Rp2000 setiap melewati satu rute
 * 
 * Contoh: 
 * input: [['Dimitri', 'B', 'F']] 
 * output: [
 * { penumpang: 'Dimitri', 
 * naikDari: 'B', 
 * tujuan: 'F', 
 * bayar: 8000 }]
 */

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    //= Obj[0][0] // arrPenumpang[1][0]
    var ruteAwal =0
    //= Obj[0][1] // arrPenumpang[1][1]
    var ruteHenti =0
    //= Obj[0][2] // arrPenumpang[1][2]
    var Obj={}
    var arr =[]
    var jarak =0
    for(i = 0; i < arrPenumpang.length; i++){
        Obj.penumpang = arrPenumpang[i][0]
        for(j=0; j<rute.length; j++){
            if(arrPenumpang[i][1] === rute[j]){
                ruteAwal = j
            }
            if(arrPenumpang[i][2] === rute[j]){
                ruteHenti=j
            }
            jarak = Math.abs(ruteHenti-ruteAwal)
            bayar = 2000 * jarak
        }
        arr.push(Obj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: bayar
        })
    }
    return arr
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
