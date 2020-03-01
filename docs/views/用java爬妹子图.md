---
title: 用java爬妹子图
date: 2020-03-01
categories:
 - java
tags:
 - 爬虫
---

:::tip
以前总想着用python爬东西，网上说爬虫框架多，好用，我也没发现哪好，也许总是失败的原因。还是java好用。
:::

<!-- more -->

从很早之前就知道“爬虫”这一个单词，以前我以为只有python可以做，所以就简单学习一下python，去用一些python框架，不知是工具的原因，还是自己对于这门语言了解的不够深，用起来是一头污水，什么也没有做成功，爬取个天气预报，爬取个图片，一次也没有成功过，所以兴趣就慢慢下去了，过了段时间又提起来，然后又是郁闷生气，总是失败。

周而复始，直到昨天我才发现用java也可以爬取东西，记得上学期作业我们也用java下载东西了，但是那时候可能没有太注意。能够访问网页了，拿到数据，然后就是处理数据了，如何拿到自己想要的数据，在python中有很多框架可以实现这一操作，在java中有没有呢？这么强大的java怎么会没有呢。答案是：`Jsoup`。

它可以加访问头的一些参数，可以实现selector选择器，对于网页中想要获取的数据，只需要复制相应数据的selector路径就能拿到。

接下来我的首刀就是妹子图网站了。进入网站，首先看到的是一个个的漂亮小姐姐的写真集合，暂且可以当作`集合`，每一页有24个集合，一共有240个这样的页面，我首先得拿到每一页集合的链接，所以我创建了一个页面类，用于获取每一页集合的链接，然后保存起来。

拿到集合的链接，就要进入到这个集合中，获取每一个图片的链接，所以我又创建一个获取图片链接的类，因为每个集合的图片数不一样，我设置了一个最大值，这样虽然浪费了一些时间，但是却可以获取所有的图片的链接。

获取到图片链接之后，就需要通过这个链接下载图片了，因为这个网站的的图片链接不支持直接访问，所以我又加上了一个`Referer`的请求头参数，再设置`user-agent`参数，最后就可以成功下载了。

下载的时候可以采用多线程，这里我没有用，不知道加上之后效率会提高多少。

```java
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Main {
	public static void main(String[] args) {
		new Page("https://www.mzitu.com");
	}
}
/*
 * 获取每一页所有集合链接
 */
class Page {
	String link = "";
	ArrayList<String> url = new ArrayList<String>();
	
	public Page(String link) {
		this.link = link;
		getGather();
	}

	public void getGather() {
		for (int i = 1; i <= 1; i++) {
			try {
				Thread.sleep(1000);
				if (i != 1) {
					Document doc = Jsoup.connect(link + "/page/" + i + "/").post();
					for (int j = 1; j <= 24; j++) {
						Elements m = doc.select("#pins > li:nth-child(" + j + ") > a");
						for (Element e : m) {
							String href = e.attr("href");
							url.add(href);
						}
					}
				} else {
					Document doc = Jsoup.connect(link).get();
					for (int j = 1; j <= 24; j++) {
						Elements m = doc.select("#pins > li:nth-child(" + j + ") > a");
						for (Element e : m) {
							String href = e.attr("href");
							url.add(href);
						}
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		new Gather(url);
	}
}
/*
 * 获取每个集合内图片的链接
 */
class Gather {
	ArrayList<String> url = new ArrayList<String>();
	
	public Gather(ArrayList<String> url) {
		this.url = url;
		getImage();
	}
	
	public void getImage() {
		for (String s : url) {
			for (int i = 1; i <= 150; i++) {
				try {
					Document doc = Jsoup.connect(s + "/" + i).userAgent(
							"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Mobile Safari/537.36")
							.post();
					Elements m1 = doc.select("body > div.main > div.content > div.main-image > p > a > img");
					for (Element e : m1) {
						String src = "";
						src = e.attr("src");
						if (!("".equals(src))) {
							new downImag(src,s + "/" + i);
						}
					}
					Elements m2 = doc.select("#content > article > div:nth-child(2) > figure > p > a > img");
					for (Element e : m2) {
						String src = "";
						src = e.attr("src");
						if (!("".equals(src))) {
							new downImag(src,s + "/" + i);
						}
					}
					Thread.sleep(100);
				} catch (Exception e) {
					System.out.println("链接");
					continue;
				}
			}
		}
	}
}
/*
 * 下载图片类
 */
class downImag {
	String link = "";
	String referer = "";
	static int n=1;
	
	public downImag(String link,String referer) {
		this.link = link;
		this.referer = referer;
		down();
		link = "";
		referer = "";
	}
	
	public void down() {
		try {
			System.out.println(referer+"------>"+link);
			URL url = new URL(link);
			URLConnection response = url.openConnection();
			response.setRequestProperty("user-agent",
					"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Mobile Safari/537.36");
			response.setRequestProperty("Referer", referer);
			InputStream is = response.getInputStream();
			byte[] bs = new byte[1024];
			int len;
			String name = "D:\\Image\\" + n++ + ".jpg";
			File file = new File(name);
			FileOutputStream os = new FileOutputStream(file);
			while ((len = is.read(bs)) != -1) {
				os.write(bs, 0, len);
			}
			os.close();
			is.close();
		} catch (Exception e) {
		    e.printStackTrace();
		}
	}
}
```