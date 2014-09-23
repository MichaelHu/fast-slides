@s
# fast-slides

MichaelHu / 2014-09



@s
帮助您将`@[class="fragment highlight-red"]Markdown文档`快速转换成
`@[class="fragment highlight-red"]HTML5幻灯片`




@s
## 特性？
* `@[class="fragment highlight-green"]纯绿色版`，下载至本地，稍作配置后就可以使用
* 支持`@[class="fragment highlight-red"]windows，mac和linux`平台
* 在当前目录下自动生成以`@[class="fragment highlight-red"].preview.html`为后缀的幻灯片文件，方便您直接打包发布
* 支持`@[class="fragment highlight-red"]file://`本地访问，当然更可以部署到web服务器访问



@s
这一切，只需要一个命令

    @[class="fragment"]slides FILE

@s
和对Markdown文档稍作改动

@s
以下Markdown文件：

    # 工作报告
    MichaelHu / 2014-09

    ## 大纲
    * 一季度项目和总结
    * 二季度项目和总结
    * 下半年工作计划 

    ## 一季度项目和总结
    ...

@s
只需稍作改动：

    @s
    # 工作报告
    MichaelHu / 2014-09

    @s
    ## 大纲
    * 一季度项目和总结
    * 二季度项目和总结
    * 下半年工作计划 

    @s
    ## 一季度项目和总结
    ...

@s
## 具体怎么写？ 

* @[class="fragment"]文档使用`@[class="fragment highlight-blue"]markdown语法`编写
* @[class="fragment"]建议保存成`@[class="fragment highlight-blue"].md`后缀的文本文件
* @[class="fragment"]文件编码统一为`@[class="fragment highlight-blue"]UTF-8`


@s
### 2.1 基础语法
在markdown语法基础上进行了扩展，markdown语法请参考<a href="https://github.com/MichaelHu/fast-slides/blob/master/docs/grammar.md">这里</a>





@s
### 2.2 扩展语法


@s
#### 2.2.1 幻灯片分隔符  

@[class="fragment"]`@[style="color:red"]@s [attr-list]`

@vs
用于分隔幻灯片，必须从第一列开始写，单独一行

@[class="fragment" style="color:red"]提示：按DOWN键，至内容不再变化

@vs
    @s
    # 第一张幻灯片标题
    内容

    @s
    ## 第二张幻灯片标题
    1. red
    2. green
    3. yellow

@vs
    @s data-transition="linear"
    ## 第二张幻灯片标题
    1. red
    2. green
    3. yellow

@s
#### 2.2.2 垂直幻灯片分隔符

@[class="fragment"]`@[style="color:red"]@vs [attr-list]`


@vs
分隔垂直幻灯片，必须从第一列开始写，单独一行

@[class="fragment" style="color:red"]提示：按DOWN键，还有更多内容


@vs
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
#### 2.2.3 标签属性

@[class="fragment"]`@[style="color:red"]@[attr-list]`

@[class="fragment"]为即将生成的标签添加属性

@vs
* 标签属性位于`@[class="fragment highlight-red"]内容开始`处
* @[class="fragment" style="color:red"]提示：按Down键还有更多内容

@vs
这么写：

    @[class="fragment"]## @[class="fragment"]Slide Title 
    * @[class="fragment"]Red 
    * @[class="fragment"]Yellow 
    * @[class="fragment"]Blue 

@vs
* 会产生以下输出：

        @[class="fragment"]<h2 class="fragment">Slide Title</h2>
        <ul><li class="fragment">Red</li>
        <li class="fragment">Yellow</li>
        <li class="fragment">Blue</li></ul>

@vs
* 其他的有序列表、段落、代码等也可以支持标签属性



@vs
这么写：

    @[class="fragment"]## 有序列表举例
    1. One
    2. @[style="color:red"]Two
    3. Three

@vs
* 会产生以下输出：

        @[class="fragment"]<h2>有序列表举例</h2>
        <ol><li>One</li>
        <li style="color:red">Two</li>
        <li>Three</li></ol>

@vs
这么写：

    @[class="fragment"]## 段落举例 
    @[]@[class="fragment"]这里是一个段落

@vs
* 会产生以下输出：

        @[class="fragment"]<h2>段落举例</h2>
        <p class="fragment">这里是一个段落</p>

@vs
这么写：

    @[class="fragment"]## 代码举例
        @[]@[class="fragment"]#include <stdio.h>
        int main(){
            printf("Hello, World!!\n");
        }

@vs
会产生以下输出：

    @[class="fragment"]<h2>代码举例</h2>
    <pre class="fragment"><code>#include &lt;stdio.h>
        int main(){
            printf("Hello, World!!\n");
        }
    </code></pre>

@s
## 安装和使用

@s
下载程序包并简单部署即可。

@s
* `下载`：
    1. @[class="fragment"]`@[style="color:red"]git clone`

            git clone https://github.com/MichaelHu/fast-slides.git

    2. @[class="fragment"]也可以直接通过`@[style="color:red"][Download ZIP]按钮`将项目文件下载到本地

@s
* `部署以及使用方法`：

@s
* `@[style="color:red;font-size:1.5em;"]Windows`：
    1. @[class="fragment"]下载以后解包至`C:\slides`
    2. @[class="fragment"]将`C:\slides\slides.bat`拷贝至`C:\WINDOWS\system32`
    3. @[class="fragment"]使用方式：

            slides.bat FILENAME

    4. @[class="fragment"]按以上方式解包，即可正常使用。如果需要自己更换目录，则需要修改`slides.bat`中对应路径参数。
        如果不熟悉`bat文件`，则不建议修改，而使用默认部署


@s
* `@[style="color:red;font-size:1.5em;"]Mac`:
    1. @[class="fragment"]下载以后解包至某一本地目录，例如`DIR/slides` 
    2. @[class="fragment"]修改`DIR/slides/slides-mac.sh`，将

            MARKDOWNCMD=/Users/hudamin/projects/git/git-myscripts/markdown/bin/slides/mac/markdown
            ROOT=/Users/hudamin/projects/git/git-myscripts/markdown/bin/slides

        修改成：

            MARKDOWNCMD=DIR/slides/mac/markdown
            ROOT=DIR/slides

    3. @[class="fragment"]将`DIR/slides/slides-mac.sh`拷贝成`~/bin/slides`
    4. @[class="fragment"]设置`可执行权限`

            chmod +x slides

    5. @[class="fragment"]使用方式：

            slides FILENAME 

@s
* `@[style="color:red;font-size:1.5em;"]Unix`：
    与`Mac`非常类似，只需将`mac`出现的地方改成`unix`即可。



@s
## @[style="text-align:center"]祝您用餐愉快
