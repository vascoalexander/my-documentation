---
created: 2025-02-27, 19:35
title: Threading
description: ""
sidebar_position: 1
draft: false
---
We can use multiple Threads to perform, different Tasks of our Program at the same time.
Current thread running is the "main" thread.

```csharp
using System.Threading;

class Program
{
	static void Main()
	{
		Thread mainThread = Thread.CurrentThread;
		mainThread.Name = "Main Thread";

		// with Parameters
		Thread thread1 = new Thread(() => CountDown("Timer #1"));
		Thread thread2 = new Thread(() => CountUp("Timer #2"));
		// without Parameters
		// Thread thread1 = new Thread(CountDown);
		// Thread thread2 = new Thread(CountUp);
		
		thread1.Start();
		thread2.Start();

		Console.WriteLine(mainThread.Name + " is complete");
	}
	
	public static void CountDown(string name)
	{
		for (int i = 10; i >= 0; i--)
		{
			Console.WriteLine("Timer #1: " + i + " seconds");
			Thread.Sleep(1000);
		}
		Console.WriteLine("Timer #1 is complete");
	}
	
	public static void CountUp(string name)
	{
		for (int i = 0; i <= 10; i++)
		{
			Console.WriteLine("Timer #2: " + i + " seconds");
			Thread.Sleep(1000);
		}
		Console.WriteLine("Timer #2 is complete");
	}
}
```