---
title: 体现工匠精神的 Resource Hints
date: 2018-08-31
author: leo
tags: 技术
categories:
    - 技术仓库
thumbnail: 技术
blogexcerpt: 从古至今都想预测未来，周易八卦，推背图等，有很多历史文献都表明曾经真的能预测未来，到现代互联网兴起之后，网站也越来越漂亮，越来越大，性能就是大家一致追求的方向，从浏览器厂商到各个开发者都想通过各种方式来提升，接下来我们要讲的Resource Hints就是针对这个W3C提供的标准，此标准主要提供了各种预先处理的机制，就如果中国古人一直在追求的预测未来有异曲同工之妙。
---

## 背景
<img src="http://img11.360buyimg.com/uba/jfs/t26365/135/1376415237/1828641/5ac1662d/5bc81e8dN79c4ad6b.png" alt="周易八卦图" style="width: 400px;">

八卦图代表了古代算法数术的结晶，主要是为了提供一种预测人类行为的方法论，这种能提前预测的行为古往今来都备受人们追捧，既然预测这个行为那么受欢迎，互联网行业是不是也进行了这方面的技术储备呢？没错互联网行业也已经存在此功能了。

<img src="http://img13.360buyimg.com/uba/jfs/t25063/273/2349702127/54740/8a1bd543/5bc81eb0Nc49fbcf8.png" alt="我读书少" width="400px">

自从互联网兴起之后，网站也越来越漂亮，越来越大，性能就是大家一致追求的方向，大家也都想预测用户下一步行为。从浏览器厂商到各个开发者都想通过各种方式来提升用户的体验，所以提前知道用户的下一步行为，预先加载用户下一个页面的资源就是开发者要追求的下一个技术方向。之前大家都比较习惯使用 JS 来动态控制页面内容，殊不知我们还有一些更好的方案来替换这些方法。

#### 我们这么搞？
1. 简单粗暴的可以直接页签最下端引用加载；
2. 高级一点：我可以在执行的 JS 代码来进行 load 加载；

更高级的替换方案是什么呢？

<img src="http://img20.360buyimg.com/uba/jfs/t27286/163/1394214564/163628/88b52ab0/5bc81ee0Nc2b498ca.png" alt="猴子" width="200px">

#### 听小道消息说谷歌这么搞！
当你在谷歌浏览器输入域名一部分时会根据记录提示补全，如下图所示：

<img src="http://img30.360buyimg.com/uba/jfs/t27325/240/1419508114/4449/80f48f06/5bc81f0eN3eaeb808.png" alt="期待">

你知道吗？这个时候谷歌已经对你有意向访问的域名搞事情了。
因为此阶段，实际上谷歌已经大概知道你即将访问哪个页面，此时浏览器会根据捕获的页面 URL 进行提前操作，如提前解析 DNS，提前加载部分资源等事。具体能预先处理到何种程度，这个我还真的没有实际监控到太确切的数据，把它当成小道消息吧。

这种预先处理页面的方式，不只是开发的程序猿与攻城狮们，浏览器厂商也在想办法去推动这个行为的”合法化“，也就是进入 W3C 的标准，当然路途坎坷，但我们还是见到了一些效果，这个效果就是我们接下来要讲的<span style="color: #f00; font-size: 16px;">Resource Hints</span>。

## Resource Hints 是什么？

Resource Hints 实际上就是“合法化”的提供了使用浏览器原始语言来进行的一些提前预测行为的能力，W3C 也陆续增加了很多功能，主要包含如下：

1. dns-prefetch
2. preconnect
3. prefetch
4. prerender
5. preload

根据 W3C 的记录，最早的草案是在2014年10月21日提出的，中途经过了几十个版本的迭代（好吧，我的确是一个版本一个版本的翻来看的），最新的草案是2018年1月15日发布的。W3C 也针对此进行了多次的优化，虽然现在的使用频率以及兼容性依然还不是特别的完美。

## Resource Hints能做什么？
谈了这么多，那 Resource Hints 具体能干什么呢？我们来一个一个的说。

### 1、dns-prefetch
谈到这里，不得不先介绍一下 DNS 是一个什么东西。
DNS(Domain Name System) - 域名和 IP 地址相互映射的一个分部式数据库。

