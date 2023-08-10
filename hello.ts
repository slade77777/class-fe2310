// destructuring
const fullName = ['dang', 'xuan', 'cuong'];

const user = {
  name: 'cuong',
  age: 30,
  phone: '01232132',
  address: 'asdasd'
}

// console.log(user)
const { age: userAge, phone, address, name: userName} = user

function a() {
  //do something
}
// template string
const userWithCar = {
  ...user,
  car: 'toyota'
}

const checkNumberLowerThan5 = (a: number) => {
// @ts-ignore
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (a < 5) {
        resolve('number is less than 5')
      } else {
        reject('number is more than 5')
      }
    }, 3000)
  })
}

checkNumberLowerThan5(10).then(result => {
  console.log('function success')
  console.log(result)
}).catch(e => {
  console.log('function fail')
  console.log(e)
})

async function runAsync() {
  try {
    const result = await checkNumberLowerThan5(4);
    console.log('function success')
    console.log(result)
  } catch (e) {
    console.log('function fail')
    console.log(e)
  }
}

runAsync();
