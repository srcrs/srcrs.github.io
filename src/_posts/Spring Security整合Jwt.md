---
title: Spring Security整合Jwt
date: 2020-07-24
category: Note
tags:
    - web
permalink: /posts/202007241.html
---

本次基于`Spring Boot`整合了`Spring Security`和`Jwt`，可以解决前后端分离之后用户认证与授权的问题。在前后端还未分离的时候，对用户进行身份认证大约是这样的。

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="488px" viewBox="-0.5 -0.5 488 272" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2020-07-24T12:43:18.862Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36&quot; etag=&quot;QInl4yxy4vcWl_S4pYZa&quot; version=&quot;13.4.5&quot;&gt;&lt;diagram id=&quot;PQsuAjaLIpzGLL3Y-lxF&quot; name=&quot;第 1 页&quot;&gt;5VlLk5s4EP41OiYFCIQ4go2zl9RO1dTWZvaGQbapYOSS5djOr98WiJdgHpnCk5nKyXSr1bT0tb5uZIQX+8sXkRx2X3nGCuRY2QXhJXIc2/Y9+FGaa63xPVIrtiLPtFGnuM9/Mq20tPaUZ+w4MJScFzI/DJUpL0uWyoEuEYKfh2YbXgzfeki2bKS4T5NirP03z+Su1lLH7/R/sXy7a95sk6Ae2SeNsV7JcZdk/NxT4RjhheBc1k/7y4IVavOafannrR4ZbQMTrJQvmfDl238n8VD48dd/4svdclP+/WB/0l5+JMVJLxjFHgpjFIKaFOA4Wgt42qonFBNEKYr8qSEfhREKV3qt8tpsoOCnMmMqBgvszrtcsvtDkqrRM6QM6HZyX4Bkw2OyPvLiJFkoUp0KlbaTXBCPUvDvLRqwj9EmL4oFL7ioXomzhNFN2lr2RkhK2Xqj4q2XzYRkl0f3025RgvRmfM+kuIJJM6EB9tpAr+VzlyeuTvZdL0UcX9slOjW3resOPXjQAP4CmM4EmAQFC0SXU4h5iIYotN87mB6jmTsFJnXWmJB5wPTIewMTj8E00WBlFiqKAyktkuMxT4cAsEsuv/WeHxRun60Aa3l50UBWwrUn3DGRwzKY0Lr61SwbcaWxvxAeP4mUPcc4Yxx6++xZ431udIIVicx/DMOY2nv9hjueQ4AtzA42YCYGfHX4elafTA1Ho3zBeOhIJmLL5MhRlQrtsl+fHe582WENssN7OjdKCLtNKSX0Zimxm1ZJ1/nzRy+03t/3mmd2MEwPx31lnrUTr4bj+fNsqnr4KHBRSLvCrzQBiqrqES1R4I3SDjhYGnWgyLelykLAWjFKpJg6hxYr1AP7PMvU9EiwY/4zWVeuVNoc1LKqhXoR8pbK10nyY1dMZmB+bD/P/GQiU5xbEb93q6Nt02cO9wTxtwf+ExQOtY39U48d8sy5r6QbFpOXkoHzO8nANc5w+23zy0XHSNVRDj5CBpArybVnpo/VowF7ZmdLrKfjMu0DapyCOoJZKyCZpqshOdW8BZxZN7vBCsUrFEFDvJjiNhdFK9UQK42t2l/1KQR+aDXdAeMjg8PGy49PemYf5I9Jry01b8J6/gScVOEBIMHuBxEK4imAfYVrRCrMLAVbBzDYBNUQgAd+YCiobVLOv+fsw4PoeN40HfRB9N8SRDpf6Rp+sxD8536zmL0kNuF7afmwCXna0UzlwzHLFLWfjMu0x8OLrNuUj2CCb4AwgB5Id2nSXpG0FyIdl4DNEoUVAwUhoq4mlVHJ+Pg0Y8IZTNDMm3bITUCz8Mxny8UDrgnqrvZ1bXIraF/4NzfIzZX5u26QzY9c13ptg+wZTGJe79z4Vsaeuk4nqv+MwopeKApJQxS9PmXYnqjGB6hGdaQERbaikQ/PIf6wVcGYjjkEz8MhIHZ/qtTIdn9N4fh/&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:272px;"><defs/><g><rect x="1" y="1" width="46" height="270" fill="#dae8fc" stroke="#6c8ebf" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 44px; height: 1px; padding-top: 136px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">客<br />户<br />端</div></div></div></foreignObject><text x="24" y="140" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">客户端...</text></switch></g><rect x="441" y="1" width="46" height="270" fill="#d5e8d4" stroke="#82b366" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 44px; height: 1px; padding-top: 136px; margin-left: 442px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">服<br />务<br />端</div></div></div></foreignObject><text x="464" y="140" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">服务端...</text></switch></g><path d="M 47 26.11 L 434.63 24.03" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 439.88 24.01 L 432.9 27.54 L 434.63 24.03 L 432.86 20.54 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 441 136 L 53.37 136" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 48.12 136 L 55.12 132.5 L 53.37 136 L 55.12 139.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="191" y="1" width="60" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 11px; margin-left: 221px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">用户登录</div></div></div></foreignObject><text x="221" y="15" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">用户登录</text></switch></g><path d="M 441 50.95 L 411 50.99 Q 401 51 401 61 L 401 79 Q 401 89 411 89.01 L 433.62 89.02" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 438.87 89.02 L 431.87 92.52 L 433.62 89.02 L 431.87 85.52 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="211" y="61" width="190" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 71px; margin-left: 306px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">登录成功，用户信息存储session</div></div></div></foreignObject><text x="306" y="75" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">登录成功，用户信息存储session</text></switch></g><rect x="136" y="111" width="170" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 121px; margin-left: 221px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">返回登录状态，并发送cookie</div></div></div></foreignObject><text x="221" y="125" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">返回登录状态，并发送cookie</text></switch></g><path d="M 47 171.91 L 81 171.98 Q 91 172 91 182 L 91 201 Q 91 211 81 211 L 53.37 211" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 48.12 211 L 55.12 207.5 L 53.37 211 L 55.12 214.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="91" y="181" width="160" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 191px; margin-left: 171px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">将服务端发来的cookie存储</div></div></div></foreignObject><text x="171" y="195" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">将服务端发来的cookie存储</text></switch></g><path d="M 48.98 251.02 L 434.63 252.08" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 439.88 252.1 L 432.87 255.58 L 434.63 252.08 L 432.89 248.58 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="156" y="229" width="130" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 239px; margin-left: 221px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">携带cookie，发送请求</div></div></div></foreignObject><text x="221" y="243" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">携带cookie，发送请求</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

