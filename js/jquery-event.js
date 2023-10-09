var data = [
    {
        "createdAt": "2023-10-06T00:18:29.094Z",
        "name": "Mrs. Iris Leuschke",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/613.jpg",
        "manufaturer": "manufaturer 1",
        "price": 62,
        "id": "1"
    },
    {
        "createdAt": "2023-10-05T22:34:41.808Z",
        "name": "Brandon Stoltenberg",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1153.jpg",
        "manufaturer": "manufaturer 2",
        "price": 26,
        "id": "2"
    },
    {
        "createdAt": "2023-10-05T22:54:11.147Z",
        "name": "Edmund Jerde",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg",
        "manufaturer": "manufaturer 3",
        "price": 15,
        "id": "3"
    },
    {
        "createdAt": "2023-10-05T14:07:58.970Z",
        "name": "Edmund Franey",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
        "manufaturer": "manufaturer 4",
        "price": 12,
        "id": "4"
    },
    {
        "createdAt": "2023-10-06T03:15:17.997Z",
        "name": "Santos Heathcote",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/137.jpg",
        "manufaturer": "manufaturer 5",
        "price": 30,
        "id": "5"
    },
    {
        "createdAt": "2023-10-06T06:17:56.462Z",
        "name": "Darrell Torphy",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/306.jpg",
        "manufaturer": "manufaturer 6",
        "price": 50,
        "id": "6"
    },
    {
        "createdAt": "2023-10-05T17:20:36.405Z",
        "name": "Brandi Kilback",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/19.jpg",
        "manufaturer": "manufaturer 7",
        "price": 33,
        "id": "7"
    },
    {
        "createdAt": "2023-10-05T14:12:43.501Z",
        "name": "Miriam McClure",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/907.jpg",
        "manufaturer": "manufaturer 8",
        "price": 66,
        "id": "8"
    },
    {
        "createdAt": "2023-10-06T02:39:32.781Z",
        "name": "Merle Fay",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1188.jpg",
        "manufaturer": "manufaturer 9",
        "price": 41,
        "id": "9"
    }
]

var buyItem;
var hide;
var confirm;

$(function () {
    confirm = function () {
        $("#modal-item").hide();
        $("#item-product-modal").remove()
        alert('Order has been set!')
    }

    buyItem = function (id) {
        $("#modal-item").show();
        var product = data.find(i => i.id == id);
        var item = document.createElement("div")
        item.id = 'item-product-modal'
        item.innerHTML = `<img src="${product.avatar}" class="image-product"></img>
                          <h3>${product.name}</h3>
                          <p>Manufacturer: ${product.manufaturer}</p>
                          <p>Price: ${product.price}USD</p>
                          <button class="shopping-button" onclick="confirm()">Confirm</button>
                          `
        $("#modal-item").append(item)
    }

    hide = function () {
        $("#modal-item").hide();
        $("#item-product-modal").remove()
    }

    $(".set-default-value").click(function () {
        $(".input-name")[0].value = 'default name'
    })

    $(".get-input-value").click(function () {
        var name = $(".input-name")[0].value
        $(".name-result")[0].append(name)
    })

    $("#reset-button").click(function () {
        $(".input-name")[0].value = ''
    })

    $("#add-line-button").click(function () {
        if (!$("#input-name").val() || !$("#input-age").val()) {
            alert('Please fill all inputs');
            return;
        }
        var tr = document.createElement("tr");
        tr.innerHTML = `<td>${$("#input-name").val()}</td><td>${$("#input-age").val()}</td>`
        $("#my-table").append(tr)
        $("#input-name").val('')
        $("#input-age").val('')
    })

    $(".shopping-button").click(function () {
        console.log('shopping button clicked')
    })

    data.forEach((product, index) => {
        var item = document.createElement("div")
        item.className = 'item-product'
        item.innerHTML = `<img src="${product.avatar}" class="image-product"></img>
                          <h3>${product.name}</h3>
                          <p>Manufacturer: ${product.manufaturer}</p>
                          <p>Price: ${product.price}USD</p>
                          <button class="shopping-button" onclick="buyItem(${product.id})">Shopping</button>
`
        $("#list-product").append(item)
    })
})
