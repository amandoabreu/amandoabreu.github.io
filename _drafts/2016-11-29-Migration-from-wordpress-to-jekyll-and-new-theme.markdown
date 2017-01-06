---
layout: page
title:  "My journey migrating from Wordpress to jekyll"
date:   2016-11-29
author: Amando Abreu
categories: jekyll cms wordpress
comments: true
image: https://c1.staticflickr.com/9/8604/16733520202_a56b8cc967_h.jpg

---
So I got tired of wordpress, the overhead in complexity for a simple blog became too much to maintain, so I decided to start using jekyll and host my personal site on github-pages, and eventually S3, here's how that went.

Sections:
- About the switch
- Migrating posts and custom post types
- Setting up github-pages and my custom domain with https
- Problems with github pages
- Why I decided to use S3 instead
- About the new setup

{: .header .header--two }
### About the switch

I had very little posts, in fact, only one blog post that was public, and many drafts that I never finished enough to publish. However, my "portfolio" was a custom post type with custom fields created with [cmb2](https://wordpress.org/plugins/cmb2/)

I created a simple python crawler to generate the jekyll project file. [...]


<div class="centerwrapper centerwrapper--wide">
{% highlight ruby %}
# -*- coding: utf-8 -*-
import scrapy
import io

class ProjectSpider(scrapy.Spider):
    name = "mndflp"
    allowed_domains = ['mndflp.me']
    start_urls = [
        'http://mndflp.me/',
    ]

    def post_name(self, name):
        return name.replace('-', ' ').capitalize()

    def parse(self, response):
        projects = response.css('.modal')
        projects.extract()
        for project in projects:
            name = project.xpath('@id').extract()
            print(name)
            project_mobile_images = project.css('.inner .sliders .mobile-slider img').xpath('@src').extract()
            project_tablet_images = project.css('.inner .sliders .tablet-slider img').xpath('@src').extract()
            project_desktop_images = project.css('.inner .sliders .desktop-slider img').xpath('@src').extract()

            project_description = '<br/>'.join(project.css('.inner .accordion .with-children.blue .child p::text').extract()).encode('utf-8')
            project_tech_description = '<br/>'.join(project.css('.inner .accordion .with-children.red .child table').extract()).encode('utf-8')
            project_notes = '<br/>'.join(project.css('.inner .accordion .with-children.aqua .child p::text').extract()).encode('utf-8')

            with io.FileIO('projects/'+name[0]+".markdown", "w") as file:
                file.write("---\n")
                file.write("layout: project \n")
                file.write('title:  "'+ self.post_name(name[0]) +'"\n')
                file.write("date:   2016-11-24\n")
                file.write("author: Amando Abreu\n")
                file.write("categories: project\n")
                file.write("desktop_images:\n")
                if(project_desktop_images):

                    for p in project_desktop_images:
                        file.write("  - image_path: " + p + "\n")
                        file.write("    title: Desktop image\n")
                file.write("tablet_images:\n")
                if (project_tablet_images):

                    for p in project_tablet_images:
                        file.write("  - image_path: " + p + "\n")
                        file.write("    title: Tablet image\n")
                file.write("mobile_images:\n")
                if (project_mobile_images):

                    for p in project_mobile_images:
                        file.write("  - image_path: " + p + "\n")
                        file.write("    title: Mobile image\n")

                file.write('description: "' + project_description + '"\n')
                file.write('tech_description: "' + project_tech_description + '"\n')
                file.write('notes: "' + project_notes + '"\n')
                file.write("---\n")

            '''yield {
                'name': project.xpath('@id').extract(),
                'mobile_images': project_mobile_images,
                'tablet_images': project_tablet_images,
                'desktop_images': project_desktop_images,
                'description': [ p.strip('\n') for p in project_description],
                'tech_description': filter(None, [p.strip('\n').strip('\r\n').strip(' ') for p in project_tech_description]),
                'notes': ''.join(project_notes),
            }'''

{% endhighlight %}
</div>

{: .header .header--two}
### Setting up github-pages and my custom domain with https
There are plenty of tutorials on setting up a site on github pages, like [this one](https://pages.github.com/){:target="_BLANK"}


{: .header .header--two}
### Problems with github-pages

{: .header .header--three}
### About the new setup

Jekyll, new theme, BEM, less specificity, disqus comments, gulp assets and images