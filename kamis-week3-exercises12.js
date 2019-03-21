/**
 * Toko X
 * SALE
 * dg menghitung jml profit u/setiap jenis barang yg tersedia
 * 
 * Sepatu Stacattu 1.500.000 stock 10
 * Baju Zoro 500.000 stock 2
 * Sweater Uniklooh 175.000 stock 1
 * 
 * function menerima array yg berisikan object pembeli
 * (nama pembeli, barang yg ingin dibeli, jml barang dibeli)
 * jika stock < dari yg ingin dibeli -> batal membeli
 * 
 * function countProfit me-return array obj
 * obj berisi info nama barang, siapa yg beli, 
 * sisa stock, total pemasukan
 */

function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    
    // return listBarang
    // return shoppers.length
    // return shoppers[0].name
    // define one by one
    // buyer
    var namaB = [] 
    var namaS = []
    var namaSw = []
    //jumlah product
    var lOB =0
    var lOS =0
    var lOSw =0 
    //stock product
    var amountSepatu = listBarang[0][2]
    var amountBaju = listBarang[1][2]
    var amountSweater = listBarang[2][2]


    

    if(shoppers.length === 0){
        return []
    }

    for(i=0;i<shoppers.length;i++){
        if(shoppers[i].product === listBarang[0][0] && shoppers[i].amount <= amountSepatu){
            namaS.push(shoppers[i].name)
            lOS += shoppers[i].amount
            amountSepatu-=lOS
        }
        if(shoppers[i].product === listBarang[1][0] && shoppers[i].amount <= amountBaju){
            namaB.push(shoppers[i].name)
            lOB += shoppers[i].amount
            amountBaju-=lOB
        }
        if(shoppers[i].product === listBarang[2][0] && shoppers[i].amount <= amountSweater){
            namaSw.push(shoppers[i].name)
            lOSw += shoppers[i].amount
            amountSweater-=lOSw
        }
    }
    var Obj = [
        { product: listBarang[0][0],
        shoppers: namaS,
        leftOver: listBarang[0][2] - lOS,
        totalProfit: listBarang[0][1] * lOS},
        { product: listBarang[1][0],
        shoppers: namaB,
        leftOver: listBarang[1][2] - lOB,
        totalProfit: listBarang[1][1] * lOB},
        { product: listBarang[2][0],
        shoppers: namaSw,
        leftOver: listBarang[2][2] - lOSw,
        totalProfit: listBarang[2][1] * lOSw},
    ]
    return Obj
    // return lOS
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2},{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
 /**
  * [ { 
  * product: 'Sepatu Stacattu',
  * shoppers: [ 'Windi', 'Vanessa' ],
  * leftOver: 5,
  * totalProfit: 7500000 },
  * 
  * { product: 'Baju Zoro',
  * shoppers: [],
  * leftOver: 2,
  * totalProfit: 0 },
  * 
  * { product: 'Sweater Uniklooh',
  * shoppers: [Rani],
  * leftOver: 1,
  * totalProfit: 0 
  * } ] 
  */
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
  {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
  {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  
/**
  * [ 
  * { product: 'Sepatu Stacattu',
  * shoppers: [ 'Windi' ],
  * leftOver: 2,
  * totalProfit: 12000000 },
  * 
  * { product: 'Baju Zoro',
  * shoppers: [ 'Devi', 'Lisa' ],
  * leftOver: 0,
  * totalProfit: 1000000 },
  * 
  * { product: 'Sweater Uniklooh',
  * shoppers: [ 'Rani' ],
  * leftOver: 0,
  * totalProfit: 175000 } 
  * ]
  */
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  /**
 * [ 
 * { product: 'Sepatu Stacattu',
 * shoppers: [],
 * leftOver: 10,
 * totalProfit: 0 },
 * 
 * { product: 'Baju Zoro',
 * shoppers: [],
 * leftOver: 2,
 * totalProfit: 0 },
 * 
 * { product: 'Sweater Uniklooh',
 * shoppers: [],
 * leftOver: 1,
 * totalProfit: 0 } ]
 */
  console.log(countProfit([])); //[]





/**
 * produk salah baca 
 * hadu
 * for(i=0;i<shoppers.length;i++){
        if(shoppers[i].product === listBarang[0][0]){
            if(shoppers[i].amount < listBarang[i][2]){
                Obj.shoppers.push(shoppers[i].name)
                Obj.product = shoppers[i].product 
                jmlSisa = Obj.leftOver
                Obj.leftOver = listBarang[i][2] - shoppers[i].amount
                Obj.leftOver = jmlSisa
                Obj.totalProfit = shoppers[i].amount * listBarang[i][1]
            }else{

            }
        }
        if(shoppers[i].product === listBarang[1][0]){
            if(shoppers[i].amount < listBarang[i][2]){
                Obj.shoppers.push(shoppers[i].name)
                Obj.product = shoppers[i].product 
                jmlSisa = Obj.leftOver
                Obj.leftOver = listBarang[i][2] - shoppers[i].amount
                Obj.leftOver = jmlSisa
                Obj.totalProfit = shoppers[i].amount * listBarang[i][1]
            }else{
                
            }
        }
        if(shoppers[i].product === listBarang[2][0]){
            if(shoppers[i].amount < listBarang[i][2]){
                Obj.shoppers.push(shoppers[i].name)
                Obj.product = shoppers[i].product 
                // jmlSisa = Obj.leftOver
                Obj.leftOver = listBarang[i][2] - shoppers[i].amount
                // Obj.leftOver = jmlSisa
                Obj.totalProfit = shoppers[i].amount * listBarang[i][1]
            }else{
                
            }
        }
    }
 * ni hampir bener
 * for(i = 0; i < shoppers.length; i++){
        var penampung = 0
        for(j = 0; j < listBarang.length; j++){
            if(shoppers[i].amount < listBarang[j][2]){
                if(shoppers[i].product === listBarang[j][0]){
                    Obj.shoppers.push(shoppers[i].name)
                    Obj.product = shoppers[i].product 
                    Obj.leftOver = listBarang[j][2] - (penampung + shoppers[i].amount)
                    Obj.totalProfit = (shoppers[i].amount+penampung) * listBarang[j][1]
                }
            }
            penampung = Obj.leftOver
        }
    }
 * if(shoppers[i].product === listBarang[j][0]){
                // jadi order
                Obj.shoppers.push(shoppers[i].name)
                Obj.product = shoppers[i].product 
                Obj.leftOver = listBarang[j][2] - shoppers[i].amount
                Obj.totalProfit = listBarang[j][1] * shoppers[i].amount
            }else{
                // Output Product
                Obj.shoppers.push(shoppers[i].name)
                Obj.product = listBarang[i][0] 
                Obj.leftOver = listBarang[i][2]
                Obj.totalProfit = 0
                
            }
 * for(i = 0; i < shoppers.length; i++){
        for(j = 0; j <shoppers.length; j++){
            if(shoppers[j].product === listBarang[i][0]){
                // jadi order
                Obj.shoppers.push(shoppers[j].name)
                Obj.product = shoppers[j].product 
                Obj.leftOver = listBarang[i][2] - shoppers[j].amount
                Obj.totalProfit = listBarang[i][1] * (Obj.leftOver - shoppers[j].amount)
            }
        }
    }
 * // else{
        //      // cancel order
        //      Obj.shoppers.push()
        //      Obj.product = shoppers[i].product 
        //      Obj.leftOver = listBarang[i][2]
        //      Obj.totalProfit = 0
        // }
        // return Obj
 * if(shoppers[i].amount < listBarang[i][2]){
                // jadi order
                Obj.shoppers.push(shoppers[i].name)
                Obj.product = shoppers[i].product 
                Obj.leftOver = listBarang[i][2] - shoppers[i].amount
                Obj.totalProfit = shoppers[i].amount * listBarang[i][1]
            }else if(shoppers[i].amount > listBarang[i][2]){
                // cancel order
                Obj.shoppers.push(shoppers[i].name)
                Obj.product = shoppers[i].product 
                Obj.leftOver = listBarang[i][2]
                Obj.totalProfit = 0
            }else{
                // Output Product
                Obj.shoppers.push(shoppers[i].name)
                Obj.product = listBarang[i][0] 
                Obj.leftOver = listBarang[i][2]
                Obj.totalProfit = 0
                
            }
 */
