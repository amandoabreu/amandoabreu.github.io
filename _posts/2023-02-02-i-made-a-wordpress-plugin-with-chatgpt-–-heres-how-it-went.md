---
title: I asked chatGPT to make a WordPress plugin – Here's how it went
description: I asked chatGPT to make a WordPress plugin – Here's how it went
layout: post
newsletter: false
comments: true
author: Amando Abreu
date: 2023-02-02 06:57:55
image: /assets/images/posts/learnpress-stripe-bigger.png
---
I run a course platform with the popular WP LMS called LearnPress. Before making this plugin, I could only accept payments via paypal, but this was costing me sales. 

LearnPress has a Stripe integration as a plugin, but I wanted to make it myself, and I specifically wanted to use [Stripe Checkout](https://stripe.com/docs/payments/checkout) 

I asked chatGPT "make a LearnPress Add-on to allow stripe checkout payments"

You can see the full chat history here:

https://chat.openai.com/share/15092d55-2593-41a5-9487-029b0275ae08
https://chat.openai.com/share/95388e81-ab0e-4f04-a3dd-0816474133cc

Long story short, it successfully helped me create a fully working WordPress plugin that integrated with LearnPress, which is quite impressive!

# Things I learned
## I no longer need a developer to create quick POCs or small apps
I'm technical. And I know what to ask to get great results. But being able to ask chatGOT and get immediate feedback makes this faster than interacting with a human developer.

## Things chatGPT is really good at:
### Using popular APIs 

This is something I noticed when using github copilot. You can nearly skip doc-reading if the use-case is a very common one (wouldn't recommend not reading docs, though!)

Eg: Stripe API; WordPress APIs

### Finding bugs
If something doesn't work they way it should and you can't figure it out, ChatGPT usually can find it very quickly. Sometimes it does what a linter would catch anyway, so be sure to use the right tool for the job.

## Things ChatGPT is bad at:
### Keeping track of a lot of logic in a large program

You can be more productive with it if you ask for targeted changes in specific functions.

For example, instead of feeding it your whole program and asking for a change, ask for a change within a single function and feed it that single function and nothing else. Reduces the amount of things it can screw up.

## Thanks for reading!

You can see the fully working plugin here: https://github.com/amandoabreu/learnpress-stripe