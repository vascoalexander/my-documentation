---
created: 2025-02-24, 07:06
title: "DateTime struct"
description: ""
sidebar_position: 7
language: C#
tags: []
---
## DateTime Constructor

```c
// DateTime(year, month, day) 
DateTime date1 = new DateTime(2025, 12, 25); Console.WriteLine(date1.ToString()); 
// Ausgabe: 12/25/2015 12:00:00 AM 

// DateTime(year, month, day, hour, minute, second)
DateTime date2 = new DateTime(2022, 12, 25, 10, 30, 50); Console.WriteLine(date1.ToString());
// Ausgabe: 12/25/2015 10:30:00 AM }
```
---
## DateTime Methods

```c
// Creating TimeSpan object of one month(as 30 days)  
TimeSpan duration = new System.TimeSpan(30, 0, 0, 0);  
DateTime newDate1 = DateTime.Now.Add(duration);  
Console.WriteLine(newDate1);

// AddYears, AddMonths, AddDays, AddHours, AddMinutes, AddSeconds  
DateTime today = DateTime.Now;
DateTime newDate2 = today.AddDays(3);
Console.WriteLine(newDate2);

// DateTime Parse
string dateString = "Wed Dec 30, 2015";  
DateTime dateTime12 = DateTime.Parse(dateString); // 12/30/2015 12:00:00 AM  
  
// Date Difference  
System.DateTime date1 = new System.DateTime(2025, 3, 10, 2, 15, 10);  
System.DateTime date2 = new System.DateTime(2025, 7, 15, 6, 30, 20);  
System.DateTime date3 = new System.DateTime(2025, 12, 28, 10, 45, 30);

System.TimeSpan diff1 = date2.Subtract(date1);
System.DateTime date4 = date3.Subtract(diff1);  
System.TimeSpan diff2 = date3 - date2;
System.DateTime date5 = date2 - diff1;
```
---
## DateTime Properties

```c
DateTime myDate = new DateTime(2025, 12, 25, 10, 30, 45);  
int year = myDate.Year;              // 2015  
int month = myDate.Month;            // 12  
int day = myDate.Day;                // 25  
int hour = myDate.Hour;              // 10  
int minute = myDate.Minute;          // 30  
int second = myDate.Second;          // 45  

```
---
## DayOfWeek
It specifies day of the week like Sunday, Monday etc. It is an enum which starts from Sunday to Saturday. If you cast the weekofday value to integer then it starts from Zero (0) for Sunday to Six (6) for Saturday.

```c
DateTime myDate = new DateTime(2025, 12, 25, 10, 30, 45);
int weekDay = (int)myDate.DayOfWeek; // 4 (numeric value of weekday)
string weekDay2 = myDate.DayOfWeek.ToString(); // name of day (Thursday)

DateTime dt = new DateTime(2015, 12, 25);
bool isEqual = dt.DayOfWeek == DayOfWeek.Thursday); // False
bool isEqual = dt.DayOfWeek == DayOfWeek.Friday); // True
```
---
## DateTime Formatting

```c
DateTime tempDate = new DateTime(2025, 2, 24);
Console.WriteLine(tempDate.ToString("MMMM dd, yyyy"));
```

| Specifier | Description                                          | Output                                |
| :-------- | :--------------------------------------------------- | :------------------------------------ |
| d         | Short Date                                           | 12/8/2015                             |
| D         | Long Date                                            | Tuesday, December 08, 2015            |
| t         | Short Time                                           | 3:15 PM                               |
| T         | Long Time                                            | 3:15:19 PM                            |
| f         | Full date and time                                   | Tuesday, December 08, 2015 3:15 PM    |
| F         | Full date and time (long)                            | Tuesday, December 08, 2015 3:15:19 PM |
| g         | Default date and time                                | 12/8/2015 15:15                       |
| G         | Default date and time (long)                         | 12/8/2015 15:15                       |
| M         | Day / Month                                          | 8-Dec                                 |
| r         | RFC1123 date                                         | Tue, 08 Dec 2015 15:15:19 GMT         |
| s         | Sortable date/time                                   | 2015-12-08T15:15:19                   |
| u         | Universal time, local timezone                       | 2015-12-08 15:15:19Z                  |
| Y         | Month / Year                                         | December, 2015                        |
| dd        | Day                                                  | 8                                     |
| ddd       | Short Day Name                                       | Tue                                   |
| dddd      | Full Day Name                                        | Tuesday                               |
| hh        | 2 digit hour                                         | 3                                     |
| HH        | 2 digit hour (24 hour)                               | 15                                    |
| mm        | 2 digit minute                                       | 15                                    |
| MM        | Month                                                | 12                                    |
| MMM       | Short Month name                                     | Dec                                   |
| MMMM      | Month name                                           | December                              |
| ss        | seconds                                              | 19                                    |
| fff       | milliseconds                                         | 120                                   |
| FFF       | milliseconds without trailing zero                   | 12                                    |
| tt        | AM/PM                                                | PM                                    |
| yy        | 2 digit year                                         | 15                                    |
| yyyy      | 4 digit year                                         | 2015                                  |
| :         | Hours, minutes, seconds separator, e.g. `{0:hh:mm:ss}` | 9:08:59                               |
| /         | Year, month , day separator, e.g. `{0:dd/MM/yyyy}`     | 8/4/2007                              |

---
## Timezone Object

```c
// Get current Time Zone  
string current = TimeZone.CurrentTimeZone.StandardName;  
Console.WriteLine(current);  
  
// Get All Time Zones  
foreach (TimeZoneInfo z in TimeZoneInfo.GetSystemTimeZones())  
{  
    Console.WriteLine(z.Id);  
}

//Convert any date from your time-zone to UTC
DateTime timeUTC = TimeZone.CurrentTimeZone.ToUniversalTime(DateTime.Now);  
Console.WriteLine(timeUTC);

// Zeit in spezifischer Zeitzone ermitteln
TimeZoneInfo nzTimeZone = TimeZoneInfo.FindSystemTimeZoneById("New Zealand Standard Time");  
DateTime nzTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, nzTimeZone);

Console.WriteLine($"Aktuelle Zeit in Neuseeland: {nzTime}");
```
---
## DateTime with Different Culture


## Related Links
[DateTime In C#](https://www.csharp.com/article/datetime-in-c-sharp/)