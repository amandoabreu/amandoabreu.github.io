---
layout: post
title:  "XSS by including JavaScript in image metadata"
date:   2019-02-07 16:00:00 +0200
author: Amando Abreu
categories: pentesting security
comments: true
newsletter: true
image: /assets/images/posts/metadata-title.png
---

Every now and then I like to test sites I frequently visit, I figure since they have my data, it's in my best interest for it to be secure.

There is a popular sports site that will remain unnamed that allows you to upload photos, given that high quality photography is an important part of this site, the image metadata tends to be left untouched, and shown publicly so visitors can see which camera was used, among other things.

This site has a history of having XSS vulnerabilities, so I naturally wondered if the image metadata was properly escaped.

All it took was adding this to the metadata in lightroom:

![Metadata](/assets/images/posts/metadata.png "Metadata")

And after exporting to jpeg and uploading to the site, this code ran perfectly.

Given that this image would then be exposed on public lists, and a single image can reach multiple thousand views without much trouble, one would only need an admin to open the image to to hijack cookies and log in with admin privileges, or redirect users to a similar site for a phishing attack.

To increase the chances of an admin opening the image, one would only need to upload an "illegal" image that would surely get reported and deleted, but before the deletion happens the damage is already done.

I reported this on the same day I found it and they fixed it immediately.
