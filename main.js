var result = `/*
  *  面试官你好，我是张洪
  *  我将以动画的形式介绍自己
  *  只用文字介绍太单调了
  *  那就边写代码边自我介绍吧
  *  首先我要给页面加一些样式
*/

*{
    transition: all 1s;
}
body{
    background: pink;
    font-size:15px;
}
#code{
    padding:20px;
    border:3px solid green;
}
`
var styleTag = document.querySelector('#style')
var code = document.querySelector('#code')

var x = 0
var id = setInterval(() => {
    styleTag.innerHTML = result.slice(0, x)
    code.innerHTML = result.slice(0, x)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);  //代码高亮
    x += 1
    if (x > result.length) {
        window.clearInterval(id)
        fn()
        fn1(result)
    }
}, 100)

function fn() {
    var w = document.querySelector('.window')
    var div = document.createElement('div')
    div.id = 'page'
    div.className = 'page'
    w.appendChild(div)
}

function fn1(resultTwo) {
    let result = `
.page{
    border:3px solid red;
    float:left;
    width:45%;
    margin:0 20px;
    overflow:auto;
    border-radius:10px;
}
#page{
    height:500px;
}
    `
    n=0
    id=setInterval(()=>{
        n+=1
        code.innerHTML = resultTwo + result.slice(0, n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);  //代码高亮
        styleTag.innerHTML = resultTwo + result.slice(0, n)
        if(n>result.length){
            clearInterval(id)
        }
    },100)
}


