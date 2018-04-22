@s
# 带你了解前端



@vs
beatles-fe@didichuxing.com

2016-03-03

<script>
$('head').append(
'<link rel="stylesheet" type="text/css" href="http://static.didialift.com/pinche/css/animate.min.css" />'
);
</script>

<style type="text/css">

.icon {
    height: 120px;
}

.square-icon {
    height: 120px;
    width: 120px;
}

.small-icon {
    width: 50px;
    height: 50px;
    border-color: transparent !important;
    vertical-align: middle !important;
}

</style>




@vs
* @[class="fragment"]顺风车前端组成立于`@[class="fragment highlight-green"]2015年5月`
* @[class="fragment"]现团队成员`@[class="fragment highlight-red"]9人`
* @[class="fragment"]负责`@[class="fragment highlight-green"]顺风车客户端`、`@[class="fragment highlight-red"]WebApp`、`@[class="fragment highlight-green"]营销活动`以及`@[class="fragment highlight-red"]内部平台（比如MIS）`等的H5页面开发，实现页面`@[class="fragment highlight-green"]展示、交互和各类动画效果`等。
* @[class="fragment"]同时致力于提高H5开发效率的各类`@[class="fragment highlight-red"]工具平台的研发`，以及前端新技术的`@[class="fragment highlight-green"]调研和落地应用`。





@vs
<img src="./img/team.png">





@s
## 一、第一印象？






@s

<img src="./img/QieTuZai-new.jpg">




@s
<img src="./img/SayNO.gif">
@[class="fragment fade-in"]`@[style="color:red;"]你才是切图仔!!`




@s
## 二、今非昔比


@vs
如何成为一名优秀的web前端工程师？

@vs
<img src="./img/FE-Skills.jpg">

@vs
来个简版的

@vs
<img src="./img/FE-Skills-Simple.png">







@s
## 三、关键词


@vs
<img class="icon" src="./img/fis.png">
`@[style="color:red"]前端工程化`，不再是手工作坊，而是`@[class="fragment highlight-green"]自动化、工程化`的前端开发。能用技术自动化解决的，我们不再手工。


@vs
<img class="icon" src="./img/webapp.png">
`@[style="color:red"]WebApp - SPA`: 运行于浏览器的NativeAPP，`@[class="fragment highlight-green"]构建APP所需的技术一个不少`，路由、事件中心、渲染单元、业务逻辑处理单元等等，对开发人员的系统架构、设计能力要求很高。复杂WebApp`@[class="fragment highlight-green"]代码规模5w+`


@vs
<img class="icon" src="./img/nodejs.jpg">

`@[style="color:red"]nodejs`，大行其道，前端同学使用它可以`@[class="fragment highlight-green"]构建前端工程化工具集`、`@[class="fragment highlight-green"]搭建高性能的WebServer`。周边配套的完善，数据库、各类中间件都可低成本的信手拈来。

一个组合：`@[class="fragment highlight-green"]Linux + Node + MongoDB + KOA`



@vs
<img class="icon" src="./img/platform.png">
`@[style="color:red"]平台`，研发各类平台工具，提高生产效率，比如`@[class="fragment highlight-green"]H5 IDE`、 `@[class="fragment highlight-green"]CSS动画工具`、`@[class="fragment highlight-green"]WebFont`等，从前台都后台，再到机器部署和运维，都是我们自己一手搞定。


@vs
<img class="icon" src="./img/opensource.jpg">
`@[style="color:red"]拥抱开源`，前端是开源社区最最活跃的技术领域，各类优秀开源软件日新月异

热门开源项目：<https://github.com/search?utf8=✓&q=followers%3A%3A%3E500>

<div id="top_languages" class="fragment fade-in" style="position:absolute; top:50%; left:50%; z-index:100; margin-top:-135px; margin-left:-120px;">
@[class="fragment fade-out"]<img src="./img/top-languages.png">
</div>
<script>
$('#top_languages').on('click', function(){
    $(this).addClass('animated wobble');
});
</script>


