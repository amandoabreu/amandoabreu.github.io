---
layout: page
title:  "Calculating the likelihood of a shitty argument due to strawmanning to create a fast and learnable heuristic"
date:   2018-11-11 19:00:00 +0200
author: Amando Abreu
categories:
comments: true
newsletter: true
image: /assets/images/posts/argument.jpg
---

Arguments should be productive, but they very easily turn into fights and an absolute mess. This is usually because of a strawman.

First of all, what’s a straw man?

> An intentionally misrepresented proposition that is set up because it is easier to defeat than an opponent’s real argument.

I’m going to claim that if we remove the word “intentionally”, we get a more realistic definition. Most people don't strawman intentionally.

I'm going to propose that are there is a possibility to strawman not just the argument, but also the person. For example: I look young, so no matter how good my argument is I'm usually personally strawmanned.

If I’m not very educated on a topic, and someone wants to argue that topic with me, I can either:

- Admit I don’t really know what I’m talking about
- Argue based on a straw man of the argument(can produce hilarious jokes, but doesn’t go anywhere)
- Argue based on a straw man of the person(leads to ad hominem)

This isn’t a conscious decision, and most people choose either 2 or 3 without realizing. They're unaware of themselves.

But, at the same time I’m choosing which way to argue, the other person also is. This adds some game theory, but I'll leave it out for simplicity.

For the argument to get heated and lead nowhere, only one of us needs to choose either of the straw men.

Since we have 2 people, and 2 possible locations for a strawman(the person and the argument) we have to calculate how many different possibilities there are for a strawman to be present in a 4x4 matrix. This can be calculated by using the factorial of 4, and substracting 10.

Given 4!-10 arguments, let's check for the presence of a strawman in either position to check how likely it is to encounter a strawman with both parties being unaware.

![companyapp](/assets/images/posts/strawman.png "Company app")

The above image shows us 14 arguments named N = n. When the question "strawman?" is false, a green box appears. This means this particular argument had no strawman.

As we can see, only 1 out of 14 arguments with two unaware people have the potential to be good arguments.

However. If only one person is aware of their shortcomings and doesn't strawman the other person's argument or person, we drastically improve the chances of a good argument:

![companyapp](/assets/images/posts/strawman2.png "Company app")

By removing all the strawmen of person 1 in all arguments, we raised the possibility for a potentially good argument by 400%!

If you personally always stay humble and don’t let your hubris create a strawman, you significantly raise the chance for potentially good arguments.

If you were to add another person to the argument, you can see how the complexity of everything goes up fast. If we just add one more person, we suddenly need 6!-329, which is 391 arguments to have just a single argument with no strawman.

This is why meetings are unproductive when there are too many people that are either unaware, or simply don't care.

This is why I prefer arguing complex topics one-on-one, and why I try to make little assumptions even about topics I believe I understand fairly well.

This eliminates some unnecessary complexity of the communication process so we can focus on the complex argument instead.
