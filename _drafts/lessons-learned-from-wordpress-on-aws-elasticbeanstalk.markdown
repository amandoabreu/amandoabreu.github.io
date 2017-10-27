---
layout: page
title:  "Lessons learned from moving Wordpress to AWS Elasticbeanstalk"
date:   2016-12-14 12:00:00 +0200
author: Amando Abreu
categories: trust projects freelance
comments: true
image:
---
Over a year ago I was assigned the task of moving a very large WordPress blog into elasticbeanstalk in an attempt to make it safer, faster, (more)scalable, and allow us to have a more streamlined deployment process.

The blog had:
- 16 languages with each language being a site in a multisite installation
- "WPMU Domain mapping" plugin to link domains with sites
- Around 10,000 posts in total
- 40,000 images that I had to move to S3(because elasticbeanstalk wants immutable applications, more on that later)
- 50 editors making changes in the CET timezone
- Performance issues
- 350000 requests per month

{: .header .header--two }
## Moving the images

My first step was to move all the images to S3 with [WP Offload S3](https://deliciousbrains.com/wp-offload-s3/) Back in the day when the free version allowed you to move files, then I served them with cloudfront. This step alone made the blog faster.

{: .header .header--two }
## Creating the Elasticbeanstalk application

I created an environment with minimum 2 instances and maximum of 20, and one RDS instance with 20GB magnetic storage, scaling based on requests.

WP multisite is slow and shit with the domain mapping plugin
