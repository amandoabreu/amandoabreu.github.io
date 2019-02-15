---
title: The Josephus Problem in JavaScript
layout: page
image: /assets/images/posts/1_yn0h5ii5_pa9zdz9fwg2rg.jpeg
newsletter: false
comments: true
author: Amando Abreu
date: '2019-02-15 06:19:26'
---
The problem is named after Flavius Josephus, a Jewish historian living in the 1st century. According to Josephus' account of the siege of Yodfat, he and his 40 soldiers were trapped in a cave by Roman soldiers. They chose suicide over capture, and settled on a serial method of committing suicide by drawing lots. Josephus states that by luck or possibly by the hand of God, he and another man remained until the end and surrendered to the Romans rather than killing themselves. This is the story given in Book 3, Chapter 8, part 7 of Josephus' The Jewish War.



People are standing in a circle waiting to be executed. Counting begins at a specified point in the circle and proceeds around the circle in a specified direction. After a specified number of people are skipped, the next person is executed. The procedure is repeated with the remaining people, starting with the next person, going in the same direction and skipping the same number of people, until only one person remains, and is freed.



For our solution:

\- The point where the executions begin will be at 12 o'clock if we distribute all the people evenly over a circle.

\- The direction is clockwise

\- The number of skips is 0, meaning person 1 kills the person immediately to their left.



Let's try with 9 people.

n = 9;

k(n) = 3;

because, given

1,2,3,4,5,6,7,8,9

1 kills 2

3 kills 4

5 kills 6

7 kills 8

Remaining are:

1,3,5,7,9

we now start at 9.

9 kills 1

3 kills 5

Remaining are:

9,3,7

We now start at 7

7 kills 9

Remaining are:

3, 7

3 kills 7

The winner is number 3

Let's write some code to do this for us.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="amando96" data-slug-hash="gqBQeR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="The Josephus Problem">
  <span>See the Pen <a href="https://codepen.io/amando96/pen/gqBQeR/">
  The Josephus Problem</a> by Amando Abreu (<a href="https://codepen.io/amando96">@amando96</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
