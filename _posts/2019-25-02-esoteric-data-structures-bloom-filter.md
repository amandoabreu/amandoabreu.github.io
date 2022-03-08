---
title: Some Esoteric Data Structures And Their Uses
description: "esoteric data structures and their uses "
layout: post
newsletter: false
comments: true
author: Amando Abreu
date: 2099-02-25 03:05:00
---
https://stackoverflow.com/questions/500607/what-are-the-lesser-known-but-useful-data-structures

http://blog.amynguyen.net/?p=853

https://www.reddit.com/r/programming/comments/aujcxl/data_structures_to_namedrop_when_you_want_to/

## Scapegoat Tree

https://en.wikipedia.org/wiki/Scapegoat_tree



## Bloom Filter

There's a high chance that my favourite data structure is probabilistic in nature. And that would be the bloom filter.

[Bloom filter](http://en.wikipedia.org/wiki/Bloom_filter): Bit array of *m* bits, initially all set to 0.

To add an item you run it through *k* hash functions that will give you *k* indices in the array which you then set to 1.

To check if an item is in the set, compute the *k* indices and check if they are all set to 1.

Of course, this gives some probability of false-positives (according to wikipedia it's about 0.61^(m/n) where n is the number of inserted items). False-negatives are not possible.

Removing an item is impossible, but you can implement *counting bloom filter*, represented by array of ints and increment/decrement.



## Rope

https://en.wikipedia.org/wiki/Rope_%28data_structure%29