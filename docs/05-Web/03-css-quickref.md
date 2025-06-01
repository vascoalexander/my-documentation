---
description: ""
title: "CSS Quickref"
---

[**CSS 3 Cheat Sheet & Quick Reference**](https://quickref.me/css3#css-getting-started)  

## Selectors

### Basic Selectors

| Selector     | Description                   |
| ------------ | ----------------------------- |
| `*`          | All elements                  |
| `div`        | All div tags                  |
| `.classname` | All elements with class       |
| `#idname`    | Element with ID               |
| `div,p`      | All divs and paragraphs       |
| `#idname *`  | All elements inside `#idname` |
### Combinators

| Selector        | Description                             |
| --------------- | --------------------------------------- |
| `div.classname` | Div with certain classname              |
| `div#idname`    | Div with certain ID                     |
| `div p`         | Paragraphs inside divs                  |
| `div > p`       | All p tags one level deep in div        |
| `div + p`       | P tags immediately after div            |
| `div ~ p`       | P tags preceded by div                  |
### Attribute Selectors

| Selector             | Description             |
| -------------------- | ----------------------- |
| `a[target]`          | With a target attribute |
| `a[target="_blank"]` | Open in new tab         |
| `a[href^="/index"]`  | Starts with /index      |
| `[class\|="chair"]`  | Starts with chair       |
| `[class*="chair"]`   | containing chair        |
| `[title~="chair"]`   | Contains the word chair |
| `a[href$=".doc"]`    | Ends with .doc          |
| `[type="button"]`    | Specified type          |

### Pseudo classes / Pseudo Elements

| Pseudoclasses     |                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------- |
| `p::after`        | Add content after p                                                                     |
| `p::before`       | Add content before p                                                                    |
| `p::first-letter` | First letter in p                                                                       |
| `p::first-line`   | First line in p                                                                         |
| `::selection`     | Selected by user                                                                        |
| `::placeholder`   | [Placeholder](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder) attribute |
| `:root`           | Documents root element                                                                  |
| `:target`         | Highlight active anchor                                                                 |
| `div:empty`       | Element with no children                                                                |
| `p:lang(en)`      | P with en language attribute                                                            |
| `:not(span)`      | Element that's not a span                                                               |
| `a:active`        | Link in clicked state                                                                   |
| `a:hover`         | Link with mouse over it                                                                 |
| `a:visited`       | Visited link                                                                            |

| **Input Pseudo Classes** |                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| `input:checked`          | Checked inputs                                                                              |
| `input:disabled`         | Disabled inputs                                                                             |
| `input:enabled`          | Enabled inputs                                                                              |
| `input:focus`            | Input has focus                                                                             |
| `input:in-range`         | Value in range                                                                              |
| `input:out-of-range`     | Input value out of range                                                                    |
| `input:valid`            | Input with valid value                                                                      |
| `input:invalid`          | Input with invalid value                                                                    |
| `input:optional`         | No required attribute                                                                       |
| `input:required`         | Input with required attribute                                                               |
| `input:read-only`        | With readonly attribute                                                                     |
| `input:read-write`       | No readonly attribute                                                                       |
| `input:indeterminate`    | With [indeterminate](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate) state 

| **Structural Pseudo Classes** |                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| `p:first-child`               | First child                                                                                 |
| `p:last-child`                | Last child                                                                                  |
| `p:first-of-type`             | First of some type                                                                          |
| `p:last-of-type`              | Last of some type                                                                           |
| `p:nth-child(2)`              | Second child of its parent                                                                  |
| `p:nth-child(3n42)`           | Nth-child (an + b) formula                                                                  |
| `p:nth-last-child(2)`         | Second child from behind                                                                    |
| `p:nth-of-type(2)`            | Second p of its parent                                                                      |
| `p:nth-last-of-type(2)`       | ...from behind                                                                              |
| `p:only-of-type`              | Unique of its parent                                                                        |
| `p:only-child`                | Only child of its parent                                                                    |

## Fonts

### Shorthand

| `font:` | `italic` | `400`  | `14px`          | `1.5`       | `sans-serif`      |
| ------- | -------- | ------ | --------------- | ----------- | ----------------- |
|         | style    | weight | size (required) | line-height | family (required) |
### Properties

| Property           |                                    |
| ------------------ | ---------------------------------- |
| `font-family:`     | `<font>`                           |
| `font-size:`       | `<size>`                           |
| `letter-spacing:`  | `<size>`                           |
| `line-height:`     | `<number>`                         |
| `font-weight:`     | `<number>` / bold / normal         |
| `font-style:`      | italic / normal                    |
| `text-decoration:` | underline / none                   |
| `text-align:`      | left / right  / center / justify   |
| `text-transform:`  | capitalize / uppercase / lowercase |
### @font-face

Mit `@font-face` kannst du eine Schriftart direkt von einer URL (z. B. aus deinem Projekt oder einem CDN) laden und ihr einen Namen geben, der dann in CSS mit `font-family` verwendet werden kann.

```css
@font-face { 
	font-family: 'Glegoo'; 
	src: url('../Glegoo.woff'); 
}
```

## Backgrounds

```css
/* Shorthand: may include zero to one occurances of this values */
background: <attachment> <bg-image> <bg-positon> <bg-size> <repeat-style>
```

| Properties               |                                                    |
| ------------------------ | -------------------------------------------------- |
| `background:`            | _(Shorthand)_                                      |
| `background-color:`      | See: [Colors](https://quickref.me/css3#css-colors) |
| `background-image:`      | url(...)                                           |
| `background-position:`   | left/center/right/top/center/bottom                |
| `background-size:`       | cover X Y                                          |
| `background-clip:`       | border-box padding-box content-box                 |
| `background-repeat:`     | no-repeat repeat-x repeat-y                        |
| `background-attachment:` | scroll/fixed/local                                 |

### Examples
```css
background: url(img_man.jpg) no-repeat center; 
background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat; 
background: rgb(2,0,36); 
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(13,232,230,1) 35%, rgba(0,212,255,1) 100%);
```

## Animations

| `animation:` | `bounce` | `300ms`  | `linear`        | `100ms` | `infinite` | `alternate-reverse` | `both`    | `reverse`  |
| ------------ | -------- | -------- | --------------- | ------- | ---------- | ------------------- | --------- | ---------- |
|              | name     | duration | timing-function | delay   | count      | direction           | fill-mode | play-state |

| Properties                   |                                                        |
| ---------------------------- | ------------------------------------------------------ |
| `animation:`                 | _(shorthand)_                                          |
| `animation-name:`            | `<name>`                                               |
| `animation-duration:`        | `<time>ms`                                             |
| `animation-timing-function:` | ease / linear / ease-in / ease-out / ease-in-out       |
| `animation-delay:`           | `<time>ms`                                             |
| `animation-iteration-count:` | infinite / `<number>`                                  |
| `animation-direction:`       | normal / reverse / alternate / alternate-reverse       |
| `animation-fill-mode:`       | none / forwards / backwards / both / initial / inherit |
| `animation-play-state:`      | normal / reverse / alternate / alternate-reverse       |

### Examples

```css
/* @keyframes duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name */ 
animation: 3s ease-in 1s 2 reverse both paused slidein; 

/* @keyframes duration | timing-function | delay | name */ 
animation: 3s linear 1s slidein; 

/* @keyframes duration | name */ 
animation: 3s slidein; 

animation: 4s linear 0s infinite alternate move_eye; animation: bounce 300ms linear 0s infinite normal; 
animation: bounce 300ms linear infinite; 
animation: bounce 300ms linear infinite alternate-reverse; 
animation: bounce 300ms linear 2s infinite alternate-reverse forwards normal;
```