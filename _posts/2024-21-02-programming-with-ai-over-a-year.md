---
title: "Lessons learned: Using AI for professional programming for over a year"
description: "Lessons learned: Using AI for professional programming for over a year"
layout: post
newsletter: false
comments: true
author: Amando Abreu
date: 2024-02-21 06:57:55
image: /assets/images/posts/learnpress-stripe-bigger.png
---
I've been using AI for professional programming for over a year, here's what I've learned:

* It’s really good for debugging
* It’s really good to understand and explain unreadable or overly complex code in simple terms
* It’s really good at writing tests
* It lets you be productive in programming languages you have limited experience in
* It helps you with architecture decisions
* You can be productive with less mental effort
* It’s a game-changer for regexp
* You still need to know what you’re doing, sometimes
* You can learn faster – with the right questions

Overall, generative AI is a serious productivity tool that nobody, especially software engineers, should be outright dismissing. I'm not saying you should use AI now and forever, I'm just saying you shouldn't dismiss it without thought :)

The future isn’t just AI, it’s you + AI.

I’ve heard some technical peers say it takes the fun out of solving certain problems, which is a point – but you get no extra points for having fun for 5 hours solving something versus someone solving that same thing in 5 minutes without having fun.

# It’s really good to understand and explain unreadable or overly complex code in simple terms
I fed it this:

!["Brainf*ck"](/assets/images/bf.jpeg)

**ChatGPT:** The code you've shared is written in Brainf*ck, a minimalist and esoteric programming language created by Urban Müller. It's known for its extreme minimalism, with only eight simple commands, a data pointer and an instruction pointer.

This specific Brainf*ck code is printing out the string "Hello, World!" when executed. Let's break it down:

!["Brainf*ck"](/assets/images/bfexplained.jpeg)

This is a pretty typical "Hello, World!" program in Brainf*ck. Due to its minimalistic nature, Brainf*ck code is often hard to understand without closely following each step, and it's usually not used for practical programming tasks.


# You can be productive with less mental effort/helps with context switching

This image has gone around the internet many times, and I’ve even used it for some articles.

!["programmer"](/assets/images/p.jpeg)

In this example, you could feed your code into chatGPT and ask it to summarize the code, getting you back to your “pre-distraction” state much faster than before. And considerably lowering the mental load required to get things done. A prompt for this could be:

“I just got distracted whilst working on this, could you explain this piece of code to me in simple terms to help me get back into it?”

Less mental load = fewer mistakes = better work = less tired after work!

# It’s a game-changer for regexp

>"The ability to understand RegExp is the sign of a gentleman. The ability to understand RegExp too well is the sign of a wasted life." - Me, based on the chess quote by Paul Morphy

For the rest of us, you can now do this:

!["reg exp"](/assets/images/regexpq.jpeg)

!["reg exp](/assets/images/regexpq.jpeg)

# You still need to know what you’re doing, sometimes

Sometimes, the output is just plain wrong. This could be due to a few reasons:

* Your prompt was too ambiguous
* There was not enough data about what you asked to train on

The more experienced you are, the quicker you can catch that something is off.

But many times, **nothing is off!** *(Kinda...)*

Most of the time, you ask it for something and you get code that works. There have been people with no coding experience delivering SaaS products with the help of ChatGPT. This is a huge thing. Entry level requirements and expectations will rise due to this once the market starts to really understand what this means.

It’s even more powerful **when you understand certain caveats and know what to ask it.**

Someone uninformed can ask for some sort of payment processor. -> Cool, it works.
Now you run into **scaling issues** and you ask how to scale -> it **suggests adding another server**

Now you have double payments because **the original code was never designed to run in a multi server setup.**

Some of this stuff only comes from experience. Or in other words, **from mistakes.** Allowing newcomers to make more mistakes increases the rate of learning.

If you really wanted, you could ask for architectural suggestions to do what you’re trying to do. It will give you great answers. But you’d need to know what to ask. And you’d need to know what you don’t yet know.

Which leads to my final point.

# You can learn faster – with the right questions

If chatGPT existed when I was learning to code, it would have probably alowed me to learn 10x faster, for the simple reason that you can make more mistakes faster, and figure out how to fix them.

It's not the only thing needed to learn, but it will expose you to different ways of thinking similarly to how sitting next to a more senior dev might!
