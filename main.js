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
      background: #002B36;
      font-size:15px;
  }
  #code{
      padding:20px;
      border:1px solid green;
      animation: breath 0.5s infinite alternate-reverse;
  }
  `

var resultTwo = `
.page{
    border:1px solid red;
    float:left;
    width:45%;
    margin:20px;
    overflow: scroll;
    height:100vh;
}
    `

var md = `
   # 开始写简历
    `

function writeCode(codefix, code, fn) {
    let styleTag = document.querySelector('#style')
    let domCode = document.querySelector('#code')
    // domCode.innerHTML = result || ''
    let x = 0
    let id = setInterval(() => {
        domCode.scrollTop = 10000
        styleTag.innerHTML = codefix + code.slice(0, x)
        domCode.innerHTML = Prism.highlight(codefix + code.slice(0, x), Prism.languages.css);  //代码高亮
        x += 1
        if (x > code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 100)

}

function writeMarkdown(md) {
    let markdown = document.querySelector('#content')
    let x = 0
    let id = setInterval(() => {
        //解析markdown
        var rendererMD = new marked.Renderer();
        marked.setOptions({
            renderer: rendererMD,
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
        });//基本设置
        // markdown.innerHTML = md.slice(0, x) 
        markdown.innerHTML = marked(md.slice(0, x))
        x += 1
        if (x > code.length) {
            window.clearInterval(id)
        }
    }, 100)
}

function fn(fn2) {
    var w = document.querySelector('.window')
    var div = document.createElement('div')
    var pre = document.createElement('pre')
    pre.id = 'content'
    div.id = 'page'
    div.className = 'page'
    w.appendChild(div)
    div.appendChild(pre)
    fn2()
}

writeCode('', result, () => {
    fn(() => {
        writeCode(result, resultTwo, () => { console.log(1); writeMarkdown(md) })
    })
})