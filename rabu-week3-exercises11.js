/**
 * 
 * Toko X sedang melakukan SALE untuk beberapa barang, yaitu:
Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000

sebuah object dimana object tersebut berisikan 
informasi memberId, money, listPurchased dan changeMoney.

*Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
*Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
*Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu 
dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.

Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
 */

function shoppingTime(memberId, money) {
    var list = [] //listPurchased
    var Obj = {}
    var listBarang = [
        {nama:'Sepatu Stacattu',
        harga:1500000},
        {nama:'Baju Zoro',
        harga:500000},
        {nama:'Baju H&N',
        harga:250000},
        {nama:'Sweater Uniklooh',
        harga:175000},
        {nama:'Casing Handphone',
        harga:50000}]

    if(memberId == undefined || memberId ==''){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if(money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }else{
        Obj.memberId = memberId
    }

    Obj.money = money
    var hargaBarang = 0
    for(i = 0; i < listBarang.length; i++){
        if(money >= listBarang[i].harga){
            list.push(listBarang[i].nama)
            hargaBarang += listBarang[i].harga
            // console.log(hargaBarang)
        }
        Obj.listPurchased = list
        Obj.changeMoney = money - hargaBarang
    }
    return Obj

  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

  /**
   * 
   * 
   * var listPurchased = []
    var changeMoney 
    var Obj = {
        memberId: memberId,
        money: money,
        listPurchased: '',
        changeMoney: 0
    }



    if(memberId !== undefined && memberId !==''){
        if(money < 50000){
            return 'Mohon maaf, uang tidak cukup'
        }else{
            // return memberId+' '+money
            Obj.memberId = memberId
            Obj.money = money

            if(money >= 1500000){
                listPurchased.push('Sepatu Stacattu')
                money = money - 1500000
            }
            if(money >= 500000){
                listPurchased.push('Baju Zoro')
                money = money - 500000
            }
            if(money >= 250000){
                listPurchased.push('Baju H&N')
                money = money - 250000
            }
            if(money >= 175000){
                listPurchased.push('Sweater Uniklooh')
                money = money - 175000
            }
            if(money >= 50000){
                listPurchased.push('Casing Handphone')
                money = money - 50000
            }
            Obj.changeMoney = money
            Obj.listPurchased = listPurchased

            // return 'Barang yang dibeli : ' +"'"+ listPurchased + "'" +' Kembalian : ' + changeMoney
            return Obj
        }
    }else{
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }

   */