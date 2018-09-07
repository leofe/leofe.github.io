---
title: Resource Hints 了解一下
date: 2018-08-31
author: leo
tags: 技术
categories:
    - 技术仓库
thumbnail: 技术
blogexcerpt: 从古至今都想预测未来，周易八卦，推背图等，有很多历史文献都表明曾经真的能预测未来，到现代互联网兴起之后，网站也越来越漂亮，越来越大，性能就是大家一致追求的方向，从浏览器厂商到各个开发者都想通过各种方式来提升，接下来我们要讲的Resource Hints就是针对这个W3C提供的标准，此标准主要提供了各种预先处理的机制，就如果中国古人一直在追求的预测未来有异曲同工之妙。
---

## 背景
<img src="/assets/img/zhouyi.png" alt="周易八卦图" style="width: 400px;">

这是一张八卦图，来讲讲玄学领域，古代的皇帝一直都在追求长生，追求预测国运，预测未来，每个朝代也都有专门的观星岗位，想借助行星的轨迹来窥探未来的走势，我了解的比较出名的就是李淳風、袁天罡著的推背图了，据说推算出了从唐朝往后2000年历史，为何古代人对未来运势如此着迷呢？好吧，玄学讲到这里，本章主要不讨论玄学，如有兴趣可以留言一起讨论一下哈。

我们先回到现代，既然预测这个行为那么受欢迎，当今社会啥行业最火？莫不是互联网？难道互联网也在搞预测算命？

<img src="/assets/img/cheat.png" alt="我读书少" width="400px">

自从互联网兴起之后，网站也越来越漂亮，越来越大，性能就是大家一致追求的方向，大家也都想预测用户下一步行为,从浏览器厂商到各个开发者都想通过各种方式来提升用户的体验，所以提前知道用户的下一步行为，预先加载用户下一个页面的资源就是一种迫在眉睫的行为了。

#### 我们这么搞？
1. 简单粗暴的可以直接页签最下端引用加载。
2. 高级一点：我可以在执行的js代码来进行load加载

在高级点？
<img src="/assets/img/monkey.png" alt="猴子" width="200px">

#### 听小道消息说谷歌这么搞
当你在谷歌浏览器输入域名一部分时会根据记录提示补全，如下图所示：

<img src="/assets/img/google.png" alt="期待">

你知道吗？这个时候谷歌已经对你有意向访问的域名搞事情了。
因为此阶段，实际上谷歌已经大概知道你即将访问哪个页面了，此时浏览器会根据捕获的页面URL进行提前操作，如提前解析DNS，提前加载部分资源等事。具体能预先处理到何种程度，这个我还真的没有实际监控到太确切的数据，把它当成小道消息吧。

这种预先处理页面的方式，不只是开发的程序猿与攻城狮们，浏览器厂商也在想办法去推动这个行为的”合法化“，也就是进入W3C的标准，当然路途坎坷，但我们还是见到了一些效果。这个效果就是我们接下来要讲的<span style="color: #f00; font-size: 16px;">Resource Hints</span>

## Resource Hints是什么？

Resource Hints实际上就是“合法化”的提供了使用浏览器原始语言来进行的一些提前预测行为的能力，W3C页陆续增加了很多功能，主要包含如下：

1. dns-prefetch
2. preconnect
3. prefetch
4. prerender
5. preload

根据W3C的记录，最早的草案是在2014年10月21日提出的，中途经过了几十个版本的迭代（好吧，我的确是一个版本一个版本的翻来看的），最新的草案是2018年1月15日发布的。W3C也针对此进行了多次的优化，虽然现在的使用频率以及兼容性依然还不是特别的完美。

我们先来看看对应的兼容性如何：
#### dns-prefetch 
![dns-prefetch兼容性](/assets/img/dns-prefetch.png)
主流浏览器兼容：
- IE10+
- Firefox 3.0+
- Chrome All
- Safari 5.0+
- Opera 15.0+

#### preconnect
![preconnect兼容性](/assets/img/preconnect.png)
主流浏览器兼容：
- IE15+(http 时才支持)
- Firefox 39.0+
- Chrome 46.0+
- Safari 11.1+
- Opera 33.0+

#### prefetch
![prefetch兼容性](/assets/img/prefetch.png)
主流浏览器兼容：
- IE11+
- Firefox 2.0+
- Chrome 8.0+
- Safari 全部不支持
- Opera 15.0+

#### prerender
![prerender兼容性](/assets/img/prerender.png)
主流浏览器兼容：
- IE11，高版本也不支持
- Firefox 全部不支持
- Chrome 13.0+
- Safari 全部不支持
- Opera 15.0+

#### preload
![preload兼容性](/assets/img/preload.png)
主流浏览器兼容：
- IE17+（仅Http支持）
- Firefox 全部不支持
- Chrome 50.0+
- Safari 11.1+
- Opera 37.0+

看完兼容性我们也发现了，实际上有一些功能兼容性并不是特别好，不过有一点比较好，浏览器自动都做的向下兼容，如果不兼容，写了标签不会影响页面的任何功能，只是不执行功能而已，所以我们还是可以放开手去用的。

## Resource Hints能做什么？
谈了这么多，那Resource Hints具体能干什么呢？我们来一个一个的说。

#### dns-prefetch
谈到这里，不得不先介绍一下DNS是一个什么东西。
DNS(Domain Name System) - 域名和IP地址相互映射的一个分部式数据库。
![DNS原理](/assets/img/dns.png)
当我们访问一个域名的时候，DNS系统会根据域名去一层一层的开始解析，从全世界的分布系统中查询对应的IP地址，然后通过IP地址来访问对应的网页数据。

