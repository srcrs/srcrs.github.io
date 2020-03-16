---
title: Selenium+部署到服务器
date: 2020-03-16
categories:
 - java
tags:
 - 爬虫
---

:::tip
jsoup不能实现较好得交互性，所以常常要找实际请求的地址，而Selenium则方便多了，可以调用浏览器，恰好chrome有无界面版的，可以在服务器运行。顺便实现了一下提交xgzbd填报。
:::

<!-- more -->

Selenium可以调用本地的浏览器，实现类似于脚本的功能，用代码来操纵浏览器，服务器不支持GUI界面，chrome恰好又有无界面的版本，完美之作，可以在服务器愉快的运行爬虫了。

## 服务器环境部署

由于我还没有服务器，所以使用的是github actions，我在这里是成功的，服务器应该更不用说吧。

### 下载chrome

这里要下载linux版的chrome浏览器

下载地址：[点我](http://www.ubuntuchrome.com/)

然后需要将下载好的deb包上传到服务器中。

我是下载了之后上传到github仓库中，当github actions需要使用的时候，直接从仓库下载就行了(本地从仓库下载可能会有点慢)。

### 安装chrome

```yml
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

### 安装对应依赖

```yml
sudo apt-get -f install
```

### 下载对应的chromedriver

下载地址：[点我](http://chromedriver.storage.googleapis.com/index.html)

这里需要注意一下，你下载的chrome浏览器是什么版本，就要对应下载chromedriver，chrome版本信息在安装的时候会有。

例如

```yml
chrome版本是80.0.3987.132-1
则chromedriver版本也得是80.0.3987.x
```

如果能找到一样的版本就使用一样的，找不到就找.x，就找相近的版本。

然后将下载的zip包上传到服务器中。

### 解压chromedriver

```yml
unzip chromedriver_linux64.zip
```

到这里环境就已经搭建完了，接下来就是写代码了。

## xgzbd自动提交

这里由于我只使用了一些简单的方法，就不介绍Selenium怎么使用，可以参考下方`[2]`

+ 首先创建一个maven工程，然后在pom.xml中引入Selenium的jar包

```xml
<!-- https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java -->
<dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>3.141.59</version>
</dependency>
```

实现代码

```java
//设置无头模式
ChromeOptions chromeOptions=new ChromeOptions();
chromeOptions.setHeadless(Boolean.TRUE);
//指定chromedriver的位置
System.setProperty("chromedriver", "chromedriver");
//如果不采用无界面模式则不需要使用chromeOptions参数
//这句话相当于创建了一个窗口
WebDriver driver = new ChromeDriver(chromeOptions);
//访问链接
driver.get("http://jktb.haedu.gov.cn/?ext=fX93MD81Pi82fXV7OSQ=&rn=1194639372");
//寻找界面元素然后点击
driver.findElement(By.xpath("/html/body/ul/li[1]")).click();
Thread.sleep(1000);
driver.findElement(By.xpath("//*[@id=\"my-form\"]/div[1]/div/button")).click();
Thread.sleep(1000);
WebElement mobile = driver.findElement(By.name("mobile"));
mobile.sendKeys("用户名");
WebElement idCard = driver.findElement(By.name("idCard"));
idCard.sendKeys("密码");
Thread.sleep(1000);
driver.findElement(By.xpath("//*[@id=\"my-form\"]/div[4]/div/div/div/button")).click();
Thread.sleep(1000);
driver.findElement(By.xpath("/html/body/ul/li[1]")).click();
Thread.sleep(1000);
/*
选择相应省份
 */
for(int i=1;i<=21;i++){
    driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div[2]/div[2]/div/div[2]/div[1]/ul/li["+i+"]")).click();
}
/*
选择相应市
 */
for(int i=1;i<=5;i++){
    driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div[2]/div[2]/div/div[2]/div[2]/ul/li["+i+"]")).click();
}
/*
选择区或者县
 */
for(int i=1;i<=1;i++){
    driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div[2]/div[2]/div/div[2]/div[3]/ul/li["+i+"]")).click();
}
Thread.sleep(1000);
driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div[2]/div[2]/div/div[1]/button[2]")).click();
Thread.sleep(1000);
driver.findElement(By.xpath("//*[@id=\"app\"]/div[1]/div/div[16]/button")).click();
Thread.sleep(2000);
driver.close();
```

需要做异常处理。

开始的问题是，点击提交就是提交不了，最后发现，它这个填写好像是根据第一次填写就有的，有点不像是ip定位，所以我就手动更改地址。最后就可以提交了。
也可以把gitee的自动部署改成这样的了。

参考链接：

```md
[1]:https://www.zhihu.com/tardis/sogou/art/59297024
[2]:https://www.jianshu.com/p/20526e2ac3b1
```