这种缺点就是身份信息需要客户端和服务器同时存储，当用户基数很大的时候，需要大量的内存来解决这个问题。

在前后端分离之后，基于`token`的用户身份认证大约是这样的。

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="488px" viewBox="-0.5 -0.5 488 242" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2020-07-24T15:22:55.832Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36&quot; etag=&quot;-_9IhnRLjmPexQ8U6cvC&quot; version=&quot;13.4.5&quot;&gt;&lt;diagram id=&quot;PQsuAjaLIpzGLL3Y-lxF&quot; name=&quot;第 1 页&quot;&gt;7Vhdb5s8FP41vlyFMRj7EhKy3UyrVE1v+95RcBJrBEeOsyT79bPBfJO2q+jUSruKfWwfOH6ePOccAFrszp9lst9+FRnLgetkZ4CWwHUhDHz9YyyXyhL4uDJsJM/sptZwx38xa3Ss9cgzduhtVELkiu/7xlQUBUtVz5ZIKU79bWuR95+6TzZsZLhLk3xs/Y9naltZiRu09i+Mb7b1kyGm1couqTfbSA7bJBOnjgnFAC2kEKoa7c4LlpvLq++lOre6stq8mGSFesmBz/f/H+VDHsRfv8fn2+W6+PYAP1kvP5P8aAMGsQ/CGITajHPtOHqUerQxIxBjQAiIgqmlAIQRCFc2VnWpL1CKY5Ex8w6O3nfacsXu9klqVk+aMtq2Vbtcz6AeJo8HkR8VC2VqqVBa25mnpwclxY8GDX2P0Zrn+ULkQpaPROs1w2na7OysZAF9dMx72LCZVOx89T5hg5KmNxM7puRFb6kP1MBaZkPPzk8tTzxL9m2HIm69L7HU3DSuW/T0wAL4B2C6E2BiQBeALKcQ8wEJQQjfOZgMZj4LpsCkOEAJngdMH783MNEYzCEarMhCI3F6lubJ4cDTPgDszNV9Z/xgcLtxKLLz5dkCWU4uncktk1yHwWRtK3RI992J9aXlwBpaZ+Xs0p0N3VWRsGwkvQO4dLTiKFP2vICpRG6Yeu6/MYa/A6/vjOGtbZLlieI/+687Bbl9wq3gOpCGXS4asAsPWFOFaU91NXzgaERThPqOqnsYOSoZ2IT9elJ685HS6ZHSc+HTpKwJCPsE9GDwGgJOcXxGUrovJOUVTfo7pIS0z6WRlL2UlM3By8Dx/KScynABoB4ISVucGAsFUZnhoiWg/oijOk+oQa7K+aYwlNVYG0ZEJptwXQaGdmHHs8wcjyQ78F/JY+nK0GZvwioD9SPgL42voxKHNuHNkJ2Q4z+bnfAEU9y3Sk7BNA79W68A0WSoKg26AvEKRLoaWYCYmgKTwHJpBShUOrUXHx4nd/iXgv4IJ4j+JlBkRsG+oQHpibZP3T+uJOZO/e9FPdEQwpeqJ8T4aUdX1FNjllw62yy/r9cgcMBNAp9WdTgdYMvG6g1mrS/ohK5oOXEAwW0r0zQuTZtSq0i5ZwlCv1SjEBCv0hXT0mpJIuVG1ySLD680sJ8RGuXpKs0U/d9MaWq6zNKw3Dge6kkNdfFsTUvV//zrWZ7pWQZVnee8tmfxB0IybH7euGeBU9+4sKlLorBUFwJCbHWiqU8aQaGAOGWhQozQmOoSgwgaFfnwEhL0JQQh8mbFip62HzorYNvPxSj+DQ==&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:242px;"><defs/><g><rect x="1" y="1" width="46" height="240" fill="#ffe6cc" stroke="#d79b00" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 44px; height: 1px; padding-top: 121px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">客<br />户<br />端</div></div></div></foreignObject><text x="24" y="125" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">客户端...</text></switch></g><rect x="441" y="1" width="46" height="240" fill="#e1d5e7" stroke="#9673a6" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 44px; height: 1px; padding-top: 121px; margin-left: 442px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">服<br />务<br />端</div></div></div></foreignObject><text x="464" y="125" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">服务端...</text></switch></g><path d="M 47 23.32 L 434.63 22.14" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 439.88 22.12 L 432.89 25.64 L 434.63 22.14 L 432.87 18.64 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 441 102.04 L 53.37 101.1" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 48.12 101.08 L 55.13 97.6 L 53.37 101.1 L 55.11 104.6 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="186" y="1" width="60" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 11px; margin-left: 216px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">用户登录</div></div></div></foreignObject><text x="216" y="15" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">用户登录</text></switch></g><rect x="171" y="76" width="130" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 86px; margin-left: 236px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">登录成功，颁发token</div></div></div></foreignObject><text x="236" y="90" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">登录成功，颁发token</text></switch></g><path d="M 45.99 143.08 L 81 142.24 Q 91 142 91 152 L 91 171 Q 91 181 81 181 L 53.37 181" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 48.12 181 L 55.12 177.5 L 53.37 181 L 55.12 184.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="96" y="151" width="150" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 161px; margin-left: 171px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">将服务端发来的token存储</div></div></div></foreignObject><text x="171" y="165" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">将服务端发来的token存储</text></switch></g><path d="M 48.98 223.24 L 434.63 224.18" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 439.88 224.2 L 432.87 227.68 L 434.63 224.18 L 432.89 220.68 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="156" y="199" width="130" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 209px; margin-left: 221px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">携带token，发送请求</div></div></div></foreignObject><text x="221" y="213" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">携带token，发送请求</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

