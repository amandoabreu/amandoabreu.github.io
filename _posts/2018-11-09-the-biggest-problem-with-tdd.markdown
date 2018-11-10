---
layout: page
title:  " The Biggest Problem With TDD(and why it's still good)"
date:   2018-11-09 11:00:00 +0200
author: Amando Abreu
categories:
comments: true
newsletter: true
image: /assets/images/posts/pexels-photo-90807.jpeg
---

![companyapp](/assets/images/posts/pexels-photo-90807.jpeg "Company app")

The problem with software development, in general, is that if a given company works very well, and they talk about _X_, then suddenly a lot of people assume that _X_ is the only reason their business is booming. And force their teams to use _X._(could be a case of [HiPPODD](https://amando-abr.eu/wrote/introducing-hippo-driven-development/){:target="_blank"})

Figure out this pattern, figure out what _X_ is and when it changes, and you can become a millionaire _X_ consultant or a millionaire _X_ headhunter.

I will be talking about TTDaaR(TDD as a Religion), meaning I'm mostly pointing out flaws in the idea that TDD fixes everything preached by TDD advocates during the pink glasses phase. Thankfully, most reasonable people know that the world isn't black and white and see through the fallacies right in front of them.

TDD basically means you’re building two applications. One creates business value, and the other I see as a tool used to make the development _process_ more robust and less error-prone.

So we have:

- An application that creates business value(A1)
- An application that tests the implementation of A1(A2)*.

## Biggest TDDaaR assumptions

1. TDDaaR Assumes that a less complex application(A2) is able to test the more complex application(A1). 
2. TDDaaR assumes a code refactor will happen before a feature change.

1 -&gt; This will never be the case. **In order to fully test a complex system, you need a more complex system.** That’s why automation hasn’t taken over yet and we still have human QA in 2018(and _that_ also fails).

If you were to just design a group of test suites that combined become more complex than the business application, they would suddenly become more important — to developers — than the business application, and you’d need to test them too… See where this leads?

2 -&gt; We all intend to refactor, but suddenly you resign followed by your teammates, 5 years go by, and the business hires a team from overseas to write something from scratch because the business model had to change just enough that rewriting everything is worth the ROI. No tests are re-used, zilch.

## The good things about TDD(and why I advocate for it anyway)

Assuming it’s done right and ignoring organizational goals — as having shitty tests to test shitty code written for shitty reasons is a worst-case scenario that I won’t get into.

- Makes it harder to write behemoth methods and functions
- Makes it harder to ignore bad design
- Makes it harder to write completely unreadable code

#### Really don’t do this(it shows something is wrong somewhere else, find and fix that first):

- Make high test coverage a goal without a reason other than “because”
- Turn  the number of tests into a goal without a reason other than “because”

### Other things

#### *Testing implementation VS behaviour 

This is a tricky one, behaviour can change due to business decisions(if it doesn’t, you’re not agile enough, bro!).

> So, do you optimize for implementation or behaviour?

Given that I treat tests as a tool to facilitate development, **I would test implementation.**(in most cases)

To fully test behaviour you’d need to mock a bunch of stuff and miss most of the actual errors that happen in real life. And by testing behaviour, you’d miss out on the good aspects that implementation tests impose on your code base, as suddenly you’re using behavioural tests to test your implementation(code). I see what you’re trying to do, but those aren’t called unit tests and it’s not their purpose.

**Manually testing stuff in a production-like environment is still required. And I think automating this sort of test provides the best value for money.**

# Perhaps we all assumed TDD has to be strictly with unit tests, when it would be best suited for a good mix with other types of tests?

### Final notes:

Everything depends on your particular situation, and I’d like to hear what you’d do differently! :)
