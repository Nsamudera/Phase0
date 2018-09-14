//Logic Challenge - Shopping Time!

function shoppingTime(memberId, money) {
    //to prepare the output to be the structure we want:
    var output = {
        memberId: '',
        money: 0,
        listPurchased: [],
        changeMoney: 0
    }

    //to list the items and the prices
    var items = {
        name: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'],
        price: [1500000, 500000, 250000, 175000, 50000]
    }

    //Case 1. If  no 'MemberId' is given then return specific output
    if (!memberId) {
        return ('Mohon maaf, toko X hanya berlaku untuk member saja')
    }

    //Case 2. If money is less than the minimum item price . . .
    if (money < 50000) {
        return ('Mohon maaf, uang tidak cukup')
    }

    //Case3. If 'MemberId' is filled and have enough money

    //fill 'memberId' in the output with the id given by the input
    output.memberId = memberId
    //fill 'money' in the output with the amount given by the input
    output.money = money
    //fill 'changeMoney' in the output with the amount given by the input
    //   ***this will be used later to subtract with items purchased
    output.changeMoney = money

    //for each instance that the index 'i' is less than the length of 'items.price' (AKA the list of price for the items)
    for (var i = 0; i < items.price.length; i++) {
        //if the 'changemoney' (which is firstly set as the money you have originally) is larger than the price of the item being looked at . . .
        if (output.changeMoney - items.price[i] >= 0) {
            //Then, add the item name to the output
            //and, decrease the amount from 'changeMoney' by the item price
            output.listPurchased.push(items.name[i])
            output.changeMoney = output.changeMoney - items.price[i]
        }
    }
    return output
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



