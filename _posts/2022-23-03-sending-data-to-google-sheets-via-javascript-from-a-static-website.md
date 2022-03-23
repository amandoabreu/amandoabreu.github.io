---
title: Sending data to google sheets from a static website
description: Sending data to google sheets from a static website
layout: post
newsletter: false
comments: true
author: Amando Abreu
date: 2022-03-23 09:16:45
---
I have a static website. And in it I had a couple of text field that users fill in. 

I don't care about who the user is, I just want to collect the data.

In this case, users input a number that refers to their salary in order to calculate how much they make per second. The input field is inside an article. 

![](/assets/images/posts/screenshot-2022-03-23-at-11.50.40.png)

By collecting this data I'm able to see what the average salary of the people who read that article/blog.

I have the same system setup for the search field. Anytime someone types something into the search field, I want that data to see what people are wondering about. I may even make the search function more central in the design just to capture what people are looking for when they enter my blog.

![](/assets/images/posts/screenshot-2022-03-23-at-11.50.18.png)

Options I considered:

* Lambda function that saves stuff to dynamoDB
* Analytics tools

Solution:\
Ended using Zapier. Created a webhook action that I can use by sending a POST request to a URL that looks like this:

```
zapier-url.com/webhook/hfhfh?data=data the user sends
```

And then all I have to do is perform the request when the user presses enter(in the search field) or clicks the button (for the salary counter).

```
$("#search-query").on('keypress', function (e) {
  if(e.which === 13){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://hooks.zapier.com/hooks/catch/not_a_real_hook?search="+$("#search-query").val(), true);
    xhr.send();
  }
});
```

Done!