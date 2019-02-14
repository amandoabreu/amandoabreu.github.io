---
title: 'CSS FizzBuzz, has science gone too far?'
layout: page
newsletter: false
comments: true
author: Amando Abreu
date: '2017-08-14 03:28:00'
---
Recently at an interview instead of checking whether or not I had a pulse, it was requested that I solve the FizzBuzz challenge in a language of my choice. I naturally chose CSS.

"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

It's insanely simple.

To not display the number, for every 3rd and 5th element, set the font-size to 0.

```
li:nth-child(3n), li:nth-child(5n){    font-size:0px;}
```

To display Fizz for every multiple of 3, for every 3rd element, write "Fizz" with the :before pseudo element.

```
li:nth-child(3n):before{    content: 'Fizz';     font-size:15px;}
```

To display "Buzz" for every multiple of 5, for every 5th element, write "Buzz" with the :before pseudo element.

```
li:nth-child(5n):after{     content: 'Buzz';    font-size:15px;}
```

"FizzBuzz" comes for free whenever every 3rd and every 5th elements are the same.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="amando96" data-slug-hash="ygxJGx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS FizzBuzz ">
  <span>See the Pen <a href="https://codepen.io/amando96/pen/ygxJGx/">
  CSS FizzBuzz </a> by Amando Abreu (<a href="https://codepen.io/amando96">@amando96</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
