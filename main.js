var result = `
/*
*  面试官你好，我是张洪
*  接下来我会边写代码边进行自我介绍
*  首先我要给页面加一些样式
*/

*{  
    transition: all 1s;
}
body{
    font-size:20px;
}

.page{
    height:90vh;
    box-shadow: 0 0 3px black;
    float:left;
    margin:20px;
    overflow: scroll;
}

/*来张背景*/

#bgvid{
    display: block;
}
#code{
    width:35%;
    padding:20px;
}

/* 我需要再准备一个页面书写简历 */
`

var resultTwo = `
#paper{
    width:59%;   
    padding:20px 20px 20px 30px;
}

/ *接下来开始写简历,请看右边 */
`

var md = `
## 个人信息
----

- 张洪/男/22
- 工作年限：自学前端半年
- 技术博客：http://gogoing.me 
- Github：http://github.com/nicozh
- 期望职位：web前端开发

## 技能清单
----

- Web开发：HTML5/CSS3/JavaScript
- 前端框架：/jQuery/vuejs 

## 个人作品
----

- [个人简历](//gogoing.me/resume/index.html)
- [canvas画板](//gogoing.me/canvas-drawing/index.html)
- [网站导航](//gogoing.me/nav-page/second-edition)
- [轮播](//gogoing.me/subentry/carousel-3/index.html)

## 联系方式
----

- 手机：15123566229
- Email：mitmiky@outlook.com
- 微信：
![二维码](https://i.loli.net/2018/02/03/5a75b44567332.jpg)

`
var html = `
/* 将markdown转成HTML,添加点样式 */
`
var mdCss = `
a {
    text-decoration: none;
}
a:hover {
    font-weight:bold;
}
img{
    width:240px;
}

/* 简历制作完成，谢谢观看 */
`

function writeCode(codefix, code, fn) {
    let styleTag = document.querySelector('#style')
    let domCode = document.querySelector('#code')
    let x = 0
    let id = setInterval(() => {
        domCode.scrollTop = 10000
        styleTag.innerHTML = codefix + code.slice(0, x)
        domCode.innerHTML = Prism.highlight(codefix + code.slice(0, x), Prism.languages.css);  //代码高亮
        x += 1
        if (x > code.length) {
            window.clearInterval(id)
            fn()
        }
    }, 30)

}

function writeMarkdown(md, fn) {
    let markdown = document.querySelector('#content')
    let paper = document.querySelector('#paper')
    let x = 0
    let id = setInterval(() => {
        paper.scrollTop = 10000
        markdown.innerHTML = md.slice(0, x)
        x += 1
        if (x > md.length) {
            window.clearInterval(id)
            fn()
        }
    }, 23)
}

function toHtml() {
    let markdown = document.querySelector('#content')
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
    markdown.innerHTML = marked(markdown.innerHTML)
}

function fn() {
    var w = document.querySelector('.window')
    var div = document.createElement('div')
    var pre = document.createElement('pre')
    pre.id = 'content'
    div.id = 'paper'
    div.className = 'page'
    w.appendChild(div)
    div.appendChild(pre)
}

writeCode('', result, () => {
    fn()
    writeCode(result, resultTwo, () => {
        console.log(1); writeMarkdown(md, () => {
            writeCode(result + resultTwo, html, () => {
                toHtml()
                writeCode(result + resultTwo + html, mdCss)
            })
        })
    })

})
