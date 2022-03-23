---
title: Sending data to google sheets via javascript from a static website
description: Sending data to google sheets via javascript from a static website
layout: post
newsletter: false
comments: true
author: Amando Abreu
date: 2022-12-16 11:16:45
---
I have a static website. And in it I had a text field that users fill in. I don't care about who the user is, I just want to collect the data.

In this case users input a number that refers to their salary in order to calculate how much they make per second. The input field is inside an article. By collecting this data I'm able to see what the average salary of the people who read that article/blog.

I have the same system setup for the search field. Anytime someone types something into the search field, I want that data.

Options I considered:
- Lambda function that saves stuff to dynamoDB
- Analytics tools

Solution: