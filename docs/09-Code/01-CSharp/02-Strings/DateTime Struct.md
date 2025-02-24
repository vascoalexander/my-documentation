---
created: "2025-02-24, 07:00"
description: ""
language: C#
tags:[]
---
### DateTime Formats

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
| :         | Hours, minutes, seconds separator, e.g. {0:hh:mm:ss} | 9:08:59                               |
| /         | Year, month , day separator, e.g. {0:dd/MM/yyyy}     | 8/4/2007                              |

## Handling Nullable DateTime