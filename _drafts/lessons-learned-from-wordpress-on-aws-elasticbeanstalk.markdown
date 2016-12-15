---
layout: page
title:  "Lessons learned from moving Wordpress to AWS Elasticbeanstalk"
date:   2016-12-14 12:00:00 +0200
author: Amando Abreu
categories: trust projects freelance
comments: true
author:
image:
---
Over a year ago I was assigned the task of moving a very large WordPress blog into elasticbeanstalk in an attempt to make it safer, faster, scalable, and allow us to have a more streamlined deployment process without compromising the servers where the main product runs.

The blog had:
- 16 languages with each language being a site in a multisite installation
- "WPMU Domain mapping" plugin to link domains with sites
- Around 10,000 posts in total
- 40,000 images that I had to move to S3(because elasticbeanstalk wants immutable applications, more on that later)
- 50 editors making changes in the CET timezone

## Step one

My first step was to move all the images to S3 with [WP Offload S3](https://deliciousbrains.com/wp-offload-s3/) Back in the day when the free version allowed you to move files, then I served them with cloudfront. This step alone made the blog faster.

## Step two

Creating the Elasticbeanstalk application