这种好处是`token`只需要存储到客户端，服务端只需要对发来的请求中验证token的有效性。

本次便使用基于`token`的方式，结合`spring security`进行一次简单的身份认证与授权。

## 相关版本信息

名称 | 版本
-|-
IDEA商业版 | 2020.1
JDK | JDK1.8
Maven | 3.5.4
Windows | 家庭版1903

## 项目结构

```sh
.
├── .idea
├── src
│   └── main
|       ├── java
|       |   └── com
|       |       └── example
|       |           ├── controller
|       |           |   └── UserController.java
|       |           ├── filters
|       |           |   └── JwtRequestFilter.java
|       |           ├── model
|       |           |   ├── AuthenticationRequest.java
|       |           |   └── AuthenticationResponse.java
|       |           ├── security
|       |           |   ├── MyUserDetailsService.java
|       |           |   └── SecurityConfigurer.java
|       |           ├── utils
|       |           |   └── JwtUtil.java     
|       |           └── Application.java
│       └── resources
│           └── application.properties
├── test
├── target
├── pom.xml
└── security-jwt.iml 
```

## 在pom.xml添加相关jar包

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.0</version>
</dependency>
```

## 创建Application.java

这个其实就是`Spring Boot`的入口文件，名称不一样也没事，内容也没有改动。

```java
package com.example;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

## 创建SecurityConfigurer.java

这个类是`Spring Security`的配置类，`Spring Boot`提倡去掉配置文件，用配置类来代替，道理都差不多，我还是熟悉`xml`一些。