![DNS原理](http://img13.360buyimg.com/uba/jfs/t25060/230/2304491662/786985/f8830f09/5bc81f6dNa256caf3.png)

当我们访问一个域名的时候，DNS 系统会根据域名去一层一层的开始解析，从全世界的分布系统中查询对应的 IP 地址，然后通过 IP 地址来访问对应的网页数据。

DNS 解析时间会导致大量用户感知延迟。DNS 解析所花费的时间是高度可变的。延迟时间范围从大约 1ms (本地缓存的结果)到通常几秒钟的时间，所以为了解决此延迟，W3C 提供了 dns-prefetch 功能，兼容性如图：

![dns-prefetch兼容性](http://img12.360buyimg.com/uba/jfs/t26704/345/1374734298/83119/8d84fd6c/5bc8200fNbd6ea9a2.png)

主流浏览器兼容：
- IE10+；
- Firefox 3.0+；
- Chrome All；
- Safari 5.0+；
- Opera 15.0+；
我们可以在首页添加如下语句来使用:

```
<link rel="dns-prefetch" href="//img13.360buyimg.com">
```

当存在 DNS 预解析时，本页面无论是否存在此域名下的资源，都会对此域名进行 DNS 解析，当实际用到时，浏览器就无需再去解析，我们来看一下实际使用之后再次进入页面的加载情况，

![dnsprefetch添加后的效果图](http://img14.360buyimg.com/uba/jfs/t26869/244/1226871474/158336/f8642b06/5bc81f97Nc6deb944.png)

最直观的效果，在页面加载中少了 DNS Lookup 的时间，也就是解析 DNS 的时间。

DNS 预解析主要是用户访问链接之前解析域名的一种尝试，这是使用计算机正常的 DNS 解析机制完成的，一旦解析了域名，如果用户导航到该域名，就不会因为 DNS 解析时间而出现延迟，此策略比较适用的场景是，网页中会引用多域名下的信息，我们可以针对使用到的所有域名进行解析，所有这些工作都在用户读取页面时使用最少的 CPU 和网络资源来完成，当用户访问这些预先解析的网站时，平均会节省 1-20ms 的时间，更重要的是，如果用户遇到了 DNS 解析的“最坏情况”延迟，那对于网络延迟的提升是很显著的。

#### dns-preferch应用

我厂项目中均会使用 CDN 以及图片服务器，并且图片服务器也不只一台，仅仅这些内容，就会造成多次的 DNS 解析，针对此情况我们使用 dns-prefetch，对使用到的域名进行预解析，减少后续域名 DNS 解析时间，以此来追求更进一步的前端性能。

![项目中的DNS解析使用](http://img14.360buyimg.com/uba/jfs/t26224/126/1443913229/177866/8b0e85cf/5bc8203cN27edb802.jpg)

项目使用的 CDN 以及图片服务器地址的 DNS 预解析，我们均已经集成进我们内部 Vue 单页面脚手架 Gaea[8]。

### 2、preconnect
当我们调用请求时，会经历怎样的步骤呢？

![https请求步骤](http://img20.360buyimg.com/uba/jfs/t1/4220/24/11362/43394/5bcede6aE341cf035/93e7ac3dacca8247.png)

针对实际的 http 请求，DNS 解析一步，在上一个环节已经提前处理，那么后续的步骤我们可以进行提前处理吗？
preconnect 功能就是为此而来的。
- 针对 HTTP ：可以提前为 URL 建立早期链接，可提前完成包含 DNS 解析 + TCP 三次握手环节；
- 针对 HTTPS ：可以提前为 URL 建立早期链接，可提前完成包括 DNS 解析 + TCP 三次握手 + TLS / SSL 握手环节；
再来看看其兼容性如何：

![preconnect兼容性](http://img10.360buyimg.com/uba/jfs/t27643/137/1422983721/83119/8d84fd6c/5bc82072Nec2ba6ae.png)

主流浏览器兼容：
- IE15+ (http 时才支持)；
- Firefox 39.0+；
- Chrome 46.0+；
- Safari 11.1+；
- Opera 33.0+；
使用的代码如下：

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Resource Hints Demo</title>
<link rel="preconnect" href="//www.jd.com">
</head>
<body>
    <a href="//www.jd.com"></a>
</body>
</html>
```

预链接功能与存在此链接的页面放在一起。打开此页面会直接进行预链接尝试，当点击了跳转时，URL 则可直接读取数据。

如果你期望预链接的地址与当前网站不在同域，我们可以采用跨域方式来进行预链接。

```
<link rel="preconnect" href="//www.jd.com" crossorigin>
```

实际添加之后与添加前，后续页面的页面请求情况对比：

![preconect添加完的效果](http://img20.360buyimg.com/uba/jfs/t24646/361/2298618189/28690/2d998a82/5bc820a2N0fc70d11.png)

具体能节省多长时间这个会根据网络延迟来确定，上图只是做了一个加载顺序的表示，并且，随着网速的越来越快，这个差值的确也会越来越小。

#### preconnect应用
我们开发的项目中会存在很多引导性的链接，可以帮助用户访问到自己想去的网站，此页面就会存在很多不同域名下的链接，因此，我们采用了 preconnect 的方式来对这些数据的 http 链接进行的提前请求，当访问到对应页面时减少了页面链接的时间。

### 3、prefetch
既然一个内容除了获取数据之外都能提前进行，那何不直接提前加载一个文件呢？prefetch 你值得拥有，兼容性如下图：

![prefetch兼容性](http://img13.360buyimg.com/uba/jfs/t26770/67/1419999572/73277/79c7f9bd/5bc8210aNb7519fac.png)

主流浏览器兼容：
- IE11+；
- Firefox 2.0+；
- Chrome 8.0+；
- Safari 全部不支持；
- Opera 15.0+；

prefetch 是一个低优先级的资源加载策略，此策略允许浏览器在后台（空闲时间）获取稍后可能需要的资源，并将它们存储在浏览器缓存中。一旦页面完成加载，就会开始下载额外资源，如果用户点击了预先获取的链接，则会立即加载内容。
如果在执行预加载策略时，中途出现了高优先级的请求，则预加载的线程占用会立即释放，并且会将已经加载的全部删除，已让出线程来执行当前页面的内容。

![prefetch资源加载流程](http://img14.360buyimg.com/uba/jfs/t25183/217/2339743938/43842/a78f7459/5bc82121N6bfa2564.png)

来看看代码的引入方式：

```
HTML: <link rel="prefetch" href="/uploads/images/pic.png">
HTTP Header: Link: </uploads/images/pic.png>; rel=prefetch
```

预加载类型我们可以通过 as 来设置, as 属性为可选属性，其可以与资源上下文通信，这样用户可以优化预加载的抓取过程。

```
<link rel="prefetch" href="/uploads/images/pic.png" as="image">
HTTP Header: Link: </uploads/images/pic.png>; rel=prefetch; as=image
```

as包含的类型如下：

```
    引用情况                                           预加载类型设置
    <audio>                                         <link rel=preload as=audio href=...>
    <video>                                         <link rel=preload as=video href=...>
    <track>                                         <link rel=preload as=track href=...>
    <script>, Worker's importScripts                <link rel=preload as=script href=...>
    <link rel=stylesheet>, CSS @import              <link rel=preload as=style href=...>
    CSS @font-face                                  <link rel=preload as=font href=...>
    <img>, <picture>, srcset, imageset              <link rel=preload as=image href=...>
    SVG's <image>, CSS *-image                      <link rel=preload as=image href=...>
    XHR, fetch                                      <link rel=preload as=fetch crossorigin href=...>
    Worker, SharedWorker                            <link rel=preload as=worker href=...>
    <embed>                                         <link rel=preload as=embed href=...>
    <object>                                        <link rel=preload as=object href=...>
    <iframe>, <frame>                               <link rel=preload as=document href=...>
```
如果我们预加载的资源与执行代码页面存在跨域的话，我们需要配置跨域，crossorigin 为一个配置参数：
```
<link rel="prefetch" href="//example.com/next-page.html" as="html" crossorigin="use-credentials">
```
CORS 配置，详细可参考[CORS 配置](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attributes)：

![CORS 配置](http://img13.360buyimg.com/uba/jfs/t27667/155/1367213171/135824/31274b6b/5bc8214bN450bbf6e.png)

首页我们预加载了一个 base.js ：

![首页提前加载base](http://img20.360buyimg.com/uba/jfs/t26545/284/1377982904/116359/3e9fda9b/5bc8217bN7d6ed461.png)

进入二级页面之后，base.js 直接从缓存读取：

![首页提前加载base](http://img11.360buyimg.com/uba/jfs/t25201/16/2311634035/158316/5ed4bb5e/5bc8218dNd326dc6b.png)

#### prefetch应用
开发项目中，不排除会遇到管理端类型的系统，此类系统涉及到一些表格类组件以及报表类组件，重复使用如分页，表格，弹窗等多个组件。为避免重复加载影响性能，我们采用 prefetch 对可能会造成重复加载的资源进行提前预加载，以保证我们可以更快速的获取组件资源渲染页面，并且在部分页面我们还会针对性的对下一个页面的业务 JS 进行动态预加载，引用方式如下图：

![项目中使用prefetch进行预加载](http://img12.360buyimg.com/uba/jfs/t24610/129/2287203170/665781/d8649411/5bc821a5Na880a7d3.jpg)

### 4、prerender
我们已经从各方面都提前处理了，什么？还不知足，那咱们来个重量级的。
我们直接把接下来可能访问的页面直接提前渲染了如何？

prerender 会收集用户接下来要访问的页面，并且在浏览器中创建一个隐藏 Tab，并且在隐藏 Tab 中提前加载页面。当跳转到此页面时，相当于直接切换到隐藏 Tab。
来看看功能强大的 prerender 兼容性如何：

![prerender兼容性](http://img30.360buyimg.com/uba/jfs/t25408/154/2293671671/75964/21cc001d/5bc821c1N169a2878.png)

主流浏览器兼容：
- IE11，高版本也不支持；
- Firefox 全部不支持；
- Chrome 13.0+；
- Safari 全部不支持；
- Opera 15.0+；

使用方式如 prefetch 一样，依旧是使用link标签即可：
```
<link rel="prerender" href="https://www.jd.com">
```
整个prerender运行流程如下图：

![prerender流程图](http://img20.360buyimg.com/uba/jfs/t27610/351/1363706153/13355/b5d96d4f/5bc821dbN8d688787.png)

创建 prerender 页面过程：
当访问页面遇到 <link rel=”prerender”> 资源标签时，会启动 prerender , ResourceDispatcherHost 接收到一个 resource 类型为 ::Prerender 的资源请求--但是这个请求永远不会以网络请求发送，相反它会用来创建 PrerenderContents 的请求信号，并且取消请求本身。PrerenderContents 存储于 PrerenderManager 中， PrerenderManager 中会统一管理 PrerenderContents 目录，允许保留最近创建的少量 PrerenderContents，当前的 PrerenderContents 保留一个页面最多只能 30ms，页面保留时间的具体时长是谷歌浏览器默认的，此值可能会受到谷歌浏览器更新影响，如果容量达到存储上线，系统会将旧页面删除回收。

虽然此功能只是谷歌更新的一个小功能，但是因为一些问题使得此功能变得复杂化：
- 最小化资源征用；
- 处理动态媒体[视频、音频、插件、画布]；
- 取消某些情况下的页面；
- 最小化服务器的副作用；
- 共享本地存储[cookie、sessionStorage等]；
> 注意：预渲染虽然美好，但是会造成比较大的流量以及性能的损耗，所以浏览器默认关闭支持此功能。

如果我们需要使用，可以通过以下步骤开启：
1. 打开高级设置；
2. 开启如图功能即可；

![prerender开启功能](http://img30.360buyimg.com/uba/jfs/t26323/132/1399513470/158160/2060e22d/5bc821f5N9607af93.png)

在预渲染的时候，浏览器的开发者工具是无法监控到具体流程的。如果需要监控，我们需要访问浏览器的：chrome://net-internals/#prerender 功能。

![prerender检测效果](http://img12.360buyimg.com/uba/jfs/t27151/274/1441930800/353186/6b23cde9/5bc82635N886e21e9.png)

### 5、preload
其实浏览器能提前帮忙做的事情已经做的差不多了，不过 W3C 不满足，又提供了一个 preload，preload 这又是什么呢？
preload 也是加载资源的功能，但区别于 prefetch 的是，prefetch 的目的在于针对即将访问的页面使用低优先级来提前预加载资源，而preload则会针对当前页面使用高优先级来加载资源，如字体文件，图片等，但值得注意的是，它不会阻塞 onload 事件的执行。

preload兼容性如下图：

![preload兼容性](http://img20.360buyimg.com/uba/jfs/t26932/108/1389313182/80394/30b46cdf/5bc8267dNfd4548bc.png)

主流浏览器兼容：
- IE17+（仅Http支持）；
- Firefox 全部不支持；
- Chrome 50.0+；
- Safari 11.1+；
- Opera 37.0+；

引用的方式与 prefetch 一致，甚至 as 以及 corssorigin 配置也一致，可参考上文：

```
<link rel=“preload” href=“./js/base.js” as=“script”>
```

当页面执行 preload 加载文件时，不会阻碍其他文件的加载：

![preload加载效果图](http://img10.360buyimg.com/uba/jfs/t27619/110/1416603960/170078/f553a1b1/5bc82693N49815494.png)

如果系统中存在字体的话，会出现字体闪动的问题，因字体资源普遍都比较大，所以此时我们可以使用 preload 来预加载字体，这样可以很好的解决页面闪烁的问题。
因为提前缓存文件会对用户的流量造成浪费，所以浏览器在预加载文件后的 3s 内没有使用的此文件会提示警告错误。

![preload提示错误](http://img13.360buyimg.com/uba/jfs/t25978/157/2289539051/179955/7d52f9d0/5bc826a5N028c1515.png)

但很多情况下我们可能需要动态来添加预加载的内容，我们可以使用如下方式来动态添加：

```
preload: function (srcList) {
    for (var i = 0; i < srcList.length; i++) {
        var resource = srcList[i].replace(/http:|https:/, '');
        var head = document.getElementsByTagName('head')[0];
        var rsTag = document.createElement('link');
        rsTag.setAttribute('rel', 'prefetch');
        rsTag.setAttribute('href', resource);
        head.appendChild(rsTag);
    }
},
```
因为功能的性质不同，所以也不是所有内容都可以动态添加的，其实可以动态添加的主要包括： prefetch 、 preconnect 以及 prerender。

#### preload应用
提前预加载比较适合一些大文件资源，单页面应用在开发时因通过构建工具进行了部分合并，导致资源文件并不会太多，针对此种情况我们通过使用 preload 对这些资源文件进行提高优先级的预加载，让整体页面加载速度更快。

## 结语
Resource Hints 包含的功能大概让大家了解了一下，当然大家有人可能已经用到了，也可能未用到，但不可否认，在国内的浏览器大环境下的确兼容性不够好，国外的大多数网站都已经采用了各种方式的预加载策略，所以前端大大们，如果没有使用过的话，也可以尝试使用一下，因为如果不兼容也不会出现问题，何乐而不为呢？

参考文献：
[1] W3C 官方文档：[https://www.w3.org/TR/resource-hints/](https://www.w3.org/TR/resource-hints/)
[2] DNS 原理：[http://blog.51cto.com/369369/812889](http://blog.51cto.com/369369/812889)
[3] CORS 配置：[https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attributes](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attributes)
[4] Resource Hints：[https://www.keycdn.com/blog/resource-hints/](https://www.keycdn.com/blog/resource-hints/)
[5] Prerender： [http://www.chromium.org/developers/design-documents/prerender](http://www.chromium.org/developers/design-documents/prerender)
[6] Preload：What Is It Good For？：[https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)
[7] Understanding prefetching and how Facebook uses prefetching：[https://www.facebook.com/business/help/1514372351922333](https://www.facebook.com/business/help/1514372351922333)
[8] Gaea 参考文档：[https://www.npmjs.com/package/gaea-cli]（https://www.npmjs.com/package/gaea-cli）










