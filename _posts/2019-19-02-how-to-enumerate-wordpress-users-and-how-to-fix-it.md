---
title: 'How To: Enumerate WordPress Users(and how to fix it)'
layout: page
newsletter: true
comments: true
author: Amando Abreu
category: WordPress
date: '2099-02-18 10:53:00'
---
A common attack vector for WordPress is to enumerate users and see what juicy data you can get.

This is easily done because if you browse to /?author=1, WordPress will kindly redirect you to /author/name/ and literally hand over the information you want

```
for i in {1..5}; do curl -s -L -i http://www.wordpress-site.com/?author=$i | grep -E -o "" title="View all posts by [a-z0-9A-Z-.]|Location:." | sed 's/// /g' | cut -f 6 -d ' ' | grep -v "^$"; done
```

## The fix

```
if (!is_admin()) {
```

```
function shapeSpace_check_enum($redirect, $request) {
```