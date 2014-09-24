fast-slides
===========

A tool for creating HTML5 slides from a markdown-grammar doc.

Markdown爱好者的福音 ———— 帮助您将Markdown语法编写的文档快速转换成HTML5幻灯片。

这一切，只需要一个命令：

    slides FILE

就能在浏览器中看到酷炫的幻灯片了，有木有觉得很酷。


* 纯绿色版，下载至本地，稍作配置后就可以使用
* 支持windows，mac和linux平台
* 在当前目录下自动生成以`.preview.html`为后缀的幻灯片文件
* 支持`file://`本地访问，当然更可以部署到web服务器访问


感谢<a href="https://github.com/hakimel/reveal.js">reveal.js</a>，它提供了幻灯片的前端框架。

另，本文档的HTML5幻灯片版本<a href="http://258i.com/fast-slides/examples/demo-readme.md.preview.html?theme=default&transition=concave" target="_blank">传送门：Fast-Slides</a>

## 先睹为快

对Markdown文档稍作改动，就可以自动生成HTML5幻灯片。

    # 工作报告
    MichaelHu / 2014-09

    ## 大纲
    * 一季度项目和总结
    * 二季度项目和总结
    * 下半年工作计划 

    ## 一季度项目和总结
    ...
    
稍加改动：

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

就可以转成幻灯片了，
<a href="http://258i.com/fast-slides/examples/demo-2.md.preview.html?theme=night&transition=concave">点此查看幻灯片：工作报告</a>

通过`修改访问地址的查询参数`，还可以看到不同主题和切换效果的幻灯片：

<a href="http://258i.com/fast-slides/examples/demo-2.md.preview.html?theme=moon&transition=fade">工作报告（moon主题、渐隐渐现）</a>

<a href="http://258i.com/fast-slides/examples/demo-2.md.preview.html?theme=default&transition=linear">工作报告(默认主题、线性切换)</a>


## 文档编码和后缀 

文档使用`markdown语法`编写，建议保存成`.md`后缀的文本文件，文件编码统一为`UTF-8`。

## 语法

### 2.1 基础语法
在markdown语法基础上进行了扩展，markdown语法请参考<a href="https://github.com/MichaelHu/fast-slides/blob/master/docs/grammar.md">这里</a>

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
3.  标签属性：`@[attr-list]`
    * 标签属性位于内容开始处，举例如下：

            ## @[class="fragment"]Slide Title 
            * @[class="fragment"]Red 
            * @[class="fragment"]Yellow 
            * @[class="fragment"]Blue 

        会产生以下输出，从而作为reveal的fragment存在：

            <h2 class="fragment">Slide Title</h2>
            <ul><li class="fragment">Red</li>
            <li class="fragment">Yellow</li>
            <li class="fragment">Blue</li></ul>

    * 其他的有序列表，段落，代码等也可以支持标签属性，也简单举例如下：

            ## 有序列表举例
            1. One
            2. @[style="color:red"]Two
            3. Three

            ## 段落举例 
            @[class="fragment"]这里是一个段落

            ## 代码举例
                @[class="fragment"]#include <stdio.h>
                int main(){
                    printf("Hello, World!!\n");
                }

        会产生以下输出：

            <h2>有序列表举例</h2>
            <ol><li>One</li>
            <li style="color:red">Two</li>
            <li>Three</li></ol>

            <h2>段落举例</h2>
            <p class="fragment">这里是一个段落</p>
    
            <h2>代码举例</h2>
            <pre><code class="fragment">#include &lt;stdio.h>
            int main(){
                printf("Hello, World!!\n");
            }
            </code></pre>


## 安装和使用

下载程序包并在本地做简单部署，就可以了。具体说明一下：

* `下载`：
    1. `git clone`

            git clone https://github.com/MichaelHu/fast-slides.git

    2. 也可以直接通过`Download ZIP按钮`将项目文件下载到本地

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
