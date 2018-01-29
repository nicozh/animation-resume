var result = `body{
    background:#ccc;
    font-size:15px
}`

var styleTag = document.querySelector('#style')
var code = document.querySelector('#code')

var x = 0
var id = setInterval(() => {
    styleTag.innerHTML = result.slice(0, x)
    code.innerHTML = result.slice(0, x)
    x += 1
    if (x > result.length) {
        window.clearInterval(id)
    }
}, 100)
