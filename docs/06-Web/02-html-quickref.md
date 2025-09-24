---
description: ""
title: "Html Quickref"
---

### Html Entities

[HTML Standard - Named Character Reference](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)

| Character(s)                  | Literal(s) | Alphanumeric value(s) | Unicode value(s)  |
| :---------------------------- | :--------- | :-------------------- | :---------------- |
| Cent (currency)               | ¢          | `&cent;`              | `&#162;`          |
| Pound (currency)              | £          | `&pound;`             | `&#163;`          |
| Section 1                     | §          | `&sect;`              | `&#167;`          |
| Copyright                     | ©          | `&copy;`              | `&#169;`          |
| Guillemets 2                  | « »        | `&laquo; &raquo;`     | `&#171; &#187;`   |
| Registered trademark          | ®          | `&reg;`               | `&#174;`          |
| Degree(s)                     | °          | `&deg;`               | `&#176;`          |
| Plus/minus                    | ±          | `&plusmn;`            | `&#177;`          |
| Pilcrow (paragraph) 3         | ¶          | `&para;`              | `&#182;`          |
| Middle dot 4                  | ·          | `&middot;`            | `&#183;`          |
| Fractional half 5             | ½          | `&frac12;`            | `&#188;`          |
| En dash 6, 7                  | –          | `&ndash;`             | `&#8211;`         |
| Em (long) dash 7, 8           | —          | `&mdash;`             | `&#8212;`         |
| Single quotes 9, 10           | ‘ ’        | `&lsquo; &rsquo;`     | `&#8216; &#8217;` |
| Single low quote 11           | ‚          | `&sbquo;`             | `&#8218;`         |
| Double quotes 9               | “ ”        | `&ldquo; &rdquo;`     | `&#8220; &#8221;` |
| Double low quote 11           | „          | `&bdquo;`             | `&#8222;`         |
| Single & double daggers       | † ‡        | `&dagger; &Dagger;`   | `&#8224; &#8225;` |
| Bullet                        | •          | `&bull;`              | `&#8226;`         |
| Ellipsis 12                   | …          | `&hellip;`            | `&#8230;`         |
| Prime & double prime 13       | ′ ″        | `&prime; &Prime;`     | `&#8242; &#8243;` |
| Euro sign                     | €          | `&euro;`              | `&#8364;`         |
| Trademark                     | ™          | `&trade;`             | `&#8482;`         |
| Almost equal to               | ≈          | `&asymp;`             | `&#8776;`         |
| Not equal to                  | ≠          | `&ne;`                | `&#8800;`         |
| Less/greater than or equal to | ≤ ≥        | `&le; &ge;`           | `&#8804; &#8805;` |
| Less/greater than             | < >        | `&lt; &gt;`           | `&#062; &#060;`   |

### Emojis

[Full Emoji List from unicode.org](https://unicode.org/emoji/charts/full-emoji-list.html.)  
[📙 Emojipedia — 😃 Home of Emoji Meanings 💁👌🎍😍](https://emojipedia.org/)

### Image Maps

Image maps allow you to create interactive and clickable areas within an image to generate super features such as interactive diagrams, clickable infographics, or dynamic navigation menus.
You can think of the `map` element as a special container that holds all your hotspots. Each hotspot is defined using the `area` element, which determines the shape and coordinates of the clickable area.


[Free Online Image Map Generator](https://www.image-map.net/)  
[Image Map Generator](https://www.fla-shop.com/image-map/)
#### Example
```html
<h2>Choose the door game</h2>
<p>Open the door to see what's waiting for you behind it.</p>
<img src="https://edube.org/uploads/media/default/0001/03/choose-the-door.jpg" 
alt="A picture with two doors" usemap="#two-doors">
<map name="two-doors">
  <area shape="rect" title="A door with a white knob" coords="80,80,275,450" href="https://example.com/option1" alt="Open the door to Option 1">
  <area shape="rect" title="A door with a black knob" coords="540,75,745,460" href="https://example.com/option2" alt="Open the door to Option 2">
</map>
```