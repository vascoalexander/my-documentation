---
created: 2025-02-23, 11:33
title: "Interfaces"
description: ""
sidebar_position: 3
language: C#
tags: []
---
Defines a "contract" that all the classes inheriting from should follow. An interface declares "what the class should have". An inheriting class defines "how it should do it".
**Benefit:** security + multiple inheritance + "plug and play"

```c
inferface IPrey
{
	void Flee();
}
interface IPredator
{
	void Hunt();
}
class Rabbit : IPrey
{
	public void Flee()
	{
		Console.WriteLine("The Rabbit flees!");
	}
}
class Hawk : IPredator
{
	public void Hunt()
	{
		Console.WriteLine("The Hawk is searching for food!");
	}
}
class Fish : IPrey, IPredator
{
	public void Flee()
	{
		Console.WriteLine("The Fish flees!");
	}
	public void Hunt()
	{
		Console.WriteLine("The Fish searches for smaller food!");
	}
}
```