DNS解析时间会导致大量用户感知延迟。DNS解析所花费的时间是高度可变的。延迟时间范围从大约1ms(本地缓存的结果)到通常几秒钟的时间，所以为了解决此延迟，W3C提供了dns-prefetch功能。
我们要可以在首页添加如下语句:
```
<link rel="dns-prefetch" href="//img13.360buyimg.com">
```
无论是否使用到此域名，都会去解析，当实际用到时，浏览器就会无需在去解析，我们来看一下实际使用之后再次级页面加载的情况，

![dnsprefetch添加后的效果图](/assets/img/dnsprefetch.png)

最直观的效果，在页面加载中少了DNS Lookup的时间，也就是解析DNS的时间。

DNS与解析主要是用户访问链接之前解析域名的一种尝试，这是使用计算机正常的DNS解析机制完成的，一旦解析了域名，如果用户导航到该域名，就不会因为DNS解析时间而出现延迟，此策略比较适用的场景是，网页中会引用多域名下的信息，我们可以针对使用到的所有域名进行解析，所有这些工作都在用户读取页面时使用最少的CPU和网络资源来完成，当用户访问这些预先解析的网站时，平均会节省1-20ms的时间，更重要的是，如果用户遇到了DNS解析的“最坏情况”延迟，那对于网络延迟的提升是很显著的。

#### preconnect
当我们调用请求时，会经历怎样的步骤呢？
![https请求步骤](/assets/img/httppath.png)
针对实际的http请求，DNS解析一步，在上一个环节已经提前处理，那么后续的步骤我们可以进行提前处理吗？
preconnect功能就是为此而来的。
- 针对HTTP：可以提前为URL建立早期链接，可提前完成包含DNS解析+TCP三次握手环节。
- 针对HTTPS：可以提前为URL建立早期链接，可提前完成包括DNS解析+TCP三次握手+TLS/SSL握手环节。
代码如下：
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
预链接功能于存在此链接的页面放在一起。打开此页面会直接进行预链接尝试，当点击了跳转是，URL则可直接读取数据。

如果你期望预链接的地址与当前网站不在同域，我们可以采用跨域方式来进行预链接。
```
<link rel="preconnect" href="//www.jd.com" crossorigin>
```

实际添加之后与添加前，后续页面的页面请求情况对比：
![https请求步骤](/assets/img/preconnectresult.png)
具体能节省多长时间这个会根据网络延迟来确定，上图只是做了一个加载顺序的表示，并且，随着网速的越来越快，这个差值的确也会越来越小。

#### prefetch
既然一个内容除了获取数据之外都能提前进行，那何不直接提前加载一个文件呢？prefetch你值得拥有。
prefetch是一个低优先级的资源加载策略，此策略允许浏览器在后点（空闲时间）获取稍后可能需要的资源，并将它们存储在浏览器缓存中。一旦页面完成加载，他就会开始下载额外资源，如果用户点击了预先获取的链接，则会立即加载内容。
如果在执行预加载策略时，如果中途出现了高优先级的请求，则预加载的线程占用会立即释放，并且会将已经加载的全部删除，已让出线程来执行当前页面的内容。

![prefetch资源加载流程](/assets/img/prefetch-1.png)

来看看代码的引入方式：
```
HTML: <link rel="prefetch" href="/uploads/images/pic.png">
HTTP Header: Link: </uploads/images/pic.png>; rel=prefetch
```
预加载类型我们可以通过as来设置,as属性为可选属性，其可以与资源上下文通信，这样用户可以优化预加载的抓取过程。
```
<link rel="prefetch" href="/uploads/images/pic.png" as="image">
HTTP Header: Link: </uploads/images/pic.png>; rel=prefetch; as=image
```
as包含的类型如下：

```
引用情况	                                  预加载类型设置
<audio> 	                                <link rel=preload as=audio href=...>
<video>	                                    <link rel=preload as=video href=...>
<track>	                                    <link rel=preload as=track href=...>
<script>, Worker's importScripts	        <link rel=preload as=script href=...>
<link rel=stylesheet>, CSS @import	        <link rel=preload as=style href=...>
CSS @font-face	                            <link rel=preload as=font href=...>
<img>, <picture>, srcset, imageset	        <link rel=preload as=image href=...>
SVG's <image>, CSS *-image	                <link rel=preload as=image href=...>
XHR, fetch	                                <link rel=preload as=fetch crossorigin href=...>
Worker, SharedWorker	                    <link rel=preload as=worker href=...>
<embed>	                                    <link rel=preload as=embed href=...>
<object>	                                <link rel=preload as=object href=...>
<iframe>, <frame>	                        <link rel=preload as=document href=...>
```
如果我们预加载的资源与执行代码页面存在跨域的话，我们需要配置跨域，crossorigin为一个配置参数,
```
<link rel="prefetch" href="//example.com/next-page.html" as="html" crossorigin="use-credentials">
```
CORS配置，详细可参考[CORS配置](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attributes)：
![CORS配置](/assets/img/cors.png)
首页我们预加载了一个base.js：
![首页提前加载base](/assets/img/prefetch-eg1.png)
进入二级页面之后，base.js直接从缓存读取，
![首页提前加载base](/assets/img/prefetch-eg2.png)




参考文献：
- W3C官方文档：[https://www.w3.org/TR/resource-hints/](https://www.w3.org/TR/resource-hints/)
- DNS原理：[http://blog.51cto.com/369369/812889](http://blog.51cto.com/369369/812889)
- CORS配置：[https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attributes](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attributes)
- Resource Hints：[https://www.keycdn.com/blog/resource-hints/](https://www.keycdn.com/blog/resource-hints/)
- Understanding prefetching and how Facebook uses prefetching：[https://www.facebook.com/business/help/1514372351922333](https://www.facebook.com/business/help/1514372351922333)










