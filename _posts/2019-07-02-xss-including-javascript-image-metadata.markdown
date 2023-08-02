---
layout: post
title:  "XSS by including JavaScript in image metadata"
date:   2023-07-02 16:00:00 +0200
author: Amando Abreu
categories: pentesting security
comments: true
newsletter: true
image: /assets/images/posts/metadata-title.png
---
### What is XSS (Cross-Site Scripting)?

Cross-Site Scripting (XSS) is a web security vulnerability that allows attackers to inject malicious scripts into websites that are viewed by other users. It occurs when a website includes user-generated data in its output without properly validating or escaping it. This can enable attackers to execute scripts in the user's browser, which can have various malicious effects.

There are mainly three types of XSS:
1. **Stored XSS:** Where the malicious script is permanently stored on the target servers.
2. **Reflected XSS:** The malicious script is embedded in a URL and reflected off the web server.
3. **DOM-based XSS:** It's in the DOM (Document Object Model) instead of part of the HTML.

XSS can lead to several problems like theft of cookies, session tokens, or other sensitive information; defacement of websites; and distribution of malware.

### The vulnerability

Every now and then, I like to test websites I frequently visit for security vulnerabilities. Since these sites often have access to my personal data, ensuring their security is in my best interest.

One popular sports website, which I'll keep anonymous, caught my attention. This site specializes in high-quality photography and often displays image metadata, such as the camera used, publicly without alteration.

Knowing this site's history of XSS (Cross-Site Scripting) vulnerabilities, I was curious to see if the image's EXIF info was properly escaped. 

#### What's EXIF?
Image metadata, or EXIF data, refers to information embedded within a digital image file that details specific attributes of the image. This can include technical information such as the camera model, lens type, exposure settings, date and time of capture, and GPS coordinates of where the image was taken. Additionally, metadata might contain descriptions, copyright information, or other annotations. Many photographers and digital platforms use this data to sort and organize images or to provide context about how a particular photo was taken.

... getting back to the vulnerabilty.

XSS is a dangerous vulnerability that can allow an attacker to inject malicious code into a web page, potentially compromising user data or the site's functionality. I essentially hijacked the capability of the EXIF to store code inside the image metadata.

To test this, I added the following code to the metadata in Lightroom:

![Metadata](/assets/images/posts/metadata-title.png "Metadata")

After exporting to JPEG and uploading the modified image to the site, the code ran perfectly, confirming my suspicion.

This discovery is particularly alarming considering the potential reach of a single image on the site. Thousands of views can be garnered quickly, and if an administrator were to open the image, it would be possible to hijack their cookies and log in with admin privileges. Attackers could also redirect users to a similar-looking site to execute a phishing attack.

To make matters worse, an attacker could strategically upload an "illegal" or controversial image that would likely be reported and examined by an admin. Even if the image were subsequently deleted, the damage could already be done.

I promptly reported the vulnerability to the site's administrators, who thankfully fixed it immediately.

### Conclusion

The presence of XSS vulnerabilities, as demonstrated in this case, underscores the importance of vigilant security practices. By not properly escaping user-generated content, websites can expose themselves and their users to significant risks. This incident serves as a reminder to web developers and administrators to always sanitize input, validate output, and consider security at every stage of development.
