---
title: 看了一点SpringBoot的思考
date: 2020-04-18
category: Other
tags:
​    - spring
---

:::tip
先开始就准备看SpringBoot的，但是看到介绍说需要先了解Spring要不然可能会看不懂，所以就简单过了一遍Spring，直到今天才开始看SpringBoot，仅仅看了一点，我就感到惊奇不已。
:::

<!-- more -->

## 简述

过了一遍Spring，我知道了Spring有两大特性，IOC和AOP，一个是反转控制，一个是面向切面编程，反转控制的意思是，将原本自己创建对象的权力交给Spring，自己不需要管对象是怎么创建的，直接拿来用就可以了，面向切面编程，目的是将业务代码和非业务代码分离，一些打印、输出等代码不应和业务代码混合到一起，单独拿出来，放到一个切面类中。

说了这些其实我也整的不是很明白，我不知道对象交给Spring管理的优点，我知道当需要对象是可以直接从Spring中去拿，不用管这个对象是在哪个包中，直接拿来用就可以了，可能平常写的代码都太短还体会不到成百上千上万会怎么样，通过简单的xml配置，就可以将一个类中的字面量都初始化，一个对象也可以通过引用的方式初始化，很方便。很重要的一点就是注解。

通过短短的一条注解，就可以把这个类交给Spring去管理，我很好奇这个是如何实现的，我知道Spring底层创建对象的方式是基于反射，注解是如何被识别被加载，我不懂。偶然间，我想到了上学期期末java结业作业的一道题，里面涉及到了注解，那时候我还不知道这个叫注解，正是通过注解初始化对象，那时候我还不明白为什么要这样，就用通常的方式不美吗？但是，我还是很认真的看了那道题，虽然用了很长的时间，但是解决了，后来老师说，这个搞明白对以后些框架有用去，直到今天我才发现谜底在这。

SpringBoot今天才开始看，仅仅看了一点，会创建SpringBoot项目并开始运行，访问网址，返回结果，我就感到惊奇不已。要知道之前创建javaweb，光是环境我都好长时间没整明白，tomcat本地还需要安装，配置，但是SpringBoot将这一套东西都整合到了一起tomcat环境也不需要配置了，大大减少了开发流程，后边估计还会有更多的东西都可以直接拿来用，不用配置环境，要知道配置环境多少人都踩了坑。

用的时候我也有一丝担忧，那就是用这些框架确实很舒服，以后就不想看一些底层的东西了，我觉得这个很危险。就比如铁锨过去是翻土的一个好工具（现在基本都是牛或者机器翻土吧），用它也可以铲沙，但是遇到硬的土质就不太管用了，所以人们又根据铁锨发明了锄头。工具的出现就是更方便高效的生活，但是不适应的时候，就得需要改变了，得知道原理才知道如何去改变这些东西，假如不知道铁锨得那个棍是怎么做的，锄头那个棍不也做不成，如何能将头和棍紧紧的套在一起，也不知道。

所以，我希望自己能够在享受框架便利的同时也能够多去了解一下，这个是咋做的，咋实现的。

现在好好分析上学期的一道大作业。

## 实现类似Spring中的反射依赖注入功能

请补充附件中的BeanFactory代码，完成附件里面AnimalCenterTest的正确运行。

```java
package zoo;

public interface Animal {
	public void move();
}
```

```java
package zoo;

public class AnimalCenter {
	//需要将注解的值产生实例，然后注入到first变量中
	@Inject(value="zoo.Tiger")
	private Animal first;
    
	//需要将注解的值产生实例，然后注入到second变量中
	@Inject(value="zoo.Bird")
	private Animal second;
    
	public void firstShow()
	{
		first.move();
	}
	
	public void secondShow()
	{
		second.move();
	}
}
```

```java
package zoo;

public class AnimalCenterTest {

	public static void main(String[] args) throws Exception {
		AnimalCenter ac = BeanFactory.getBean(AnimalCenter.class);
		ac.firstShow();
		ac.secondShow();		
	}
}
```

```java
package zoo;
import java.lang.reflect.Field;

public class BeanFactory {
 
    public static <Q> Q getBean(Class<Q> clazz) {
    	
    	Q result = null;
    	
    	//请补充
    	//首先产生一个clazz的实例对象
        //请补充
        //查找所有的成员变量，并遍历
        //如果有成员变量带有Inject注解，请采用反射办法获取到注解的值
        //然后产生注解值所对应的实例对象，并赋值给这个成员变量
        //如果该成员变量是private，需要用反射办法设置为可以访问的
    	
        return result;
    }
}
```

```java
package zoo;

public class Bird implements Animal{
	
	public void move()
	{
		System.out.println("Bird: I can fly high");
	}
}

```

```java
package zoo;

import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)

//注入的注解，用于指定注入类型
public @interface Inject {
	public String value();
}
```

```java
package zoo;

public class Tiger implements Animal{
	
	public void move()
	{
		System.out.println("Tiger: I can run fast");
	}
}
```

当时给的代码就是这样，如何补充代码也都有注释，只知道一点点反射，却不知道如何通过反射查看是否有注解。

### 这里需要注意几个问题

+ 如何通过反射创建一个实例对象？

:::tip
newInstance();
:::

+ 如何通过反射获取实例对象的所有成员变量？
  
:::tip
getClass().getDeclaredFields();
:::

+ 反射如何操纵私有变量或方法

:::tip
setAccessible(true);
:::

+ 如何根据反射判断成员是否带有注解？

:::tip
getAnnotation();
:::

### 补充完代码

```java
package zoo;

import java.lang.reflect.Field;

public class BeanFactory {
 
    public static <Q> Q getBean(Class<Q> clazz) {
    	
    	Q result = null;
        try {
        	//创建clazz的实例对象
			result = clazz.newInstance();
            //获取当前实例对象的所有成员方法
			Field[] filed = result.getClass().getDeclaredFields();
			for(Field f : filed) {
				//设置私有变量也可以操纵
				f.setAccessible(true);
				//判断当前成员变量是否有此注解
				Inject inject = f.getAnnotation(Inject.class);
				//根据注解里面的值反射得到实例对象
				Object obj = Class.forName(inject.value()).newInstance();
				//result里面的成员变量f的值设置为obj
			    f.set(result, obj);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
        return result;
    }
}
```

依赖注入实现原理大概就是这样的吧，但是少量的代码时体会不到它的好处的，我就没咋体会到，相反会觉得复杂，明明有简单的方法不用，要用这个复杂的，慢慢体会吧。SpringBoot是初尝它的好，还要一步步挖掘^_^。