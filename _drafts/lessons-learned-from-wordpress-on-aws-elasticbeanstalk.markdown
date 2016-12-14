---
layout: page
title:  "Lessons learned from Wordpress on AWS Elasticbeanstalk"
date:   2016-12-14 12:00:00 +0200
author: Amando Abreu
categories: trust projects freelance
comments: true
image: https://c7.staticflickr.com/8/7667/16973136358_1407846425_h.jpg
---
Over a year ago I was assigned the task of moving a very large WordPress blog into an elasticbeanstalk instance in an attempt to make it safer, faster, scalable, and allow us to have a more streamlined deployment process without compromising the servers where the main product runs.

The blog had:
- 16 languages with each language being a site in a multisite installation
- Around 10,000 posts in total
- 40,000 images that I had to move to S3(because elasticbeanstalk wants immutable applications, more on that later)