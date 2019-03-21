/**
 * saat memesan/mengambil dan memakan
 * maka waktu berkurang 15 menit
 * hingga waktu habis
 * tetapi masih bisa mengambil selama belum 0
 * 
 * function makanTerusRekursif(waktu)
 * function akan me-return berapa kali seorang customer
 * dalam waktu yang diberikan
 * 
 * WAJIB REKURSIF!
 */

function makanTerusRekursif(waktu) {
    // you can only write your code here!
    var ambilMakan = 0
    if(waktu !== 0 && waktu <= 15){
        return 1
    }else if(waktu == 0){
        return 0
    }else{
        ambilMakan += 1
        ambilMakan += makanTerusRekursif(waktu-15)
        return ambilMakan
    }

  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0