//Logic Challenge - Toko X

function countProfit(shoppers) {
    //This will be updated based on the sales that is made
    let listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];

    //Original list of items that will be used to count the profit by multiplying (original stock = current stock)
    let listBarangOri = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];

    var outputarr = [];//The output that will be displayed
    var outputobj = { //The output as object that will be pushed into 'outputarr'
        product: '',
        shoppers: [],
        leftOver: 0,
        totalProfit: 0
    };

    // to check the items only if there is an input in 'shoppers'
    if (shoppers != '') {
        //to go over 'listBarang'
        for (var j = 0; j < listBarang.length; j++) {
            //loop to go over each array (AKA sale transaction)  
            for (var i = 0; i < shoppers.length; i++)
                if (listBarang[j][0] === shoppers[i].product) {
                    // tracing purposes: console.log(shoppers[i].name + ' wants to buy ' + shoppers[i].product)
                    //if the amount the shopper wants to buy is less than or equal to the stock . . .
                    if (shoppers[i].amount <= listBarang[j][2]) {
                        //tracing purposes: console.log('we have stock of: ' + listBarang[j][2])
                        //tracing purposes: console.log(shoppers[i].product + ' wants amount of: ' + shoppers[i].amount)
                        listBarang[j][2] = listBarang[j][2] - shoppers[i].amount
                        //to add the shoppers name everytime we have the stock for them to purchase
                        outputobj.shoppers.push(shoppers[i].name)
                    }
                }

            /*** We add the other information later than the shoppers name because we want to compile the total data from each shopper before storing it in output.
            Example: we store the left over until we know that all the people that wants to purchase it buys it.
            but, for name, we add it right away once we know that the person wants to buy the.
            **/

            //to store product name
            outputobj.product = listBarang[j][0];
            //to store stock left
            outputobj.leftOver = listBarang[j][2]
            //to store Profit
            outputobj.totalProfit = listBarang[j][1] * (listBarangOri[j][2] - listBarang[j][2])
            //to push the result per item and reset 'outputobj' every time we are looping for a different item
            outputarr.push(outputobj)
            outputobj = {
                product: '',
                shoppers: [],
                leftOver: 0,
                totalProfit: 0
            }
        }
        return outputarr
        //if there is no input in 'shoppers', return empty array
    } else { return [] }
}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]