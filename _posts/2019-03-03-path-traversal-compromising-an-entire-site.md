---
title: 'Path traversal: Compromising an entire site'
layout: page
image: /assets/images/posts/path.png
newsletter: false
comments: true
author: Amando Abreu
date: '2019-03-03 12:06:32'
---
A friend of a friend wanted to see whether or not his site was secure.



## Step 1) ZAP

Run automated scans using ZAP 2.7.0

Oh, hello there :)

![](/assets/images/posts/path.png)

It seems that there's a PHP file that allows to download PDFs, but it also allows us to traverse paths in the server to download PHP files. If we're lucky we can get all sorts of juicy data such as database credentials. 

## Step 2) Getting files

Let's try.

```
redacted.com/dl.php?pdf=../index.php
```

Ok, that was incredibly easy. I have successfully downloaded the index.php file where all the magic happens.

Now we just need to locate the file with the database credentials, this might be a clue:

![](/assets/images/posts/db.png)

Let's send a new request:

```
redacted.com/dl.php?pdf=../admin/db_requete.php.php
```

![](/assets/images/posts/mysql2.png)

We found that the site is SQL injectable, even though they are using adslashes(), it doesn't protect against an attack, because:

> If I want to attempt an SQL injection attack against a MySQL database, having single quotes escaped with a backslash is a bummer. If you're using addslashes(), however, I'm in luck. All I need to do is inject something like 0xbf27, and addslashes() modifies this to become 0xbf5c27, a valid multi-byte character followed by a single quote. In other words, I can successfully inject a single quote despite your escaping. That's because 0xbf5c is interpreted as a single character

But we want more, since we're browsing the files we can just get passwords and compromise everything.

Let's find myConnexion.php

```
redacted.com/dl.php?pdf=../admin/myConnexion.php
```

Too easy

![](/assets/images/posts/passwords.png)

If those are correct, I should be able to enter

## Step 3) Entering the mysql server

let's try:

![](/assets/images/posts/mysql7.png)

And there we have it. From here I can persist anything I want to do malicious stuff to users, and since none of the passwords are hashed I can clearly see what they are. And, if they use the same passwords for other services, I could theoretically take control of email, social accounts, etc. But this where I end it.

Long story short, **the site wasn't safe.**
