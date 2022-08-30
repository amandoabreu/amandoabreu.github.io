---
title: Setting up PhpStorm to run PHPUnit tests inside an already running docker
  container
description: Setting up PhpStorm to run PHPUnit tests inside an already running
  docker container
layout: post
image: /assets/images/posts/screenshot-2022-08-12-at-15.56.27.png
newsletter: true
comments: true
author: Amando Abreu
date: 2022-08-12 12:15:00
---
Let's make some assumptions:

* You are running a PHP application inside docker, and you use docker-compose. For example: <https://github.com/dunglas/symfony-docker>
* You use PhpStorm

Ok, here's how to set it up so that you can runs tests through PhpStorm in the docker container that is already running and serving your project locally.

* Open PhpStorm > Preferences > PHP
* Click on the 3 dots after CLI Interpreter
* Click on the plus to add a new one
* Select "From Docker, vagrant, VM \[...]"

![](/assets/images/posts/screenshot-2022-08-12-at-15.54.38.png)

* Select the "Docker compose" option.
* Configuration files are your docker-compose.yml files, mine did a good job at assuming which ones I wanted to use
* Service: Select the docker container where your app is running, mine is called php:

![](/assets/images/posts/screenshot-2022-08-12-at-15.56.27.png)

* Environment variables: I left it blank, add whatever you may want/need
* PHP interpreter path: my default suggestion worked
* Once that's done, change the Lifecycle to "Connect to an existing container ('docker-compose exec')

![](/assets/images/posts/screenshot-2022-08-12-at-16.01.00.png)

## Setting up path mappings

* In PhpStorm > Preferences > PHP
* Click the folder icon after Path mappings
* The one on the left is your local path, eg: /User/dev/project-root
* The one on the right is the one inside the docker container, this should be explicitly in your Dockerfile, example: <https://github.com/dunglas/symfony-docker/blob/main/Dockerfile> -> line 147, WORKDIR /srv/app

![](/assets/images/posts/screenshot-2022-08-12-at-16.05.45.png)

![](/assets/images/posts/screenshot-2022-08-12-at-16.07.02.png)

* Path to script: vendor/autoload.php, because you set the path mappings, it will look for this at the project root
* Test Runner, default configuration file: phpunit.xml.dist should be in your project root, and it should be selected.
* Once that's done, run your tests, and there you go

![](/assets/images/posts/screenshot-2022-08-12-at-16.12.14.png)