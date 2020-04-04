---
title: java和c++装饰器对比
date: 2020-03-23
category: Other
tags:
 - 设计模式
---

## c++

```cpp
#include<iostream>
using namespace std;
class Invoice
{
	public :
		virtual void printInvoice(){
			cout << "This is the content of the invoice!" << endl;
		}
};
class Decorator : public Invoice
{
	Invoice *ticket;
	public :
		Decorator(Invoice *t)
		{
			ticket = t;
		}
		void printInvoice() {
			if(ticket != NULL){
				ticket->printInvoice();
			}
		}
};
class HeadDecorator : public Decorator
{
	public :
		HeadDecorator(Invoice *t) : Decorator(t){ }
		void printInvoice()
		{
			cout << "This is the header of the invoice!" << endl;
			Decorator::printInvoice();
		}
};
class FootDecorator : public Decorator
{
	public :
		FootDecorator(Invoice *t) : Decorator(t){ }
		void printInvoice()
		{
			Decorator::printInvoice();
			cout << "This is the footnote of the invoice!" << endl;
		}
};
int main()
{
	Invoice t;
	FootDecorator f(&t);
	HeadDecorator h(&f);
	h.printInvoice();
	cout << "----------------------------------------" << endl;
	FootDecorator a(NULL);
	HeadDecorator b(&a);
	b.printInvoice();
	return 0;
} 
```

## java

```java
class Invoice{
    public void printInvoice(){
        System.out.println("这是票据正文！");
    }
}
class Decorator extends Invoice{
    Invoice ticket;
    public Decorator(Invoice t){
        ticket=t;
    }
    public void printInvoice(){
        if(ticket!=null){
            ticket.printInvoice();
        }
    }
}
class HeadDecorator extends Decorator{
    public HeadDecorator(Invoice t){
        super(t);
    }
    public void printInvoice(){
        System.out.println("这是票据的抬头！");
        super.printInvoice();
    }
}
class FootDecorator extends Decorator{
    public FootDecorator(Invoice t){
        super(t);
    }
    public void printInvoice(){
        super.printInvoice();
        System.out.println("这是票据的脚注！");
    }
}
public class App{
    public static void main(String args[]){
        Invoice t = new Invoice();
        FootDecorator f = new FootDecorator(t);
        HeadDecorator h = new HeadDecorator(f);
        h.printInvoice();
        System.out.println("--------------");
        HeadDecorator a = new HeadDecorator(null);
        FootDecorator b = new FootDecorator(a);
        b.printInvoice();
    }
}
```

## 解决

这两道题都是装饰器模式，因为c++面向对象内容写的比较少，导致有些代码部分都没看懂。

+ virtual关键字什么意思？

虚函数，虚函数是指一个类中你希望重载的成员变量，当你用一个基类指针或引用指向一个继承类对象的时候，调用一个虚函数时，实际调用的是继承类的版本。

大致就是这个意思吧

```cpp
#include <iostream>
struct Base {
   virtual void f() {
       std::cout << "base\n";
   }
};
struct Derived : Base {
    void f() override { // 'override' 可选
        std::cout << "derived\n";
    }
};
int main()
{
    Base b;
    Derived d;
    // 通过引用调用虚函数
    Base& br = b; // br 的类型是 Base&
    Base& dr = d; // dr 的类型也是 Base&
    br.f(); // 打印 "base"
    dr.f(); // 打印 "derived"
    // 通过指针调用虚函数
    Base* bp = &b; // bp 的类型是 Base*
    Base* dp = &d; // dp 的类型也是 Base*
    bp->f(); // 打印 "base"
    dp->f(); // 打印 "derived"
    // 非虚函数调用
    br.Base::f(); // 打印 "base"
    dr.Base::f(); // 打印 "base"
}
```

+ c++如何使用继承？

一个":"就行了。类似于这样 `class HeadDecorator : public Decorator`。

+ c++如何调用父类的函数？

类似于这样`Decorator::printInvoice();`

+ c++如何调用父类的构造函数？

类似于这样`HeadDecorator(Invoice *t) : Decorator(t){ }`

这样那个c++代码就可以看懂了。

以前就看到过发票抬头那一道题，当时也是看了好久的时间，不理解，最后也调试了很久，不理解，现在使用IDEA调试，看懂了，调试过程成可以看到对象的转变过程，犯了一个大错误，不同的子类上转型之后在子类中调用父类的结果是不同的，也就是说一个子类对父类的改变只是它自己能够感受到影响，别的子类并不能感受到影响。作用域不一样，对象是一个独立的个体，就像老大给父亲买了两瓶酒，对于老二来说是跟他没有关系的，他并不能偷偷喝了。

c语言指针是真的厉害，以前只是在地址取值啥的，多了之后，这转到那，那转到这，一会就转晕了。