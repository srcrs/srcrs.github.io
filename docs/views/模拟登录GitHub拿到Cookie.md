---
title: 模拟登录GitHub拿到Cookie
date: 2020-03-06
categories:
 - java
tags:
 - 爬虫
---

:::tip
爬取有些网站可能会需要登录才能有拿到某些数据的权限，所以 这次学习了一下如何登录一个网站，并且拿到Cookie，以后就可以用Cookie来登录。
:::

<!-- more -->

## 简述

其实github本身提供有一套完整的开放API，可以获取到很多的数据，完全用不着这么的麻烦，但是相对别的网站来说，可能就只有这样的方法了。

## 找到实际登录验证的地址

通常暴漏在外面的并不是真正的地址，当然要找到这个地址也并不难，只需要登录失败一次就可以了。

## 填写需要的参数

然后这个真正地址里`Form Data`有哪些参数(就是提交的的form表单)，而这些参数就是提交表单时必须要填的内容，我们填写账户名和密码就可以了，其他的还照原样。

可以用一个Map<String,String>来存储这些参数。

然后就可以登陆了，然后拿到Cookie，再次验证这个Cookie是否可以使用。以后就可以保存这个Cookie值用来登录。

```java
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.Connection.Method;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;


public class test {
	public static void main(String[] args) {
		try {
			Connection.Response rs = Jsoup.connect("https://github.com/login")
					.userAgent("Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Mobile Safari/537.36")
					.execute();
			Map<String, String> datas = new HashMap<>();
			Document d1 = Jsoup.parse(rs.body());
			List<Element> eleList = d1.select("form");//寻找form表单
			for(int i = 0; i < eleList.size(); i++) {

	            for (Element e : eleList.get(i).getAllElements()) {
	                
	                if (e.attr("name").equals("login")) {
	                    e.attr("value", "用户名");//需要修改成自己的
	                }

	                if (e.attr("name").equals("password")) {
	                    e.attr("value", "密码");//需要修改成自己的
	                }

	                if (e.attr("name").length() > 0) {
	                    datas.put(e.attr("name"), e.attr("value"));
	                }
	            }
	        }
			Connection.Response login = Jsoup.connect("https://github.com/session")
					.userAgent("Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Mobile Safari/537.36")
					.followRedirects(true)
					.ignoreContentType(true)
					.method(Method.POST)
					.data(datas)
					.cookies(rs.cookies())
					.execute();
	        Map<String, String> map = login.cookies();
	        for(String s : map.keySet()) {
	        	System.out.println(s + " : " + map.get(s));
	        }
	        //测试拿到的Cookie是否可以登录成功
	        Connection.Response response = Jsoup.connect("https://github.com/srcrs")
	        		.followRedirects(true)
					.ignoreContentType(true)
					.userAgent("Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Mobile Safari/537.36")
					.cookies(map)
					.method(Method.GET)
					.execute();
	        Map<String,String> m = response.cookies();
	        for(String s : m.keySet()) {
	        	System.out.println(s + " : " + m.get(s));
	        }
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
```