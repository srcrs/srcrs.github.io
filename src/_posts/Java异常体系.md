---
title: Java异常体系
date: 2021-01-24
category: Java
tags:
   - java
permalink: /posts/202101241.html
---

`Java`语言的特点有不下十种，例如：面向对象、安全性、健壮性、可移植性性等等，其中`Java`的异常体系保证了`Java`语言的健壮性。

## Java异常体系图

`Java`万物皆对象，`Throwable`类自然继承自`Object`类。

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="342px" viewBox="-0.5 -0.5 342 292" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2021-01-24T15:11:40.828Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36&quot; etag=&quot;CcVsASHI-EhgO4yfnkSF&quot; version=&quot;14.2.7&quot; type=&quot;github&quot;&gt;&lt;diagram id=&quot;-5FnswEyZhYWoZyXn878&quot; name=&quot;第 1 页&quot;&gt;7Vhdb9sgFP01PG6ywU7ixzrxMlWaNK37aB+ZfRuj2MbCpEn66wcBf7dKs25NHipFEfcAF+65R+YCIvN8txS0TL/wBDKEnWSHyAJhHEwn6l8DewNMsGeAlWCJgdwWuGGPYEHHohuWQNUbKDnPJCv7YMyLAmLZw6gQfNsfds+z/qolXcEIuIlpNkZ/sUSmBp3haYt/BrZK65XdSWB6cloPtpFUKU34tgORCJG54FyaVr6bQ6a5q3kx8z4909tsTEAhXzJhGi0hmfy8/lHmS+7H3u12sf5gw3ig2cYG/D1VpNHfKn6za7mvqRB8UySgvbmIhNuUSbgpaax7tyr3CktlntnuSgq+bihTwYZ2JRASds+G4DbEKEEBz0GKvRpiJ+CJ5dKKaWrNbSczFko7SSEWo1YLq8ZxS5dqWMZOYG82Yi9SkhMXyJw76zPX2OeiLhhTt4uhlIwXF0gf8S6Mvvrz2OHv26aQLIdLphEPaMTBmEYXvymP7ojHeQrxGpJL5tFzLo5HPOJxxBsUyZU+kZUVZ7SqWHyMKtgxeavazkffWnd2rG4vNBtObexro1DxdCZp867b1047WPU8s11IRuXAICkqJL4RMRw/VCUVK5DHjo9xkjtJ9J/IYY0JyKhkD/3tPpVYu8JXzlQgrYaGnzRnoA0Tpp3VrSuGjoK+I3/gx9Aw8nOQWRP1K5RH3pV3svKCcyqPDKo4d6iYFyvPPSLh/y097116w4LuqPRcB51Re950cHL+rfZ8PHD01trz37V3uvaeKavOc+I2t9nXnrjNY8lbaW8y0t41faAo8lE4RzN8aMz0L/JQuEABQdEUhQSFoW5cRUjdldSYIERhNFKtKotlX6c0Y6tCi1gJA4QCdPHMYppd2Y6cJYmeHgqo2OPh8cJorNQUHEjxQ+QvtK+N5JV5ZdKu73kh7aOT6/+jSw7pZ6e5O3aLc+8JmeHTi3Nltg9IJr3tKxyJ/gA=&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;page=0&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:292px;"><defs/><g><rect x="81" y="1" width="80" height="30" rx="4.5" ry="4.5" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 78px; height: 1px; padding-top: 16px; margin-left: 82px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Throwable</div></div></div></foreignObject><text x="121" y="20" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Throwable</text></switch></g><rect x="1" y="111" width="80" height="30" rx="4.5" ry="4.5" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 78px; height: 1px; padding-top: 126px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Error</div></div></div></foreignObject><text x="41" y="130" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Error</text></switch></g><rect x="161" y="111" width="80" height="30" rx="4.5" ry="4.5" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 78px; height: 1px; padding-top: 126px; margin-left: 162px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Exception</div></div></div></foreignObject><text x="201" y="130" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Exception</text></switch></g><rect x="61" y="221" width="120" height="30" rx="4.5" ry="4.5" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 236px; margin-left: 62px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">RuntimeException</div></div></div></foreignObject><text x="121" y="240" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">RuntimeException</text></switch></g><rect x="221" y="221" width="120" height="30" rx="4.5" ry="4.5" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 236px; margin-left: 222px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">CheckedException</div></div></div></foreignObject><text x="281" y="240" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">CheckedException</text></switch></g><path d="M 121 31 L 46.82 105.18" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 42.58 109.42 L 45.41 100.93 L 46.82 105.18 L 51.07 106.59 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 121 31 L 195.18 105.18" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 199.42 109.42 L 190.93 106.59 L 195.18 105.18 L 196.59 100.93 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 201 141 L 126.82 215.18" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 122.58 219.42 L 125.41 210.93 L 126.82 215.18 L 131.07 216.59 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 201 141 L 275.18 215.18" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 279.42 219.42 L 270.93 216.59 L 275.18 215.18 L 276.59 210.93 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="51" y="271" width="140" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 281px; margin-left: 121px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">Java异常体系简图</div></div></div></foreignObject><text x="121" y="286" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">Java异常体系简图</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

## Error异常

`Throwable`分为`Error`和`Exception`，`Error`通常指的是`JVM`的错误，导致这类错误，通常是我们自身代码写的有问题，并且这类错误，我们并不能够进行异常处理，有如下几种：

+ `StackOverError`(栈内存溢出异常)

递归无出口，将会导致栈爆满。

+ `OutOfMemoryError`(堆内存溢出异常)

无限创建对象时，将会导致堆爆满。

还有一种说法叫做内存泄漏，是指创建的对象既没有被使用，也没有被回收的情况。

## RuntimeException异常

`Exception`即运行时异常，可以进行捕捉并进行处理，包含两种异常，其中`RuntimeException`被称为运行时异常，又被叫做逻辑异常，通常是由于代码的逻辑写的不够严谨导致，有如下几种：

+ `ArrayIndexOutOfBoundsException`(数组越界异常)

```java
int[] a = new int[3];
System.out.println(a[4]);
```

+ `NullPointerException`(空指针异常)

```java
String s = null;
System.out.println(s.toString());
```

+ `ClassCastException`(类型转换异常)

```java
String str = new Integer(1);
```

+ `ArithmeticException`(算数异常)

```java
int a = 3/0;
```

+ `NumberFormatException`(数字格式异常)

```java
int a = Integer.parseInt("3f");
```

## CheckedException异常

`CheckedException`异常又被叫做非运行时异常，导致此错误的原因并不是代码逻辑的错误，而是由于一些外部原因导致，例如要读取的文件并不存在，有如下几种：

+ `IOException`(输入输出异常)

在读写文件时。

+ `SQLException`(数据库异常)

执行SQL方法时。

+ `FileNotFoundException`(文件未发现异常)

在读文件路径时,通常是找不到“拒绝访问”和“找不到指定路径”。

+ `NoSuchFiledException`(无此成员异常)

在反射获取类成员信息时。

+ `NoSuchMethodException`(无此方法异常)

方法不存在或不可访问。