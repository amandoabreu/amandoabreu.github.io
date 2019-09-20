---
title: Using Varnish with WordPress on Lightsail
layout: page
newsletter: false
comments: true
author: Amando Abreu
date: '2099-09-20 08:28:00'
---
**TL;DR; Varnish is a really, really fast cache.**

Varnish Cache is a web application accelerator also known as a caching HTTP reverse proxy. You install it in front of any server that speaks HTTP and configure it to cache the contents. Varnish Cache is really, really fast. It typically speeds up delivery with a factor of 300 - 1000x, depending on your architecture.

**Before**

We're gonna need:

* SSH Access to your server
* Feeling comfortable using the terminal
* WordPress plugin `Purge Varnish Cache`

SSH Into your server and install varnish(I assume Ubuntu) ```sudo apt install varnish -y```

