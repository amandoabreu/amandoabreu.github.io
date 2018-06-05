---
layout: page
title:  "Auth0, \"The provided idToken in invalid.\""
date:   2017-08-09 12:00:00 +0200
author: Amando Abreu
categories:
comments: true
newsletter: false
---
Lately I have been playing with VueJS, Apollo, and Auth0, after following a tutorial online and running my code, it just didn't work, I assumed something was wrong with the code, and I did find that `getProfile()` is now deprecated and we should use `getUserInfo()` instead, but even after fixing that, I still got `The provided idToken in invalid.` after trying to `this.$apollo.mutate(<data>)`;

Turns out it can all be fixed by changing some settings under Client > Advanced settings > OAuth.

Just change the OIDC Conformant flag to false, or <a href="https://auth0.com/docs/api-auth/tutorials/adoption/oidc-conformant" target="_blank">adapt your code</a> to fit the rules for OICD.

![](/assets/images/posts/Selection_030.png)
