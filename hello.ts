// destructuring
const fullName = ['dang', 'xuan', 'cuong'];

// const user = {
//   name: 'cuong',
//   age: 30,
//   phone: '01232132',
//   address: 'asdasd'
// }
//
// // console.log(user)
// const { age: userAge, phone, address, name: userName} = user
//
// function a() {
//   //do something
// }
// // template string
// const userWithCar = {
//   ...user,
//   car: 'toyota'
// }
//
// const checkNumberLowerThan5 = (a: number) => {
// // @ts-ignore
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (a < 5) {
//         resolve('number is less than 5')
//       } else {
//         reject('number is more than 5')
//       }
//     }, 3000)
//   })
// }
//
// checkNumberLowerThan5(10).then(result => {
//   console.log('function success')
//   console.log(result)
// }).catch(e => {
//   console.log('function fail')
//   console.log(e)
// })
//
// async function runAsync() {
//   try {
//     const result = await checkNumberLowerThan5(4);
//     console.log('function success')
//     console.log(result)
//   } catch (e) {
//     console.log('function fail')
//     console.log(e)
//   }
// }

// runAsync();

const arrayOfObjects = [
  {
    name: 'cuong',
    age: 30,
    id: 1
  },
  {
    name: 'huy',
    age: 20,
    id: 2
  }
]

// const optionsDropdown = [
//   {
//     value: 1,
//     label: 'cuong 30 tuoi'
//   },
//   {
//     value: 2,
//     label: 'huy 20 tuoi'
//   }
// ]

const listNumber = [
  {
    "number1": 22,
    "number2": 15,
    "number3": 72,
    "id": "1"
  },
  {
    "number1": 6,
    "number2": 37,
    "id": "2"
  },
  {
    "number1": 14,
    "number2": 77,
    "number3": 17,
    "number4": 89,
    "id": "3"
  },
  {
    "number1": 10,
    "number2": 68,
    "number3": 47,
    "number4": 97,
    "id": "4"
  },
  {
    "number1": 60,
    "number3": 16,
    "number4": 47,
    "id": "5"
  },
  {
    "number1": 68,
    "number2": 88,
    "number3": 55,
    "id": "6"
  },
  {
    "number1": 70,
    "number2": 52,
    "number3": 3,
    "number4": 5,
    "id": "7"
  }
]

// @ts-ignore
const maxAll = listNumber.reduce((total: number, item: any) => {
  const keys = Object.keys(item);
  const sum = keys.reduce((t, i) => {
    if (typeof item[i] === 'number') {
      return t + item[i]
    } else {
      return t
    }
  }, 0)
  return total + sum
}, 0)

console.log(maxAll);
// const filterNumber = listNumber.map(item => {
//   const sum = (item.number1 || 0) + (item.number2 || 0) + (item.number3 || 0) + (item.number4 || 0);
//   const max = Math.max(item.number1 || 0, item.number2 || 0, item.number3 || 0, item.number4 || 0)
//   return {
//     sum,
//     max,
//     id: item.id
//   }
// })

// const filterNumber = listNumber.map((item: any) => {
//   const keys = Object.keys(item);
//   let max = 0;
//   keys.forEach(key => {
//     if (typeof item[key] === 'number' && item[key] > max) {
//       max = item[key]
//     }
//   })
//
//   const sum = keys.reduce((total, i) => {
//     if (typeof item[i] === 'number') {
//       return total + item[i];
//     } else {
//       return total;
//     }
//   }, 0);
//
//   return {
//     max,
//     sum,
//     id: item.id
//   }
// })

