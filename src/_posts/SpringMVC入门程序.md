---
title: SpringMVC入门程序
date: 2020-04-24
category: Note
tags:
    - spring
---

## SpringMVC在三层架构的位置

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="772px" viewBox="-0.5 -0.5 772 362" content="&lt;mxfile host=&quot;Chrome&quot; modified=&quot;2020-04-24T09:37:17.368Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36&quot; etag=&quot;05Oik4JFdx3nocGSpXdy&quot; version=&quot;13.0.0&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;KMxC7J5TO2hK7lTB8quv&quot; name=&quot;第 1 页&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://app.diagrams.net/?client=1&amp;lightbox=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:362px;"><defs/><g><rect x="101" y="1" width="190" height="360" rx="7" ry="7" fill="#d5e8d4" stroke="#82b366" stroke-width="2" pointer-events="none"/><rect x="291" y="1" width="190" height="360" rx="7" ry="7" fill="#dae8fc" stroke="#6c8ebf" stroke-width="2" pointer-events="none"/><rect x="481" y="1" width="190" height="360" rx="7" ry="7" fill="#ffe6cc" stroke="#d79b00" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 31px; margin-left: 196px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; "><b><font style="font-size: 20px">表现层</font></b></div></div></div></foreignObject><text x="196" y="35" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">表现层</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 31px; margin-left: 386px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; font-weight: bold; white-space: nowrap; ">业务层</div></div></div></foreignObject><text x="386" y="37" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle" font-weight="bold">业务层</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 31px; margin-left: 576px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; font-weight: bold; white-space: nowrap; ">持久层</div></div></div></foreignObject><text x="576" y="37" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle" font-weight="bold">持久层</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 61px; margin-left: 196px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">SpringMVC</div></div></div></foreignObject><text x="196" y="67" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">SpringMVC</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 61px; margin-left: 386px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">Spring</div></div></div></foreignObject><text x="386" y="67" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">Spring</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 61px; margin-left: 576px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">MyBatis</div></div></div></foreignObject><text x="576" y="67" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">MyBatis</text></switch></g><rect x="1" y="131" width="60" height="50" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 156px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; "><font style="font-size: 12px">浏览器</font></div></div></div></foreignObject><text x="31" y="162" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">浏览器</text></switch></g><rect x="146" y="121" width="100" height="70" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 98px; height: 1px; padding-top: 156px; margin-left: 147px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; "><font style="font-size: 12px">Servlet,控制器</font></div></div></div></foreignObject><text x="196" y="162" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">Servlet,控制器</text></switch></g><rect x="336" y="121" width="100" height="70" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 98px; height: 1px; padding-top: 156px; margin-left: 337px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; "><font style="font-size: 12px">Service,业务逻辑处理</font></div></div></div></foreignObject><text x="386" y="162" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">Service,业务逻辑处理</text></switch></g><rect x="526" y="121" width="100" height="70" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 98px; height: 1px; padding-top: 156px; margin-left: 527px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; "><span style="font-size: 12px">DAO,数据访问层</span></div></div></div></foreignObject><text x="576" y="162" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">DAO,数据访问层</text></switch></g><rect x="711" y="131" width="60" height="50" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 156px; margin-left: 712px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; "><font style="font-size: 12px">数据库</font></div></div></div></foreignObject><text x="741" y="162" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">数据库</text></switch></g><rect x="348.5" y="271" width="75" height="60" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 73px; height: 1px; padding-top: 301px; margin-left: 350px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; "><font style="font-size: 12px">JavaBean,<br />数据模型</font></div></div></div></foreignObject><text x="386" y="307" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">JavaBean...</text></switch></g><rect x="161" y="266" width="70" height="60" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 68px; height: 1px; padding-top: 296px; margin-left: 162px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; "><font style="font-size: 12px">JSP,视图</font></div></div></div></foreignObject><text x="196" y="302" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">JSP,视图</text></switch></g><path d="M 61 156 L 139.63 156" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 144.88 156 L 137.88 159.5 L 139.63 156 L 137.88 152.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 246 138.5 L 329.63 138.5" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 334.88 138.5 L 327.88 142 L 329.63 138.5 L 327.88 135 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 436 138.5 L 519.63 138.5" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 524.88 138.5 L 517.88 142 L 519.63 138.5 L 517.88 135 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 626 138.5 L 704.64 143.13" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 709.88 143.43 L 702.69 146.52 L 704.64 143.13 L 703.1 139.53 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 711 168.5 L 632.36 173.13" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 627.12 173.43 L 633.9 169.53 L 632.36 173.13 L 634.31 176.52 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 526 173.5 L 442.37 173.5" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 437.12 173.5 L 444.12 170 L 442.37 173.5 L 444.12 177 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 336 173.5 L 252.37 173.5" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 247.12 173.5 L 254.12 170 L 252.37 173.5 L 254.12 177 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 423.5 286 L 545.89 194.8" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 550.1 191.67 L 546.58 198.66 L 545.89 194.8 L 542.4 193.04 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 601 191 L 428.71 312.33" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 424.41 315.36 L 428.12 308.46 L 428.71 312.33 L 432.15 314.19 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 196 191 L 196 259.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 196 264.88 L 192.5 257.88 L 196 259.63 L 199.5 257.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 411 191 L 405.25 264.65" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 404.84 269.89 L 401.89 262.63 L 405.25 264.65 L 408.87 263.18 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 367.25 271 L 361.5 197.35" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 361.09 192.11 L 365.12 198.82 L 361.5 197.35 L 358.14 199.37 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 221 191 L 343.68 296.84" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 347.65 300.27 L 340.07 298.35 L 343.68 296.84 L 344.64 293.05 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 161 296 L 35.77 185.22" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 31.84 181.74 L 39.4 183.76 L 35.77 185.22 L 34.76 189 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><rect x="256" y="76" width="70" height="30" fill="#f8cecc" stroke="#b85450" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 91px; margin-left: 291px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; "><font style="font-size: 15px">Service</font></div></div></div></foreignObject><text x="291" y="97" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">Service</text></switch></g><rect x="461" y="76" width="40" height="30" fill="#e1d5e7" stroke="#9673a6" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 91px; margin-left: 481px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 20px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; "><font style="font-size: 15px">Dao</font></div></div></div></foreignObject><text x="481" y="97" fill="#000000" font-family="Helvetica" font-size="20px" text-anchor="middle">Dao</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

