import {ProductInterface} from './type';

let listProduct: Array<ProductInterface> =  [
  {
    "createdAt": "2023-10-24T22:02:24.881Z",
    "name": "Darrin Bergstrom",
    "amount": 64,
    "price": 24,
    "expireTime": 1698240863,
    "id": "7"
  },
  {
    "createdAt": "2023-10-25T10:18:43.930Z",
    "name": "Casey Rau",
    "amount": 97,
    "price": 49,
    "expireTime": 1698240803,
    "id": "8"
  },
  {
    "createdAt": "2023-10-25T04:23:16.255Z",
    "name": "James Blanda",
    "amount": 5,
    "price": 66,
    "expireTime": 1698240743,
    "id": "9"
  },
  {
    "createdAt": "2023-10-24T16:06:41.595Z",
    "name": "Leslie Rohan",
    "amount": 20,
    "price": 2,
    "expireTime": 1698240683,
    "id": "10"
  },
  {
    "createdAt": "2023-10-24T20:58:23.074Z",
    "name": "Michelle Hoppe",
    "amount": 62,
    "price": 23,
    "expireTime": 1698240623,
    "id": "11"
  },
  {
    "createdAt": "2023-10-25T08:17:06.856Z",
    "name": "Traci Jacobi",
    "amount": 20,
    "price": 16,
    "expireTime": 1698240563,
    "id": "12"
  },
  {
    "createdAt": "2023-10-25T10:11:38.114Z",
    "name": "Jack Durgan",
    "amount": 36,
    "price": 91,
    "expireTime": 1698240503,
    "id": "13"
  },
  {
    "createdAt": "2023-10-24T17:44:51.136Z",
    "name": "Anthony Bogan PhD",
    "amount": 17,
    "price": 48,
    "expireTime": 1698240443,
    "id": "14"
  },
  {
    "createdAt": "2023-10-24T18:39:44.044Z",
    "name": "Julia Murazik",
    "amount": 72,
    "price": 38,
    "expireTime": 1698240383,
    "id": "15"
  },
  {
    "createdAt": "2023-10-24T15:25:17.454Z",
    "name": "Dr. Eloise Weber I",
    "amount": 34,
    "price": 16,
    "expireTime": 1698240323,
    "id": "16"
  },
  {
    "createdAt": "2023-10-24T15:18:10.183Z",
    "name": "Teresa Schimmel",
    "amount": 42,
    "price": 0,
    "expireTime": 1698240263,
    "id": "17"
  },
  {
    "createdAt": "2023-10-25T06:15:28.276Z",
    "name": "Rudolph Heller I",
    "amount": 65,
    "price": 64,
    "expireTime": 1698240203,
    "id": "18"
  },
  {
    "createdAt": "2023-10-24T21:55:43.825Z",
    "name": "Ed Kassulke",
    "amount": 52,
    "price": 29,
    "expireTime": 1698240143,
    "id": "19"
  },
  {
    "createdAt": "2023-10-25T10:31:55.589Z",
    "name": "Dorothy Volkman",
    "amount": 16,
    "price": 72,
    "expireTime": 1698240083,
    "id": "20"
  },
  {
    "createdAt": "2023-10-25T10:27:30.953Z",
    "name": "Tyrone Auer",
    "amount": 75,
    "price": 56,
    "expireTime": 1698240023,
    "id": "21"
  },
  {
    "createdAt": "2023-10-25T01:44:58.054Z",
    "name": "Marlon Lubowitz",
    "amount": 58,
    "price": 43,
    "expireTime": 1698239963,
    "id": "22"
  },
  {
    "createdAt": "2023-10-24T18:16:57.925Z",
    "name": "Charles Green",
    "amount": 20,
    "price": 25,
    "expireTime": 1698239903,
    "id": "23"
  },
  {
    "createdAt": "2023-10-25T02:51:25.801Z",
    "name": "Dr. Carla Leannon",
    "amount": 83,
    "price": 83,
    "expireTime": 1698239843,
    "id": "24"
  }
]

function buyProduct(id: string, number: number): ProductInterface[]  {
  const buyingProduct = listProduct.find(item => item.id === id);
  if (buyingProduct) {
    const amountLeft = buyingProduct.amount - number;
    buyingProduct.amount = amountLeft;
  } else {
    console.log('Product not found')
  }
  return listProduct;
}

// add product => new product list

function addProduct(newProduct: ProductInterface) {
  listProduct.push(newProduct);
  console.log(listProduct)
}

addProduct({
  "createdAt": "2023-10-25T02:51:25.801Z",
  "name": "test new data",
  "amount": 90,
  "price": 123,
  "expireTime": 1698239843,
  "id": "40"
})

// remove product => new product list

// groupd by price
// function groupByPrice(price) {
  // const result = {
  //   greater: [
  //     {}
  //   ],
  //   equal: [
  //
  //   ],
  //   less: [
  //
  //   ]
  // }
// }

// function groupBy(param: 'price' | 'id' | 'expireTime', value: ) {
  // const result = {
  //   greater: [
  //     {}
  //   ],
  //   equal: [
  //
  //   ],
  //   less: [
  //
  //   ]
  // }
// }
