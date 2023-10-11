var data = [];
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

    $("#add-new-button").click(function () {
        $("#modal-add").show();
    })

    $("#close-button-add").click(function () {
        $("#modal-add").hide();
    })

    $("#submit-add").click(function () {
        // get inputs value
        var thumbnail = $("#input-thumbnail").val();
        var name = $("#input-name").val();
        var manufacturer = $("#input-manufacturer").val();
        var price = $("#input-price").val();

        // append new product into UI
        var item = document.createElement("div")
        item.className = `item-product product-${data.length + 1} `
        item.innerHTML = `<img src="${thumbnail}" class="image-product"></img>
                          <h3>${name}</h3>
                          <p>Manufacturer: ${manufacturer}</p>
                          <p>Price: ${price}USD</p>
                          <button class="shopping-button" onclick="buyItem(${data.length + 1})">Shopping</button>
`
        $("#list-product").append(item)

        // add new item into list product array
        $.post('https://645644b92e41ccf16918360b.mockapi.io/product', {
            "name": name,
            "avatar": thumbnail,
            "manufaturer": manufacturer,
            "price": price,
        }, function (response, status) {
            console.log(response);
            console.log(status)
        }
    )})

    $.get('https://645644b92e41ccf16918360b.mockapi.io/product', function (response, status) {
        if (status === 'success') {
            data = response
            data.forEach((product, index) => {
                var item = document.createElement("div")
                item.className = `item-product product-${product.id} `
                item.innerHTML = `<img src="${product.avatar}" class="image-product"></img>
                          <h3>${product.name}</h3>
                          <p>Manufacturer: ${product.manufaturer}</p>
                          <p>Price: ${product.price}USD</p>
                          <button class="shopping-button" onclick="buyItem(${product.id})">Shopping</button>
`
                $("#list-product").append(item)
            })
        }
    })

})