```java
package com.example.security;


import com.example.filters.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
public class SecurityConfigurer extends WebSecurityConfigurerAdapter {

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @Autowired
    JwtRequestFilter jwtRequestFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(myUserDetailsService).passwordEncoder(bCryptpasswordEncoder());
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/authenticate")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public BCryptPasswordEncoder bCryptpasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

## 创建MyUserDetailsService.java

这个类是通过传来用户的`username`，返回一个用户对象，这里为了简便没有从数据库进行查询，以后改成从数据库访问用户信息，直接在这里查询并返回一个用户就行了。

这里密码采用了`BCR`加密。


```java
package com.example.security;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyUserDetailsService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return new User("foo",new BCryptPasswordEncoder().encode("foo"),new ArrayList<>());
    }
}
```

## 创建JwtUtil.java

这个是`Jwt`的配置类，可以配置`token`的`SECRET_KEY`，到期时间等等，更重要的作用是可以生成一个`token`。

```java
package com.example.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

    private String SECRET_KEY = "secret";

    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token){
        return extractClaim(token,Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims,T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public Claims extractAllClaims(String token){
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }

    public Boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }

    public String generateToken(UserDetails userDetails){
        Map<String,Object> claims = new HashMap<>();
        return createToken(claims,userDetails.getUsername());
    }

    private String createToken(Map<String,Object> claims,String subject){
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+100*60*60*10))
                .signWith(SignatureAlgorithm.HS256,SECRET_KEY)
                .compact();
    }
    public Boolean validateToken(String token,UserDetails userDetails){
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && (!isTokenExpired(token));
    }

}
```

## 创建AuthenticationRequest.java

这个类的作用是将登录请求信息封装成一个对象，登录的对象是用户，日后添加访问数据库便有了用户类，就不再需要这个类了。

```java
package com.example.model;

public class AuthenticationRequest {
    private String username;
    private String password;

    public AuthenticationRequest() {
    }

    public AuthenticationRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
```

## 创建AuthenticationResponse.java

这个类的作用同样是将信息封装成类，只不过这次是发送出去，即响应请求，我觉得封装成一个`Map`要更好一点，省的多创建一个类。

```java
package com.example.model;

public class AuthenticationResponse {
    private final String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }
}
```

## 创建JwtRequestFilter.java

这个类检查`token`是否有效，继承了`OncePerRequestFilter`类，简单翻译为一次请求的过滤链，也就是说，每次请求都需要这条过滤链的验证，通过了就可以放行，不通过就干掉。

仅仅写此类还是没有作用的，还需要添加到`Spring Security`的过滤链中，具体是这个方法`http.addFilterBefore()`，这个应该改是在`Security`之前，也有添加到之后的方法，具体有四个相应的方法。我知道自己写的过滤链需要添加上，为什么后面要加一个`class`类，不太明白。

```java
http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
```

## 创建HelloResource.java

这个类就没啥说的了，接收和响应用户的请求。

```java
package com.example.controller;

import com.example.security.MyUserDetailsService;
import com.example.model.AuthenticationRequest;
import com.example.model.AuthenticationResponse;
import com.example.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
public class HelloResource {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @RequestMapping("/hello")
    public String hello() {
        return "Hello World";
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authenticationRequest.getUsername(),
                            authenticationRequest.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password",e);
        }
        final UserDetails userDetails = myUserDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}
```

## 测试

至此，已经完成了完成了所有的代码，现在进行测试。推荐使用`postman`。

首先访问`/authenticate`接口，获取到`token`，然后携带`token`访问`/hello`获取到正确的信息。

注意一下，下面的接口路径需要自己添加前缀`http://localhost:8080/`，根据自己实际情况修改。

### 登录验证接口

- 请求路径：authenticate
- 请求方法：post
- 请求参数

| 参数名   | 参数说明 | 备注     |
| -------- | -------- | -------- |
| username | 用户名   | 不能为空 |
| password | 密码     | 不能为空 |

- 请求头

| 参数名   | 值 | 备注     |
| -------- | -------- | -------- |
| content-type | application/json   | header |

- 响应参数

参数名 | 参数说明 | 备注 
 -|-|- 
jwt | 令牌 | 基于 jwt 的令牌 |

- 响应数据

```json
{
    "jwt": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTU2MDQ5NTIsImlhdCI6MTU5NTYwMTM1Mn0.Lk1v9FUCNLlnYmZzEFIcMB9nYPcQgYCoxv2Mg_jklpo"
}
```

### 携带token获取信息

- 请求路径：hello
- 请求方法：get
- 请求参数

- 请求头

| 参数名   | 值 | 备注     |
| -------- | -------- | -------- |
| content-type | application/json   | header |
| Authorization | Bearer + 获取到的token   | header |

`Bearer`和`token`之间有空格。获取到的`token`也就是上面获取到的`jwt`的值。

- 响应参数

- 响应数据

```json
Hello World
```

## 项目源码

项目源码地址：https://github.com/srcrs/security-jwt ，或者[点我](https://github.com/srcrs/security-jwt)

## 参考链接

[security-jwt整合视频教程](https://www.bilibili.com/video/BV1jz411b7cn)

[token与cookie的比较](https://www.cnblogs.com/hooo-1102/p/12048996.html)