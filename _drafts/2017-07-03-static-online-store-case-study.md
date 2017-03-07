---
layout: page
title:  "Static online store case study, part 1"
date:   2017-03-07 12:00:00 +0200
author: Amando Abreu
categories:
comments: true
image:
---
# Goals
- Have an online dropshipping shop based in Portugal running as a static site through amazon S3
- Generating at least enough revenue to be self-sufficient(Covering domain, hosting, advertising, and content creation).
- Collect emails for newsletters(mailchimp).
- Traffic will come through facebook and adwords
- Blog for organic traffic, however, some articles will be optimized for conversions(sales or newsletter signups) and also be facebook/adwords campaigns.

# Possible expected pitfalls
- Since I will be dropshipping, it might require some custom scripts to communicate to with the dropshippers, which may require a server, but it would be 100% for customers that checkout, which isn't so bad.
- Portuguese bureaucracy
- Customer trust 



# Infrastructure
Since I want to avoid having a "back-end" mostly to cut down on costs of a server, all standard e-commerce platforms are out of the question, prestashop, magento, etc. I could heavily cache them, but I wanted to face the challenge of using a static site generator.

I chose [Hugo](https://gohugo.io/), and I wrote some scripts in PHP(I could rewrite them in Go, for reasons) to import products from an XML provided by a dropshipper I decided to test with.

I didn't use data files because at the time of writing I was quite limited on what I could do with them when it came time to paginate. So each article is a post of the archetype "product".

# Shopping cart
I used [snipcart](https://snipcart.com/).

<blockquote class="quote quote--left">
Lean, powerful HTML / JavaScript shopping cart
</blockquote>

Which means I can have my users checkout without having any server logic on my side, neat!

# Deployment
I run the import scripts, the product files are created, I then run the `hugo` command, and deploy the results to S3 using `s3_website` ruby gem.
(all these commands are in a single shell script so all I have to do is run `sh deploy.sh`).

# Theme
I got an "e-commerce" layout for free from [w3layouts](https://w3layouts.com/), and made it into a hugo theme, I didn't like some things about it, so I spent a bit more time than I wanted on customization, the blog was also not part of it initially, so I had to make that too. 

![theme](/assets/images/posts/pt-online-shop-case-study/n-air.png "n-air")

Became:

![theme](/assets/images/posts/pt-online-shop-case-study/semprefit.png "semprefit")
(One of the images has a black background because my image importer/resizer doesn't take into account the filetype, so what happened was a png image was turned to jpeg without taking into consideration the alpha channel, details to be taken care of later).

And added the blog section:

![theme](/assets/images/posts/pt-online-shop-case-study/blog.png "blog")

