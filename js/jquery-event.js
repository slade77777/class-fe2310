$(function () {
    console.log('jquery ready');

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

    var data = [
        {
            "createdAt": "2023-10-06T00:18:29.094Z",
            "name": "Mrs. Iris Leuschke",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/613.jpg",
            "manufaturer": "manufaturer 1",
            "price": 62,
            "id": "1"
        }
    ]
})
