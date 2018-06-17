---
title: Markdown语法大全
date: {{ date }}
author:
tags:
categories:
    - 技术仓库
thumbnail:
blogexcerpt: markdown 基本预发汇总

---
jekyll博客采用markdown语法来编写，的确方便了很多，但是mark语法大家熟悉吗？一下列举了部分常用的语法写法

## 文字部分

# 一级文字
## 二级文字
### 三级文字
#### 四级文字
##### 五级文字
###### 六级文字

## 分割线
---

## 强调文字
***我是强调文字***
## 图片

![我是图片的Alt](/assets/img/cry.jpg)

## 链接

[我是本页打开的链接](http://www.jd.com)

<a target="_blank" href="//www.jd.com">我是新页签打开的链接</a>

## 序列

- 我是第一项
- 我是第二项
- 我是第三项

## 提示文
> 我是提示语言，这么做我们变成一个斜体文字了

## 模块语言

    前面加一个tab，我就变成模块语言，这么做我就单独飞出来了

## 代码块
```
componentWillMount() {
    this.height = window.screen.height;
}
```

> 待后续继续补充