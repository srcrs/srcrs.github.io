---
title: Socket实现多客户端与服务端交互
date: 2019-11-28
category: Other
tags:
 - 通信
permalink: /posts/201911281.html
---
Socket可以有两种方式实现客户端与服务端的连接，一种是TCP，一种是UDP，本次用的TCP。
设计思路无非是，服务端先搭建好一个地址和端口，然后客户端连接到这个地址和端口。中间也遇到了很多的问题，比如说多个 客户端怎么连接到一个服务端，这里只需要为每个用户开一个线程就可以解决。另外就是如何实现服务端作为通信的桥梁，接收一个客户端的信息到其余的客户端上，这里用的是HashMap，一个存放识别客户端的ID，一个存放客户端的Socket对象，这样，每次操作遍历所有的节点，就可以实现转发到不同的客户端上。

**Server**

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashMap;
import java.util.Iterator;

public class Server {
	private static final int PORT = 8888;
	public static HashMap<String, Socket> socketList = new HashMap<>();
	static int t = 1;

	public static void main(String[] args) {
		try {
			ServerSocket server = new ServerSocket(PORT);
			System.out.println("server is listenning....");
			while (true) {
				Socket socket = server.accept();
				socketList.put("" + t, socket);
				t++;
				new ServerThread(socket, socketList);
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
}

class ServerThread extends Thread {
	private Socket client;
	private PrintWriter out;
	private HashMap<String, Socket> clientList = new HashMap<>();

	public ServerThread(Socket socket, HashMap<String, Socket> socketList) throws IOException {
		super();
		client = socket;
		clientList = socketList;
		start();
	}

	@Override
	public void run() {
		Socket socket;
		System.out.println("Client: " + getName() + " come in...");
		String str = "";
		try {
			BufferedReader reader = new BufferedReader(new InputStreamReader(client.getInputStream()));
			while ((str = reader.readLine()) != null) {
				// 每当客户端连接上,就向相应的客户端进行回应
				Iterator<HashMap.Entry<String, Socket>> entries = clientList.entrySet().iterator();
				while (entries.hasNext()) {
					HashMap.Entry<String, Socket> entry = entries.next();
		//			System.out.println(entry.getKey());
					if (!String.valueOf(entry.getKey()).equals("")) {
		//				System.out.println(entry.getValue());
		//				System.out.println("-------------");
						socket = entry.getValue();
						if (socket != client) {
							try {
								//out = new PrintWriter(socket.getOutputStream()); // 回复client的ID
								System.out.println(str);
								BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
								writer.write(str+"\n");
								writer.flush();
								//out.println(str + "\n");
								//out.flush();
							} catch (IOException e) {
								e.printStackTrace();
							}
						}
					}
				}

			}
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	}
}
```

**Client**

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;

public class Client extends Thread{
	private static final int PORT = 8888;
	public static void main(String[] args) {
		try {
			Socket socket = new Socket("127.0.0.1",PORT);
			new ReceiveServer(socket).start();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
class ReceiveServer extends Thread {
	private Socket socket;
	public ReceiveServer(Socket socket) {
		// TODO Auto-generated constructor stub
		this.socket = socket;
	}
	@Override
	public void run() {
		// TODO Auto-generated method stub
		new SendServer(socket).start();
		try {
			BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			String str = "";
			while(!socket.isClosed()&&(str = reader.readLine())!=null) {
				System.out.println(str);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
class SendServer extends Thread {
	private Socket socket;
	public SendServer(Socket socket) {
		// TODO Auto-generated constructor stub
		this.socket = socket;
	}
	@Override
	public void run() {
		// TODO Auto-generated method stub
		try {
			BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
			BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
			String str = "";
			while((str = reader.readLine())!=null&&!str.contains("bye")) {
				writer.write(str + "\n");
				writer.flush();
			}
			writer.write("bye"+"\n");
			writer.flush();
			reader.close();
			writer.close();
			socket.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
	}
}
```