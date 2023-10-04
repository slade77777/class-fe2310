
function setDefaultValue() {
    var inputElement = document.getElementsByClassName('input-name')[0]
    inputElement.value = 'default name'
}

function getValue() {
    var inputElement = document.getElementsByClassName('input-name')[0]
    var resultElement = document.getElementsByClassName('name-result')[0]

    var result = inputElement.value
    resultElement.append(result)
}

function reset() {
    var inputElement = document.getElementsByClassName('input-name')[0]
    var resultElement = document.getElementsByClassName('name-result')[0]

    inputElement.value = ''
    resultElement.innerHTML = 'Your name is:'
    inputElement.focus();
}