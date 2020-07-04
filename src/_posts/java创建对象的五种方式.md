---
title: java创建对象的五种方式
date: 2019-12-01
category: Java
tags:
 - java
permalink: /posts/201912011.html
---
## 静态编译&编码方式

静态编译&编码的方式是最常用的，也是我以前只知道的，特点就是A类必须要先存在。

```java
class A {
	public void run() {
		System.out.println("A");
	}
}
public class test {
	public static void main(String[] args) {
		A a = new A();//创建之前A类必须要存在
		a.run();
	}
}
```

## 克隆方式

克隆一个对象实现的关键就是使用Cloneable接口。

```java
class B implements Cloneable{
	public void run() {
		System.out.println("B");
	}
	@Override
	protected Object clone() throws CloneNotSupportedException {//克隆必须要实现的接口
		// TODO Auto-generated method stub
		return super.clone();
	}
}
public class test {
	public static void main(String[] args) {
		B a = new B();
		try {
			B b = (B)a.clone();//这返回的是Object类型的对象，还要下转一下。
		    b.run();
		} catch (CloneNotSupportedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
```

## 序列化和反序列化方式

借助于Serializable接口实现创建对象，这个更前一种克隆方式实现原理差不多，都是对已经创建好的对象进行复制，但是并不是同一个对象，即不是在同一个地址。这种创建的对象不安全，因为必须把已有的实例对象放到一个文件中，这就导致了信息有可能泄露。

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class C implements Serializable{//序列化和反序列化要实现的接口
	public void run() {
		System.out.println("C");
	}
}
public class test {
	public static void main(String[] args) {
		C a = new C();
		try {
			ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("data.obj"));
		    out.writeObject(a);
		    out.close();
		    ObjectInputStream in = new ObjectInputStream(new FileInputStream("data.obj"));
		    C c = (C)in.readObject();//这返回的也是Object。
		    c.run();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}
}
```

## 反射的方式

### 方式1

```java
import java.lang.reflect.Method;

class D {
	public void run() {
		System.out.println("D");
	}
}
public class test {
	public static void main(String[] args) {
		try {
			Object obj = Class.forName("D").newInstance();//Class.forName返回的是一个类，newInstance实例化一个对象
		    Class clazz = obj.getClass();//获得类型类
			Method md = clazz.getMethod("run", null);//获取名为run的方法
			md.invoke(obj);//运行方法
			D d = (D)Class.forName("D").newInstance();//也可直接下转
			d.run();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}
}
```

### 方式2

```java
import java.lang.reflect.Constructor;

class E {
	public void run() {
		System.out.println("E");
	}
}
public class test {
	public static void main(String[] args) {
		try {
			Constructor<E> constructor = E.class.getConstructor();
			E e = constructor.newInstance();
			e.run();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}
}
```