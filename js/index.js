var x = 50;

if (x < 50) {
    console.log("this number is less than 50")
} else if (x === 50) {
    console.log("this number is equal to 50")
} else {
    console.log("this number is greater than 50")
}

switch (x) {
    case x < 50:
        console.log("this number is less than 50")
        break;
    case x === 50:
        console.log("this number is equal to 50")
        break;
    case x > 50:
        console.log("this number is greater than 50")
        break;
    default:
        console.log('cannot found')
}


var arrayA = [
    {
        mobile: 'iphone 3',
        price: 100
    },
    {
        mobile: 'iphone 4',
        price: 200
    },
    {
        mobile: 'iphone 5',
        price: 300
    },
    {
        mobile: 'iphone 6',
        price: 400
    },
]

var amountGreaterThan200 = 0;
var newArray = [];

arrayA.forEach((item, index) => {
    if (item.price > 200) {
        amountGreaterThan200 += 1;
    }
    newArray.push('mobile is '  + item.mobile + 'and price is ' + item.price)
})

console.log(amountGreaterThan200);
console.log(newArray)