@vs
<img src="./img/thestack.jpg">
`@[style="color:red"]全栈`，全栈工程师，从切图到写码，从前台到后台，从浏览器端到客户端，全能型工程师是前端界的香饽饽。




@s
## 四、我们做什么？

@s
### 4.1 运营类项目

* 地铁汪
* 顺风侠
* 中秋大电影
* 测一测
* 等等




@vs
<style type="text/css">
.h5-container,
.h5-frame {
    border: 1px solid #bbb;
    width: 400px;
    height: 600px;
}

.h5-container {
    position: relative;
}

.h5-cover {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.h5-cover-dtw {
    background-image: url("./img/cover-dtw.png");
}

.h5-cover-sfx {
    background-image: url("./img/cover-sfx.png");
}

.h5-cover-movie {
    background-image: url("./img/cover-movie.png");
}

.h5-cover-cyc {
    background-image: url("./img/cover-cyc.png");
}

</style>


4.1.1 地铁汪－1505
<div class="h5-container">
<div class="h5-cover h5-cover-dtw"></div>
<iframe class="h5-frame" data-src="http://test.diditaxi.com.cn/pinche/subwaydog/guide?channel=40011"></iframe>
</div>



@vs
4.1.2 顺风侠－1508
<div class="h5-container">
<div class="h5-cover h5-cover-sfx"></div>
<iframe class="h5-frame" data-src="http://static.xiaojukeji.com/pinche/staticpage/pop.html"></iframe>
</div>



@vs
4.1.3 中秋大电影－1509
<div class="h5-container">
<div class="h5-cover h5-cover-movie"></div>
<iframe class="h5-frame" data-src="http://wap.didialift.com/pinche/message/moviedetail?id=32769&mcode=26278023"></iframe>
</div>



@vs
4.1.4 测一测－1601
<div class="h5-container">
<div class="h5-cover h5-cover-cyc"></div>
<iframe class="h5-frame" data-src="http://static.didialift.com/didialift/hybrid/pages/randomPage/?regfrom=501298&psource=313"></iframe>
</div>



<script>
addEventListener('load', function(){
    $(function(){
        $('.h5-cover').on('click', function(){
            var $cover = $(this),
                $frame = $cover.next();
            $cover.hide();
            $frame.attr('src', $frame.data('src'));
        });
    });
});
</script>




@s
### 4.2 客户端H5项目



@vs
4.2.1 留言页

<style type="text/css">

.h5-cover-addremark {
    background-image: url("./img/cover-addremark.png");
}

</style>
<div class="h5-container">
<div class="h5-cover h5-cover-addremark"></div>
<iframe class="h5-frame" data-src="http://api.didialift.com/beatles/h5/passenger/order/addremark?required=0&from_city_id=1&to_city_id=0&maptype=soso&phone=cixtrEO3C5gPFNbW2VsUbQ==&channel=102&appversion=4.2.3&os=iPhoneOS&lat=40.0434326171875&token=DLhQQoilSyVKZ44lUvrA5K7111vOczQsc3OnRiGUpI1UjTsOgzAQRO8ytQt2MeZzmcgyq4AEOPKniBB3j-0u1c6O3ujdyHlfsQAKLfBEetTzaCZmMoNC8IdgIQX7rleXdEra_Bqx3IhnrOVguNdMs0L0ObgCdo-CC2KTvNJ-yj_k5DiKk3pjiEaeOi56t9nrkta3f7XJpu-nTjt6fgEAAP__&imei=7fb4736fb8c2c75194405f05ee0c9e5b&deviceid=7fb4736fb8c2c75194405f05ee0c9e5b&appkey=taxiPassengeriOS&datatype=101&lng=116.2890017361111&model=iPhone&remark=&&user_mark=&&extra_special=&user_add=0&sig=674d440df835e0c971fe001bd71dae3824f8100f"></iframe>
</div>




@vs
4.2.2 帮助系统

<style type="text/css">

.h5-cover-help {
    background-image: url("./img/cover-help.png");
}

</style>
<div class="h5-container">
<div class="h5-cover h5-cover-help"></div>
<iframe class="h5-frame" data-src="http://static.didialift.com/didialift/hybrid/pages/help/help-homePage.html"></iframe>
</div>



@vs
4.2.3 还有：投诉页、慢必送、价格详情、价格预估、个人主页等

<style type="text/css">

.other-covers {
    width: 375px; 
    height: 627px;
}

</style>
@[class="fragment fade-in"]<img class="other-covers" src="./img/cover-profile.png">
@[class="fragment fade-in"]<img class="other-covers" src="./img/cover-complain.png">




@s
### 4.3 WebAPP


@vs
微信版、支付宝版本，通用版本

<style type="text/css">

.h5-cover-webapp {
    background-image: url("./img/cover-webapp.png");
}

</style>
<div class="h5-container">
<div class="h5-cover h5-cover-webapp"></div>
<iframe class="h5-frame" data-src="http://common.diditaxi.com.cn/general/webEntry?DEBUG"></iframe>
</div>



@s
### 4.4 MIS系统

@vs
mis系统前台界面优化、移动端适配

<style type="text/css">

.h5-cover-mis {
    background-image: url("./img/cover-mis.png");
}

</style>
<div class="h5-container">
<div class="h5-cover h5-cover-mis"></div>
<iframe class="h5-frame" data-src="http://mis.didialift.com"></iframe>
</div>





@s
## 五、我们还做什么？

@vs
专注`@[class="fragment highlight-red"]开发效率`和`@[class="fragment highlight-red"]质量`，我们还需要承担各类技术建设的工作




@vs
### 5.1 fis-didi
<img class="icon" src="./img/fis-didi.png">
前端工程化开发的基石，解决前端开发中`@[class="fragment highlight-red"]自动化工具`、`@[class="fragment highlight-green"]性能优化`、`@[class="fragment highlight-red"]模块化框架`、`@[class="fragment highlight-green"]开发规范`、`@[class="fragment highlight-red"]代码部署`、`@[class="fragment highlight-green"]开发流程`等问题。

    $ npm install -g fis-didi
    $ didi init project
    $ didi install didi-component/dd
    $ didi server init
    $ didi server start
    $ didi release

参考：<http://fe.in.didialift.com:8088/fe/zhangnan03/fis-didi/fis-didi.md.html>


@vs
#### 5.1.1 fis-didi/didi-component

`@[style="color:red;"]组件化开发引擎`，已经积累`@[class="fragment highlight-green"]22个通用组件`

* login, wf, didimonitor, didibridge, deviceLocation, imgcliper, ddplayer等
* <https://git.xiaojukeji.com/groups/didi-component>







@vs
### 5.2 H5-IDE

<img class="icon" src="./img/h5-ide.png">

为滴滴`@[class="fragment highlight-red"]产品、运营`等非技术同学提供的，能够快速`@[class="fragment highlight-green"]设计、制作、上线`一款H5应用的辅助工具。

* <http://h5editor.didialift.com>
* <http://fe.in.didialift.com:8088/fe/quyatong/h5editor/intro.md.html>
* 推出以来，通过平台制作产出的H5项目数已达`@[class="fragment highlight-red"]50+`



@vs
### 5.3 CSS3动画工具

<img class="icon" src="./img/css-animate.png">

动画`@[class="fragment highlight-green"]分类、演示`，提供`@[class="fragment highlight-red"]自定义动画`以及`@[class="fragment highlight-red"]代码生成器`。

* <http://fe.in.didialift.com:8088/fe/cssanimate/demo/>



@vs
### 5.4 WebFont工具

<img class="icon" src="./img/webfont.png">

提供Web字体的`@[class="fragment highlight-red"]按需抽取`，
输出兼容各类浏览器的对应字体文件（`@[class="fragment highlight-green"].eot, .ttf, .woff, .svg`）
以及样式文件，大大减少Web字体文件的尺寸。

* <http://10.10.34.71/webfont/>








@s
## 六、前端工作过程？

<img class="icon" src="./img/input-output.png">
说说来龙去脉



@vs
### 6.1 Input

<img class="icon" src="./img/prd.png">
<img class="icon" src="./img/design.jpg">
<img class="icon" src="./img/interaction.jpg">

PRD、设计稿、交互稿



@vs
### 6.2 Output

<img class="icon" src="./img/html5.jpg">
<img class="icon" src="./img/css.jpg">
<img class="icon" src="./img/js.jpg">

兼容各类WEB容器的网页



@vs
### 6.3 process?

<img class="icon" src="./img/question.jpg">


@vs
<img class="icon" src="./img/ps.jpg">

PS，切图，需要熟悉简单的图片处理过程。图层、组合，保存成透明背景的PNG，需要调整保存设置，减少文件尺寸。



@vs

<img class="icon" src="./img/sublime.jpg">
<img class="square-icon" src="./img/vim.png">
<img class="icon" src="./img/fis-didi.png">
<img class="icon" src="./img/h5-ide.png">
<img class="icon" src="./img/webfont.png">
<img class="icon" src="./img/css-animate.png">
<br>
* 编码，各类文本编辑器，SubLime、VIM等
* 工程化开发环境，fis-didi
* 平台：h5-ide
* 工具：webfont，css3动画工具



@vs
<img class="icon" src="./img/chrome.jpg">

浏览器，主要是Chrome浏览器，使用开发者工具，模拟手机屏幕、交互、网络、定位等，进行代码调试

* `Win`: `@[style="color:red;"]F12`
* `Mac`: `@[style="color:red;"]Option + Command + I`




@vs
<img class="icon" src="./img/ios-android.jpg">

<img class="icon" src="./img/didichuxing.png">
<img class="icon" src="./img/weixin.jpeg">
<img class="icon" src="./img/zhifubao.png">
<img class="icon" src="./img/safari.jpg">


手机实测，提测前的代码，需要在手机上实际验证通过

* OS（Android&iOS）及版本
* 屏幕尺寸及分辨率
* 运行容器





@vs

<img class="icon" src="./img/test-env.png">

提交测试环境，发布测试地址供效果确认

@[class="fragment" style="color:red"]注意：带<img class="small-icon" src="./img/kulou.png">的页面不分享



@vs
<style type="text/css">

.h5-cover-test {
    background-image: url("./img/cover-test.png");
}

</style>

<div class="h5-container">
<div class="h5-cover h5-cover-test"></div>
<iframe class="h5-frame" data-src="http://test.diditaxi.com.cn/pinche/newyear/newyearthree"></iframe>
</div>






@vs

<img class="icon" src="./img/git.jpg">
<img class="icon" src="./img/svn.png">

提交代码，供QA测试



@vs

<img class="icon" src="./img/jenkins.jpg">
<img class="icon" src="./img/odin.png">
<img class="icon" src="./img/citrix.jpg">
<img class="icon" src="./img/securecrt.jpg">

上线：PMS上线&RPM上线

Jenkins, Odin3, Citrix, SecureCRT



@vs

<img class="icon" src="./img/proxy.png">
<img class="icon" src="./img/fiddler.png">
<img class="icon" src="./img/charles.png">

数据转发，在线调试、抓包






@s
## 七、了解更多


@vs

### 7.1 前端主页
`@[style="color:red"]fe.in`，遇见美好一路同行

* <http://fe.in.didialift.com:8088/fe/>
* 包含各类技术文档、资料，提供常用链接、文章列表、检索功能


@vs
### 7.2 wiki
<http://wiki.intra.xiaojukeji.com/pages/viewpage.action?pageId=12222665>


@vs
### 7.3 顺风车前端技术分享
<http://fe.in.didialift.com:8088/fe/didialift/tech-share.md.html>




@s
@[style="text-align:center;"]<img src="./img/thankyou.jpg">


