
function setDefaultValue() {
    var inputElement = document.getElementsByClassName('input-name')[0]
    inputElement.value = 'default name'
}

function getValue() {
    var inputElement = document.getElementsByClassName('input-name')[0]
    var resultElement = document.getElementsByClassName('name-result')[0]

    var result = inputElement.value
    resultElement.append(result)
    resultElement.style.color = 'red'
    resultElement.className = ''
}

function reset() {
    var inputElement = document.getElementsByClassName('input-name')[0]
    var resultElement = document.getElementsByClassName('name-result')[0]

    inputElement.value = ''
    resultElement.innerHTML = 'Your name is:'
    inputElement.focus();
}

function redirect() {
    var inputElement = document.getElementsByClassName('input-name')[0]
    window.location.href = inputElement.value
}

function addLine() {
    var inputElement = document.getElementById('my-table')
    var inputName = document.getElementById("input-name")
    var inputAge = document.getElementById("input-age")
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    if (!inputName.value || !inputAge.value) {
        alert('Please fill all inputs');
        return;
    }
    var text = document.createTextNode(inputName.value);
    var text2 = document.createTextNode(inputAge.value);
    td.appendChild(text)
    td2.appendChild(text2)
    tr.appendChild(td)
    tr.appendChild(td2)
    inputElement.appendChild(tr)
    inputName.value = ''
    inputAge.value = ''
}
