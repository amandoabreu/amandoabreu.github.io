---
title: Sending user's searches on a static website to google sheets
description: Sending data to google sheets from a static website
layout: post
image: /assets/images/posts/screenshot-2022-03-23-at-12.27.07.png
newsletter: false
comments: true
author: Amando Abreu
date: 2022-03-23 09:16:45
---
I have a static website. And in it I have a search field that I urger users to use, to find out what they are looking for when they land on my website.

I don't care about who the user is, I just want to collect the data to know what to write!

![](/assets/images/posts/screenshot-2022-03-23-at-12.27.07.png)

I want it so that every time someone uses the search field, I automatically get the search term saved to a google sheet, or somewhere I can easily see it.

Options I considered:

* Lambda function that saves stuff to dynamoDB
* Analytics tools

Solution:

Ended using Zapier. Created a webhook action that I can use by sending a POST request to a URL that looks like this:

```
https://hooks.zapier.com/hooks/catch/notArealHook?search=data the user searched
```

And then all I have to do is perform the request when the user submits the form

```
$("#big-search-form").submit(function() {
  var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://hooks.zapier.com/hooks/catch/notArealHook?search="+$("#search-query2").val(), true);
    xhr.send();
});
```

Done!