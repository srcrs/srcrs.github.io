---
title: flowchart画流程图
date: 2019-09-30
tags: 
    - 流程图
category: Other
permalink: /posts/201909301.html
---
## 开始和结束

起止框，流程图开始和结束。

```yaml
[Variable]->start: [Text]
[Variable]->end: [Text]
```

@flowstart
st=>start: Start
e=>end: End

st->e
@flowend

## 操作

相当于处理框，在框中可以进行计算。

```yaml
[Variable]->operation: [Text]
```

@flowstart
process=>operation: Operation
e=>end: End

process->e
@flowend

## 输入和输出

输入和输出框，在里面可以进行输入和输出操作。

```yaml
[Variable]->inputoutput: [Text]
```

@flowstart
process=>inputoutput: Inputoutput
e=>end: End

process->e
@flowend

## 子程序

暂时不知道该怎么用

```yaml
[Variable]->subroutine: [Text]
```

@flowstart
process=>subroutine: Subroutine
e=>end: End

process->e
@flowend

## 条件

判断框，有两个出口，一个是满足条件的出口，一个是不满足条件的出口。

```yaml
[Variable]->condition: [Text]
[Variable]([yesText])->[Position]
[Variable]([noText])->[Position]
```

@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend

## 平行

平行和操作开始的时候看的差不多，但平行是有两个出口的，而操作只有一个出口。

```yaml
[Variable]->parallel: [Text]
[Variable](path1,direction)->[Position]
[Variable](path1,direction)->[Position]
```

@flowstart
para=>parallel: parallel tasks
process=>operation: Process
e=>end: End

para(path1,bottom)->process->e
para(path2)->e
@flowend