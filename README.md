fast-slides
===========

A tool for creating HTML5 slides from a markdown-grammar doc.

Markdown爱好者的福音 ———— 帮助您将Markdown语法编写的文档快速转换成HTML5幻灯片。

这一切，只需要一个命令：

    slides FILE

就能在浏览器中看到酷炫的幻灯片了，有木有觉得很酷。


* 不需安装第三方运行库，下载至本地，稍作配置后就可以使用
* 支持windows，mac和linux平台
* 在当前目录下自动生成以`.preview.html`为后缀的幻灯片文件
* 支持`file://`本地访问，当然更可以部署到web服务器访问



## 文档编码和后缀 

文档使用`markdown语法`编写，建议保存成`.slides`后缀的文本文件，文件编码统一为`UTF-8`。

## 语法

### 2.1 基础语法
在markdown语法基础上进行了扩展，markdown语法请参考<a href="./grammar.md.html">这里</a>

### 2.2 扩展语法
1. `@s [attr-list]`：分隔幻灯片，必须从第一列开始写，单独一行。
    * 举例
            @s
            # 第一张幻灯片标题
            内容

            @s
            ## 第二张幻灯片标题
            1. red
            2. green
            3. yellow
    * 举例
            @s data-transition="linear"
            ## 第二张幻灯片标题
            1. red
            2. green
            3. yellow

2. `@vs [attr-list]`：分隔垂直幻灯片，必须从第一列开始写，单独一行。
    * 举例
            @s
            # 第一张水平幻灯片标题
            内容

            @vs
            ## 第一张垂直幻灯片标题
            1. red
            2. green
            3. yellow

            @vs data-background-color="#ff8855"
            ## 第二张垂直幻灯片标题
            * China
            * America 
            * England

            @s
            # 第二张水平幻灯片标题
                #include <stdio.h>
                int main(){
                    printf("Hello, World!");
                }
3. todo...
    
## 安装和使用

为了避免必须通过svn提交以后才能查看最终效果，提高编写代码的效率，
可以通过下载以下工具包，并在本地部署好。就可以通过预览功能，`先预览无误以后，再行提交`。

* `下载地址`：<a href="/docs/hudamin/markdown/download/slides.tar.gz">slides.tar.gz[`2014-09-17新版`]</a>
* `部署以及使用方法`：
    1. `Windows`：
        1. 下载以后解包至`C:\slides`
        2. 将`C:\slides\slides.bat`拷贝至`C:\WINDOWS\system32`
        3. 使用方式：
                slides.bat FILENAME
        4. 按以上方式解包，即可正常使用。如果需要自己更换目录，则需要修改`slides.bat`中对应路径参数。
            如果不熟悉`bat文件`，则不建议修改，而使用默认部署

    2. `Mac`:
        1. 下载以后解包至某一本地目录，例如`DIR/slides` 
        2. 修改`DIR/slides/slides-mac.sh`，将
                MARKDOWNCMD=/Users/hudamin/projects/git/git-myscripts/markdown/bin/slides/mac/markdown
                ROOT=/Users/hudamin/projects/git/git-myscripts/markdown/bin/slides
            修改成：
                MARKDOWNCMD=DIR/slides/mac/markdown
                ROOT=DIR/slides
        3. 将`DIR/slides/slides-mac.sh`拷贝成`~/bin/slides`
        4. 设置`可执行权限`
                chmod +x slides
        5. 使用方式：
                slides FILENAME 
    3. `Unix`：
        与`Mac`非常类似，只需将`mac`出现的地方改成`unix`即可。

祝您用餐愉快
