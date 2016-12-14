---
layout: page
title:  "Wordpress: Make plugin that automatically creates frontend page"
date:   2016-12-14 12:00:00 +0200
author: Amando Abreu
categories: trust projects freelance
comments: true
image:
---
Creating a front-end page for a plugin without manually creating a page

Many times a developer wants a plugin to have a page in a specific url, e.g.: <code>site.com/plugin-page</code>, but to be forced to create a page and select a custom template isn't the best nor fastest way to do it, I will show you how to make this page available as soon as the plugin is activated, and gone when the plugin is deactivated.
This is useful for example for a "contest" type plugin, <code>site.com/contest</code>
To automatically create a page for a plugin, we need to add some query vars, then rewrite the URLs, and load a template based on the query vars.

Let's get into code:

