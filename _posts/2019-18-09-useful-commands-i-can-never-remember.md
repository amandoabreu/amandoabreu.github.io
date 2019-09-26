---
title: Useful commands I can never remember
layout: page
newsletter: false
comments: true
author: Amando Abreu
date: '2016-09-18 08:48:00'
---
A list of commands I use often but can't seem to be able to memorise.

```find dirname/ -name \*.sql```

find all .sql files in directory called dirname/

```sudo du -a /dir/ | sort -n -r | head -n 20```

Find and order the 20th largest files in a server in /dir/

```grep 'PRETTY_NAME' /etc/*release | cut -d'=' -f2```

Get only the value of 'PRETTY_NAME' of the /etc/*release file that may look like this:

```
NAME="Amazon Linux"
VERSION="2"
ID="amzn"
ID_LIKE="centos rhel fedora"
VERSION_ID="2"
PRETTY_NAME="Amazon Linux 2"
ANSI_COLOR="0;33"
CPE_NAME="cpe:2.3:o:amazon:amazon_linux:2"
HOME_URL="https://amazonlinux.com/"
```
