---
layout: page
title:  "How I made over $1000 with a single article on medium.com"
date:   2018-09-17 12:00:00 +0200
author: Amando Abreu
categories: medium
comments: true
image:
---

So you decided to use formspree so you can submit forms with your static pages, *but* you're getting a `400 Bad request` error, and it may come with "could not find the "Referrer" header.".

This simply means that formspree expects to receive a header called "referrer", which webservers tend to include, however, if you're testing this with static HTML, it's not a webserver and contains no referrer header, so formspree complains. The same applied to a jekyll site running on my local environment with `jekyll serve`, but it worked fine when I uploaded the website to the server.

{: .header .header--two }
## TL;DR;
Put those files on a webserver, if it fails on your local machine, try putting it on the live server.
