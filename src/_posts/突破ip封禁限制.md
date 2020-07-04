---
title: 突破ip封禁限制
date: 2020-03-02
category: Java
tags:
 - 爬虫
permalink: /posts/202003021.html
---

:::tip
昨天感觉也没爬多少东西，就被网站把ip给封锁了，搞得浏览器都看不了这个网站了，所以今天就来突破ip封禁限制。
:::

<!-- more -->

首先可以百度一个免费ip代理的网站，然后用爬虫爬取页面的代理ip，并验证ip的可用性。维护一个可用的代理池，每次访问网站可随机选择一个ip使用。

但是免费的ip是真的不好用啊。

并且这次将user-Agent伪装分离了，单独作为一个类，里面有10来个，也是每次随机选择一个使用。

```java
class isok {
	String ip;
	int port;

	public isok(String ip, int port) {
		this.port = port;
		this.ip = ip;
	}

	public void run() {
		try {
			Document doc = Jsoup.connect("https://www.qq.com")
					.proxy(ip, port)
					.get();
			System.out.println(ip + ":" + port + "---->成功");
			new Proxy().addProxy(ip, port);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(ip + ":" + port + "---->失败");
		}
	}
}
```

这个类用于验证ip是否可以使用，如果加上代理可以正确访问网站，就认为是可用的，然后进入代理池，使用。