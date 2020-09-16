---
title: Element of an image over text with simple CSS
layout: page
image: /assets/images/posts/imageovertext.jpg
newsletter: false
comments: true
author: Amando Abreu
category: css, design
date: 2016-04-10 03:01:00
---
A while ago at the room5 blog we pondered about having some fancy looking titles for some special posts. I played around with the possibility of having an element of the image "stick out" and go over the text of the title. As the image shows.

OK, so how?

The sad part is that it needs some image editing, and you need two images.

The first image is the whole image with all the elements therein.

Mine looks like this:

![](/assets/images/posts/knty6sb.jpg)

If we were to put the text over this image, it would simply go over everything, including the Eifel Tower.

Now we need image number two. We're going to need to edit this image and remove the elements we want to be "behind" the text.

In my case, I remove everything except the Eifel Tower.

![](/assets/images/posts/yi1ctss.jpg)

This image we will use as a background image of our text, and use a background clipping mask(at he time of writing this was a webkit specific rule for chrome and some other webkit browsers).

In the end, you get this(view at 0.5x for simplicity):

<p class="codepen" data-height="434" data-theme-id="light" data-default-tab="css,result" data-user="amando96" data-slug-hash="LkgNLL" style="height: 434px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Responsive image layer over text ">
  <span>See the Pen <a href="https://codepen.io/amando96/pen/LkgNLL">
  Responsive image layer over text </a> by Amando Abreu (<a href="https://codepen.io/amando96">@amando96</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>