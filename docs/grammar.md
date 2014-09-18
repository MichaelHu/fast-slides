# MARKDOWN简介及语法说明

## 1. 前言

`MARKDOWN`作为一种非官方的流行HTML编写语言，有多种实现方案。百度新闻文档库的MARKDOWN解析器是基于lex-yacc (flex-bison)编写的C解析器，其解析的语法是<a href="http://daringfireball.net/projects/markdown/" target="_blank">markdown语法</a>的一个子集。

`markdown解析器GITHUB地址`：<a href="https://github.com/MichaelHu/markdown-slides">`https://github.com/MichaelHu/markdown-slides`</a>

## 2. 标签支持能力

1. 支持的元素：
    * 主要针对`block-level元素`进行解析，包含`p, h1-h6, ul, ol, blockquote` 
    * inline-level元素只处理了`code` 

2. 常规markdown inline-level元素的支持不包含在此实现中，原因是基于lex & yacc对语法的严格要求，不适合markdown语法的随意性，会出现非常多的syntax error，而error handling很不容易实现。
    比如內联元素a, img等，编写时，直接写其HTML格式，如下：

        <a href="url">title</a>
        <img src="url">

3. 支持`多级嵌套`列表

4. 支持`@s [attr-list]`以及`@vs [attr-list]`语法，用于幻灯片分隔，这部分在本项目根部`README.md`说明。

4. 支持`嵌套代码段`

6. 其他HTML标签，可在`一行上从顶格开始`直接编写，具体查看`4. 原生HTML标签支持`，如：

        <table><tr><td>1</td></tr></table>
        <script type="text/javascript" src="./markdown.js"></script>

## 3. 语法说明 

### 3.1 h1-h6

语法：

    # h1 text 
    ## h2 text
    ### h3 text
    #### h4 text
    ##### h5 text
    ###### h6 text

会产生以下输出：

    <h1>h1 text</h1>
    <h2>h2 text</h2>
    <h3>h3 text</h3>
    <h4>h4 text</h4>
    <h5>h5 text</h5>
    <h6>h6 text</h6>

### 3.2 常规段落

语法：

    段落1文本
    段落1文本

    空行开启新的段落
    段落2文本
    段落2文本

会产生以下输出：

    <p>段落1文本
    段落1文本</p>
    <p>空行开启新的段落
    段落2文本
    段落2文本</p>

### 3.3 列表

* 3.3.1 有序列表
    有序列表由`*`或`+`开始，后接至少一个空格，再接文本 

    语法（有序列表）：

        1. 列表第一项
        2. 列表第二项

    会产生以下输出：

        <ol><li>列表第一项</li>
        <li>列表第二项</li></ol>

* 3.3.2 无序列表
    无序列表有`数字.`开始，后接至少一个空格，再接文本

    语法（无序列表）：

        * 无序列表第一项
        * 无序列表第二项

    会产生以下输出：

        <ul><li>无序列表第一项</li>
        <li>无序列表第二项</li></ul>

* 3.3.3 嵌套列表
    在上级列表的基础上，再次缩进`四个空格`或者`一个制表符` 

    语法（嵌套列表）：

        * 无序列表第一项
            1. 嵌套有序列表第一项
            2. 嵌套有序列表第二项
        * 无序列表第二项
            1. 嵌套有序列表第一项
            2. 嵌套有序列表第二项

    会产生以下输出：

        <ul><li>无序列表第一项<ol><li>嵌套有序列表第一项</li>
        <li>嵌套有序列表第二项</li></ol>
        </li>
        <li>无序列表第二项<ol><li>嵌套有序列表第一项</li>
        <li>嵌套有序列表第二项</li></ol>
        </li></ul> 

## 4. 原生HTML标签支持 
某些特殊情况下，需要编写原生HTML标签来达到特定要求，这主要针对块级元素，inline元素不存在问题。这时，希望编写的HTML标签不会被转义。

markdown语法支持的`原生block-level标签`有：`table, tr, td, div, header, footer, section, h1-h6, ul, ol`

以上这些block元素，可以原样输出，当其编写遵循以下原则时：
1. `行首（must）`开始编写标签
2. 标签相关内容在`一行内`完成

例如以下div会原样输出：

    <div class="list">....

而以下div(`没有行首开始编写，|_|代表空格`)会被嵌套在p标签内：

    |_|<div class="list">...

输出为：

    <p> <div class="list">...</p>

如果要输出一个table内容，可以这么写：

    <table><tr><td>name</td><td>age</td></tr><tr><td>Michael</td><td>32</td></tr></table>

这样显得可读性不好，也不容易编辑，但是`tr, td`标签也是可以原样输出的，所以可以这么些：

    <table>
    <tr>
    <td>name</td>
    <td>age</td>
    </tr>
    <tr>
    <td>Michael</td>
    <td>32</td>
    </tr>
    </table>