## SpringMVC基于组件方式执行流程

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="708px" viewBox="-0.5 -0.5 708 522" content="&lt;mxfile host=&quot;Chrome&quot; modified=&quot;2020-04-24T08:49:48.787Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36&quot; etag=&quot;1kR3IFuiQVH8u0BUSVJD&quot; version=&quot;13.0.0&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;KMxC7J5TO2hK7lTB8quv&quot; name=&quot;第 1 页&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://app.diagrams.net/?client=1&amp;lightbox=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:522px;"><defs/><g><rect x="1" y="262" width="70" height="40" rx="6" ry="6" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 68px; height: 1px; padding-top: 282px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; ">浏览器</div></div></div></foreignObject><text x="36" y="286" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">浏览器</text></switch></g><rect x="252" y="249.5" width="140" height="65" rx="9.75" ry="9.75" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 138px; height: 1px; padding-top: 282px; margin-left: 253px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; ">前端控制器<br />DIspatcherServlet<br />接受用户请求响应</div></div></div></foreignObject><text x="322" y="286" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">前端控制器DIspatcherServlet...</text></switch></g><rect x="552" y="257" width="110" height="50" rx="7.5" ry="7.5" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 108px; height: 1px; padding-top: 282px; margin-left: 553px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; ">处理器映射器<br />HandlerMapping</div></div></div></foreignObject><text x="607" y="286" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">处理器映射器&#xa;HandlerMapping</text></switch></g><rect x="262" y="451" width="120" height="60" rx="9" ry="9" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 481px; margin-left: 263px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; ">处理器适配器<br />HandlerAdapter<br />执行Handler</div></div></div></foreignObject><text x="322" y="485" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">处理器适配器HandlerAdapter...</text></switch></g><rect x="561" y="446" width="146" height="70" rx="10.5" ry="10.5" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 144px; height: 1px; padding-top: 481px; margin-left: 562px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; ">Handler处理器平常也叫做Controller</div></div></div></foreignObject><text x="634" y="485" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Handler处理器平常也叫做Controller</text></switch></g><path d="M 71 272 L 245.64 265.97" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 250.88 265.79 L 244.01 269.53 L 245.64 265.97 L 243.77 262.53 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 392 265.75 L 545.63 269.35" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 550.88 269.47 L 543.8 272.81 L 545.63 269.35 L 543.97 265.81 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 552 294.5 L 398.37 298.1" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 393.12 298.22 L 400.03 294.56 L 398.37 298.1 L 400.2 301.56 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 252 298.25 L 77.36 292.22" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 72.12 292.04 L 79.23 288.78 L 77.36 292.22 L 78.99 295.78 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 357 314.5 L 352.23 444.64" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 352.04 449.88 L 348.8 442.76 L 352.23 444.64 L 355.79 443.02 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 292 451 L 287.23 320.86" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 287.04 315.62 L 290.79 322.48 L 287.23 320.86 L 283.8 322.74 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 382 496 L 554.63 498.41" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 559.88 498.48 L 552.83 501.89 L 554.63 498.41 L 552.93 494.89 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 561 463.5 L 388.37 465.91" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 383.12 465.98 L 390.07 462.39 L 388.37 465.91 L 390.17 469.39 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 252px; margin-left: 139px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">1.Request请求</div></div></div></foreignObject><text x="139" y="256" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">1.Request请求</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 247px; margin-left: 470px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">2.请求查找Handler</div></div></div></foreignObject><text x="470" y="251" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">2.请求查找Handler</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 317px; margin-left: 470px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">3.返回一个执行链</div></div></div></foreignObject><text x="470" y="321" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">3.返回一个执行链</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 391px; margin-left: 381px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">4.<br />请求<br />适配<br />器执<br />行</div></div></div></foreignObject><text x="381" y="395" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">4....</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 511px; margin-left: 466px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">5.执行</div></div></div></foreignObject><text x="466" y="515" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">5.执行</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 441px; margin-left: 475px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">6.返回ModelAndView</div></div></div></foreignObject><text x="475" y="445" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">6.返回ModelAndView</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 381px; margin-left: 256px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">7.<br />返回<br />Modle<br />And<br />View</div></div></div></foreignObject><text x="256" y="385" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">7....</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 166px; margin-left: 311px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">8.<br />请求<br />进行<br />视图<br />解析</div></div></div></foreignObject><text x="311" y="170" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">8....</text></switch></g><rect x="311" y="1" width="90" height="100" rx="13.5" ry="13.5" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 88px; height: 1px; padding-top: 51px; margin-left: 312px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; ">视图解析器<br />ViewResolver</div></div></div></foreignObject><text x="356" y="55" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">视图解析器&#xa;ViewResolver</text></switch></g><rect x="221" y="1" width="70" height="100" rx="10.5" ry="10.5" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 68px; height: 1px; padding-top: 51px; margin-left: 222px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal; ">视图<br />jsp<br />Freemarker<br />Excel<br />Pdf</div></div></div></foreignObject><text x="256" y="55" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">视图jsp...</text></switch></g><path d="M 378.5 101 L 381.9 240.66" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 382.03 245.91 L 378.36 239 L 381.9 240.66 L 385.36 238.83 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 333.48 249.5 L 333.5 107.37" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 333.5 102.12 L 337 109.12 L 333.5 107.37 L 330 109.12 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 166px; margin-left: 402px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">9.<br />返回<br />View</div></div></div></foreignObject><text x="402" y="170" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">9....</text></switch></g><path d="M 273.5 101 L 271.15 241.64" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 271.06 246.89 L 267.68 239.83 L 271.15 241.64 L 274.68 239.95 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 166px; margin-left: 239px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">10.<br />视图渲染<br />将模型数<br />据填充到<br />Request域</div></div></div></foreignObject><text x="239" y="170" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">10....</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 312px; margin-left: 149px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">11.Response响应</div></div></div></foreignObject><text x="149" y="316" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">11.Response响应</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

