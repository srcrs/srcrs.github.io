---
title: MATLAB画图入门
date: 2019-08-10 12:57:48
tags: 
    - 画图
categories:
          - Other
---
由于数学建模的需要，就来学习一下怎么使用`MATLAB`进行画图。发现用它画的图还挺好看的，二维图形，三维图形，它都能够胜任，而且很美观，下面就是关于一些常见的图形应该怎么画。<!--more-->

## 二维平面图

首先，在做每一个图像之前都要运行一下`close all`,这个可以关闭所有的图形窗口。
x=linspace(a,b,N);
x为变量的名称，linspace是均分计算指令，会将区间`[a,b]`均分成N个部分，形成一个等差数列，对变量x进行赋值。
然后接下来就要写函数方程，例如`y=sin(x)`,又增加了一个变量y，当x变化时，y也会随之而变化。


接下来就要使用`plot`这个函数，`plot`是`MATLAB`中一维曲线函数，再把之前的变量放入到`plot`中就可以绘制成一个二维图，例如:`plot(x,y)`;

在[0,2*pi]中画一个sin(x)的图像

```yaml
x=linspace(0,2*pi,100);
y=sin(x);
plot(x,y);
```

在plot中，我们还可以定义曲线的颜色，线型等属性，`plot(x,y,'填写线型、标记符、颜色')`

线型|说明|标记符|说明|颜色|说明
-|-|-|-|-|-
-|实线|+|加号符|r|红色
--|双划线|o|空心圆|g|绿色
：|虚线|*|星号|b|蓝色
-.|点划线|.|实心圆|c|青绿色
 | |x|叉号符|m|洋红色
 | |s|正方形|y|黄色
 | |d|菱形|k|黑色
 | |^|上三角|w|白色
 | |v|下三角| |  
 | |<|左三角| | 
 | |>|右三角| | 
 | |p|五角星| | 
 | |h|六边形| | 

给图形添加标题

```yaml
title('这里填写标题的名字')
```

给图中的曲线加以说明

```yaml
legend('说明1','说明2',)
```

添加坐标轴的标签

```yaml
xlabel('xxx');
ylabel('xxx');
```

添加文本注释

```yaml
text(x,y,'文本内容')
x，y为文本的的位置坐标
```

特殊坐标轴

```yaml
loglog：两个坐标轴都使用对数刻度
semilogx：x使用对数刻度，y轴使用普通刻度
semilogy：y使用对数刻度，x轴使用普通刻度
```

显示与关闭网格线

```yaml
grid on   %显示网格线
grid off  %关闭网格线

```

子图在一个图片中画多个图像

```yaml
subplot(2,2,1);  %将当前操作的图窗口，分成四部分，对第一部分操作
plot(x1,y1);
subplot(2,2,2);  %对第二个部分操作
plot(x2,y2);
subplot(2,2,3);  %对第三部分操作
plot(x3,y3);
subplot(2,2,4);  %对第四部分操作
plot(x4,y4);
```

调整图轴的范围

```yaml
axis([0,6,-1.2,1.2]);  %将数轴的范围改成x从0到6，y从-1.2到1.2;
```

用bar制作一个长条图（条形图）

```yaml
close all
x=1:10;
y=rand(size(x));
bar(x,y);
```

如果已经知道资料的误差量，就可以用errorbar来作图（误差棒图）

```yaml
x=linspace(0,2*pi);
y=sin(x);
e=std(y)*ones(size(x));
errorbar(x,y,e);
```

对于变化剧烈的函数，可以使用fplot来绘制更加精密的图

```yaml
fplot('sin(x)',[0.02,0.2]);  %[0.02,0.2]实绘图的范围
```

极坐标图形

```yaml
x=linspace(0,2*pi);
r=cos(4*x);
polar(x,r);
```

对于大量的资料，可以使用hist来显示资料的分情况和统计特性（以资料个数为距离）
验证高斯乱数分

```yaml
x=randn(5000,1); %产生5000个 m=0，s=1的高斯乱数
hist(x,20); %20代表长条的个数
```

rose以资料大小视为角度漫，在极坐标图中表示

```yaml
x=randn(1000,1);
rose(x);
```

stairs(x,y)画阶梯图

```yaml
x=linspace(0,10,50);
y=sin(x).*exp(-x/3);
stairs(x,y);
```

stems针状图，常用作绘制数位讯号

```yaml
x=linspace(0,10,50);
y=sin(x).*exp(-x/3);
stem(x,y);
```

stairs将资料点视为多边形的顶点,此种方法还必须得弄上颜色

```yaml
x=linspace(0,10,50);
y=sin(x).*exp(-x/3);
fill(x,y,'b');
```

feather将每一个资料点看作是复数，以箭头画出

```yaml
x=linspace(0,2*pi,20);
y=cos(x)+i*sin(x);
feather(y);
```

compass也是以箭头发出，只不过这个是在极坐标之中

```yaml
x=linspace(0,2*pi,20);
y=cos(x)+i*sin(x);
compass(y);
```

## 三维图，立体绘图

mesh可以画出立体网状图，plot可以画立体曲面图，产生的图形会依靠高度有不同的长度。

### 立体网状图

```yaml
x=linspace(-2,2,25); % x轴从-2到2，一共分成25个点
y=linspace(-2,2,25); % 与x轴同理
[xx,yy]=meshgrid(x,y); % x和y都是21*21的矩阵
zz=xx.*exp(-xx.^2-yy.^2); % zz也是21*21的矩阵
mesh(xx,yy,zz);
```

### 立体曲面图

```yaml
x=linspace(-2,2,25); % x轴从-2到2，一共分成25个点
y=linspace(-2,2,25); % 与x轴同理
[xx,yy]=meshgrid(x,y); % x和y都是21*21的矩阵
zz=xx.*exp(-xx.^2-yy.^2); % zz也是21*21的矩阵
surf(xx,yy,zz); 
```

