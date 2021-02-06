---
title: "How To: Enumerate WordPress Users(and how to fix it)"
layout: post
image: /assets/images/posts/wordpress_capa-720x405.jpg
newsletter: true
comments: true
author: Amando Abreu
category: WordPress
date: 2019-02-18 10:53:00
---
A common attack vector for WordPress is to enumerate users and see what juicy data you can get, and potentially try to bruteforce the password, or even use known passwords from leaks on other services.

This is easily done because if you browse to /?author=1, WordPress will kindly redirect you to /author/name/ and literally hand over the information you want

```
for i in {1..5}; do curl -s -L -i http://www.wordpress-site.com/?author=$i | grep -E -o "" title="View all posts by [a-z0-9A-Z-.]|Location:." | sed 's/// /g' | cut -f 6 -d ' ' | grep -v "^$"; done
```

## The fix

Place this code in your `functions.php` file.

```
if (!is_admin()) {
    // default URL format
    if (preg_match('/author=([0-9]*)/i', $_SERVER['QUERY_STRING'])) die();
    add_filter('redirect_canonical', 'shapeSpace_check_enum', 10, 2);
}
```

```
function shapeSpace_check_enum($redirect, $request) {
   // permalink URL format
   if (preg_match('/\?author=([0-9]*)(\/*)/i', $request)) die();
      else return $redirect;
}
```