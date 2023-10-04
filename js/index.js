// var x = 50;
//
// if (x < 50) {
//     console.log("this number is less than 50")
// } else if (x === 50) {
//     console.log("this number is equal to 50")
// } else {
//     console.log("this number is greater than 50")
// }
//
// switch (x) {
//     case x < 50:
//         console.log("this number is less than 50")
//         break;
//     case x === 50:
//         console.log("this number is equal to 50")
//         break;
//     case x > 50:
//         console.log("this number is greater than 50")
//         break;
//     default:
//         console.log('cannot found')
// }
//
//
// var arrayA = [
//     {
//         mobile: 'iphone 3',
//         price: 100
//     },
//     {
//         mobile: 'iphone 4',
//         price: 200
//     },
//     {
//         mobile: 'iphone 5',
//         price: 300
//     },
//     {
//         mobile: 'iphone 6',
//         price: 400
//     },
// ]
//
// var amountGreaterThan200 = 0;
// var newArray = [];
//
// arrayA.forEach((item, index) => {
//     if (item.price > 200) {
//         amountGreaterThan200 += 1;
//     }
//     newArray.push('mobile is '  + item.mobile + 'and price is ' + item.price)
// })
//
// console.log(amountGreaterThan200);
// console.log(newArray)
//
// var students = [
//     {
//         code: '1102',
//         name: 'cuong',
//         status: 'P'
//     },
//     {
//         code: '1002',
//         name: 'huy',
//         status: 'P'
//     },
//     {
//         code: '3001',
//         name: 'nam',
//         status: 'A'
//     },
//     {
//         code: '1302',
//         name: 'lien',
//         status: 'P'
//     },
//     {
//         code: '1550',
//         name: 'dung',
//         status: 'A'
//     }
// ]
//
// function combine(studentName, studentCode, studentStatus) {
//     //handle logic
//     var status = ' is in class';
//     if (studentStatus === 'A') {
//         status = ' is not in class'
//     }
//     // var combineText = 'student ' +  studentName + ' code ' + studentCode + status;
//     var combineText = `student ${studentName} code ${studentCode} ${status}`
//     return combineText;
// }
//
// var combineTextStudents = [];
// var notInClassStudents = 0;
//
// students.forEach((student, index) => {
//     // var combineText = combine(student.name, student.code, student.status)
//     // combineTextStudents.push(combineText)
//     if (student.status === 'A') {
//         notInClassStudents++
//     }
// })
//
// console.log(notInClassStudents);
//
// var list = students.map((student) => {
//     var combineText = combine(student.name, student.code, student.status);
//     return combineText
// })

var list = [
    {
        "createdAt": "2023-09-05T06:56:31.676Z",
        "name": "cuong1",
        "price": "1000",
        "image": "this is fake image 1",
        "id": "1"
    },
    {
        "createdAt": "2023-09-04T23:29:59.401Z",
        "name": "Rudolph Feil",
        "price": 47,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "2"
    },
    {
        "createdAt": "2023-09-05T03:34:58.604Z",
        "name": "Joanne Watsica",
        "price": 52,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "3"
    },
    {
        "createdAt": "2023-09-04T22:38:34.214Z",
        "name": "Lewis Morar Sr.",
        "price": 26,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "4"
    },
    {
        "createdAt": "2023-09-04T20:33:06.964Z",
        "name": "Sally Lang",
        "price": 14,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "5"
    },
    {
        "createdAt": "2023-09-04T16:20:01.089Z",
        "name": "Johnnie Spencer MD",
        "price": 56,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "6"
    },
    {
        "createdAt": "2023-09-04T20:41:18.571Z",
        "name": "Sabrina Goodwin",
        "price": 20,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "7"
    },
    {
        "createdAt": "2023-09-05T01:16:38.007Z",
        "name": "Victoria VonRueden",
        "price": 61,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "8"
    },
    {
        "createdAt": "2023-09-05T07:35:49.208Z",
        "name": "Jose Schinner",
        "price": 56,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "9"
    },
    {
        "createdAt": "2023-09-04T15:17:42.709Z",
        "name": "Dwight Thompson",
        "price": 3,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "11"
    },
    {
        "createdAt": "2023-09-04T17:08:59.103Z",
        "name": "Kent Stracke",
        "price": 92,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "12"
    },
    {
        "createdAt": "2023-09-05T08:30:25.674Z",
        "name": "Ms. Ian Dooley",
        "price": 45,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "13"
    },
    {
        "createdAt": "2023-09-04T14:25:33.056Z",
        "name": "Pedro Bashirian",
        "price": 12,
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "14"
    },
    {
        "createdAt": "2023-09-04T15:38:57.442Z",
        "name": "cuong",
        "price": "3000",
        "image": "this is fake image",
        "id": "15"
    },
    {
        "createdAt": "2023-09-04T15:31:44.893Z",
        "name": "cuong1",
        "price": "1000",
        "image": "this is fake image 1",
        "id": "16"
    }
]

var sum = 0;

var updatedList = list.map((element) => {
    const combinedText = `${element.name} with id = ${element.id} cost ${element.price}`
    if (+element.id % 2 === 0) {
        sum += +element.price
    }
    return combinedText
})

