
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
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var text = document.createTextNode("1");
    var text2 = document.createTextNode("value 1");
    td.appendChild(text)
    td2.appendChild(text2)
    tr.appendChild(td)
    tr.appendChild(td2)
    inputElement.appendChild(tr)
}
