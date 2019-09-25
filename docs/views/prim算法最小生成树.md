---
title: Prim算法最小生成树
date: 2019-05-27 13:03:18
tags: 
    - 最小生成树
categories:
          - Algorithm
---
前几天在用`Prim`算法建最小生成树的时候，一直都没有实现，今天上实验课的时候，突发灵感，又去尝试了一下，可能是因为之前在解决单源最短路径的时候，觉得这两种算法有一些相似，也确实是如此。<!--more-->
# Prim算法历史
Prim算法(普里姆算法)，用于构造最小生成树，该算法与1930年由捷克数学家沃伊捷赫·亚尔尼克发现的，在1957年由美国计算机科学家罗伯特·普里姆独立发现，1959年艾兹格·迪科斯彻再次发现了该算法。所以普里姆又被叫做DJP算法、亚尔尼克算法或普里姆-亚尔尼克算法。
# Prim算法思想
`Prim`算法是典型的以点建树，需要有两个集合，一个是边集合，一个是点集合。点集合保存已经连接它最短路径的点，以后每次从未在点集合中的点找距离已经在点集合中最近的点，直到所有的点都在点集合中结束。边集合就用于保存选中的那些边，两点成线，当选中一个点，也就选中了一条边。
# 测试
问题：有一无向图，给出其中的一些边，问，其中哪几条边可以构成最小生成树。
## 输入
```yaml
4 6
1 2 2
2 3 2
2 4 1
1 3 5
3 4 3
1 4 4
```
## 输出
```yaml
1 2 2
2 4 1
2 3 2
```
# 代码如下
```cpp
#include<bits/stdc++.h>
using namespace std;
const int Max=1e4+2;
vector<int> q;//保存已选中的点
typedef struct EdgeNode//边的存储
{
	int to;
	double w;
};
typedef struct Node//已选中的边的存储
{
    int form;//起始点
    int to;//终止点
    int w;//权值
};
vector<Node> G;
vector<EdgeNode> s[Max];
bool vis[Max];//代表此点是否已加入到集合中
void build()
{
	fill(vis,vis+Max,false);
}
void sddr(int n)
{
    vis[1]=true;//标记此点已在集合中
    q.push_back(1);//先将点1加入到集合中
    while(q.size()!=n){
        int Min=Max;//代表选中距离最近点的权值
        int v1=-1;//代表起始点
        int v2=-1;//代表选中点的编号
        for(int i=0;i<q.size();i++){//寻找一个最近的点
            for(auto it=s[q[i]].begin();it!=s[q[i]].end();it++){
                EdgeNode E;
                E=*it;
                if(Min>E.w&&!vis[E.to]){
                    Min=E.w;
                    v1=q[i];
                    v2=E.to;
                }
            }
        }
        vis[v2]=true;//标记选中的点在集合中
        q.push_back(v2);//加入到集合中
        Node g;
        g.form=v1;
        g.to=v2;
        g.w=Min;
        G.push_back(g);//将选择的边存储下来
    }
}
int main()
{
	build();
	int n,m;
	cin >> n >> m;
	for(int k=1;k<=m;k++){
		int i,j;
		double w;
		cin >> i >> j >> w;
		EdgeNode e;
		e.to=j;
		e.w=w;
		s[i].push_back(e);
		e.to=i;
		s[j].push_back(e);
	}
	sddr(n);
	cout << endl;
	for(auto it=G.begin();it!=G.end();it++){
        Node g=*it;
        cout << g.form << ' ' << g.to << ' ' << g.w << endl;
	}
	return 0;
}
```