## 入门程序编写

要求，通过超链接从一个页面跳转到另一个页面

1.首先需要安装好tomcat，IDEA商业版（[破解的jar包内带教程](https://srcrs.lanzous.com/ibtbrbe)），maven。

2.在IDEA中创建一个maven版的web项目

此时项目目录结构为

```project
.
├── .idea
├── src
│   └── main
│       └── webapp
│           ├── WEB-INF
│           │   └── web.xml
│           └── index.jsp 
├── target
├── pom.xml
└── SpringMVC.iml 
```

3.在main目录中创建java文件夹和resources文件夹，在java中可以存放写的业务代码，在resources文件夹中可以存放静态资源文件。

```project
.
├── .idea
├── src
│   ├── main
|   ├── java
|   |   └── cn
|   |       └── demo
|   |           └── controller
|   |               └── Hello.java
|   ├── resources
|   |   └── springmvc.xml
│   └── webapp
│       ├── WEB-INF
|       |   ├── pages
|       |   |   └── success.jsp
│       │   └── web.xml
│       └── index.jsp 
├── target
├── pom.xml
└── SpringMVC.iml 
```

创建这么多的文件夹与文件

### pom.xml

```xml
<!-- 版本统一，在properties标签中添加如下内容-->
<properties>
  <spring.version>5.2.4.RELEASE</spring.version>
</properties>
<!-- 在dependencies添加相应jar包的依赖-->
<!-- https://mvnrepository.com/artifact/org.springframework/spring-web -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>${spring.version}</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.springframework/spring-webmvc -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>${spring.version}</version>
</dependency>

<!-- https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>4.0.1</version>
    <scope>provided</scope>
</dependency>

<!-- https://mvnrepository.com/artifact/javax.servlet.jsp/javax.servlet.jsp-api -->
<dependency>
    <groupId>javax.servlet.jsp</groupId>
    <artifactId>javax.servlet.jsp-api</artifactId>
    <version>2.3.1</version>
    <scope>provided</scope>
</dependency>

<!-- https://mvnrepository.com/artifact/org.springframework/spring-context -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>${spring.version}</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.springframework/spring-core -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>${spring.version}</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.springframework/spring-beans -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-beans</artifactId>
    <version>${spring.version}</version>
</dependency>
```

SpringMVC只是Spring的一个模块，还得需要Spring的支持，其次web，mvc，jsp，servlet包都需要加上。

### Hello.java

这是一段简单的业务代码。

```java
@Controller
@RequestMapping(path = "/hello")
public class Hello {

    @RequestMapping(path = "/sayhello")
    public String sayHello() {
        System.out.println("Hello World");
        System.out.println("你好");
        return "success";
    }

}
```

:::tip
@Controller 将Hello类交给Spring管理

@RequestMapping(path = "/hello") 映射路径，可以访问到这个类。

@RequestMapping(path = "/sayhello") 映射路径，可以访问到这个方法。
:::

+ 注解如何生效？

在Spring中如果想使用注解，让Spring管理对象，得需要一个xml得配置项，这里得自己创建。

+ 方法如何被执行？

+ 如何知道有success.jsp?并跳转到它？

这就得需要视图解析器了。

### springmvc.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/mvc
       http://www.springframework.org/schema/mvc/spring-mvc.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd">

    <!-- 开启注解扫描 -->
    <context:component-scan base-package="cn.demo.controller"/>

    <!-- 视图解析器对象-->
    <bean id="internalResourceViewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/pages/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

    <!-- 开启SpringMVC注解支持 -->
    <mvc:annotation-driven/>

</beans>
```

注解扫描，后面的`cn.demo.controller`是扫描的范围，只有在这个范围内写了注解才能被解析到。

视图解析器，可以找到相应的jsp文件。

### web.xml

看前面的SpringMVC组件执行流程，浏览器首先就应该改和前端控制器打交道，前端控制器也是首脑。入口是Servlet。

```xml
<!-- 前端控制器 -->
  <servlet>
    <servlet-name>dispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <!-- 将xml配置文件加载进来 -->
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:springmvc.xml</param-value>
    </init-param>
    <!-- Servlet默认第一次发请求时创建，修改为启动即被创建 -->
    <load-on-startup>1</load-on-startup>
  </servlet>
  <!-- 在任何路径的请求都将被Servlet拦截 -->
  <servlet-mapping>
    <servlet-name>dispatcherServlet</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>
```

### index.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>

   <h2>首页</h2>
   <a href="hello/sayhello">入门</a>

</body>
</html>
```

点击入门将触发Hello类中的sayhello方法。

### success.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
   <h3>成功！！！</h3>
</body>
</html>
```

跳转成功后的页面。

下面配置好tomcat就可以正常运行了。

## 解决IDEA控制台中文乱码

在`IDEA`控制台中，`Tomcat`打印的`log`中文是乱码，看到控制台就是`UTF-8`格式，`Tomcat`默认也是`UTF-8`格式，不知道为啥，最后打开`Tomcat`的安装目录中`\conf\logging.properties`文件，找到`java.util.logging.ConsoleHandler.encoding = UTF-8`，将其后面的`UTF-8`修改为`GBK`即可。

## 后话

整体的思路就是，在pom.xml中配置好所需要jar包，，然后在web.xml中配置前端控制器（DispatcherServlet），创建业务类，交给Spring管理，注解如何生效？创建Spring的xml配置，通过context:component-scan扫描所在范围内的java文件中的注解，使Spring可以管理这个类，@RequestMapping可以映射到相应的方法使之执行。跳转页面，方法返回一个字符串，视图解析器就可以根据这个字符串找到相应的jsp文件，但是需要指定这个jsp文件在哪里。

## 参考链接

[idea tomcat控制台乱码问题，终于解决了](https://blog.csdn.net/wimxv/article/details/105547820)

[SpringMVC课程](https://www.bilibili.com/video/BV1Sb411s7qa?)