"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// destructuring
const fullName = ['dang', 'xuan', 'cuong'];
const user = {
    name: 'cuong',
    age: 30,
    phone: '01232132',
    address: 'asdasd'
};
// console.log(user)
const { age: userAge, phone, address, name: userName } = user;
function a() {
    //do something
}
// template string
const userWithCar = Object.assign(Object.assign({}, user), { car: 'toyota' });
const checkNumberLowerThan5 = (a) => {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (a < 5) {
                resolve('number is less than 5');
            }
            else {
                reject('number is more than 5');
            }
        }, 3000);
    });
};
// checkNumberLowerThan5(10).then(result => {
//   console.log('function success')
//   console.log(result)
// }).catch(e => {
//   console.log('function fail')
//   console.log(e)
// })
function runAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield checkNumberLowerThan5(4);
            console.log('function success');
            console.log(result);
        }
        catch (e) {
            console.log('function fail');
            console.log(e);
        }
    });
}
runAsync();
