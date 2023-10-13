var data = [];
var buyItem;
var hide;
var confirm;
var deleteItem;
var getData;
var editItem;
var edittingId;

$(function () {
    confirm = function () {
        $("#modal-item").hide();
        $("#item-product-modal").remove()
        alert('Order has been set!')
    }

    deleteItem = function (id) {
        $.ajax({
            url: `https://645644b92e41ccf16918360b.mockapi.io/product/${id}`,
            type: 'DELETE',
            success: function (response) {
                $("#list-product").empty();
                getData();
            },
            error: function (err) {
                alert('delete fail!')
            }
        })
    }

    editItem = function (id) {
        console.log(id);
        $("#modal-add").show();
        const choosingItem = data.find(item => item.id == id);
        $("#input-thumbnail").val(choosingItem.avatar)
        $("#input-name").val(choosingItem.name)
        $("#input-manufacturer").val(choosingItem.manufaturer)
        $("#input-price").val(choosingItem.price)
        edittingId = id
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

    function resetForm() {
        $("#input-thumbnail").val('')
        $("#input-name").val('')
        $("#input-manufacturer").val('')
        $("#input-price").val('')
    }

    $("#submit").click(function () {
        // get inputs value
        var thumbnail = $("#input-thumbnail").val();
        var name = $("#input-name").val();
        var manufacturer = $("#input-manufacturer").val();
        var price = $("#input-price").val();
        const submitData = {
            "name": name,
            "avatar": thumbnail,
            "manufaturer": manufacturer,
            "price": price,
        };

        if (edittingId) {
            // add new item into list product array
            $.ajax({
                url: `https://645644b92e41ccf16918360b.mockapi.io/product/${edittingId}`,
                type: 'PUT',
                data: submitData,
                success: function (response) {
                    $("#list-product").empty();
                    $("#modal-add").hide();
                    getData();
                    resetForm();
                },
                error: function (err) {
                    alert('delete fail!')
                }
            })
        } else {
            $.post('https://645644b92e41ccf16918360b.mockapi.io/product', submitData , function (response, status) {
                    if (status === 'success') {
                        $("#list-product").empty();
                        $("#modal-add").hide();
                        getData();
                        resetForm();
                    }
                }
            )

        }

    })

    getData = function () {
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
                          <button class="delete-button" onclick="deleteItem(${product.id})">Delete</button>
                          <button class="edit-button" onclick="editItem(${product.id})">Edit</button>
`
                    $("#list-product").append(item)
                })
            }
        })
    }
    getData();
})
