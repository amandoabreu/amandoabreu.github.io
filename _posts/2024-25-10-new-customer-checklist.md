---
title: "FREE: New customer checklist"
description: "A checklist of things to have in place for ownership, business continuity, and great product development"
layout: post
newsletter: false
comments: true
author: Amando Abreu
date: 2024-02-24 06:57:55
image: /assets/images/qwe.webp
---
This used to be an internal document to keep track of common “gotchas” I noticed most customers were missing or just never thought about. Over time, I decided to give it away. You absolutely could do all these yourself, if you want.

Below is a list of things you should think about and have in place to make the next few years much less stressful. If the following things are in place, you’re de-risking millions of dollars of unnecessary spend and avoiding a tremendous amount of headaches.

## Ownership

### Can you be shut out?

Are you sure you **own** what you have? Are you living in the house but someone else has the keys?   
All the following **should be yours**, not owned by your agency or your developers.

Check ownership of:

- [ ] Git repositories
- [ ] Databases
- [ ] Servers
- [ ] Are you sure all software and tools in use are properly licensed?
- [ ] Are there any risks of unlicensed software causing legal or operational issues?
- [ ] Do you own all relevant domain names?
- [ ] Are they renewed on time?
- [ ] Are your cloud infrastructure accounts (e.g., AWS, Azure, GCP) owned by the company?
- [ ] Are billing details up to date and under company control?
- [ ] Documentation
- [ ] Confluence/Other wiki tool
- [ ] Jira/Trello/Other task manager
- [ ] Slack/teams/other chat apps
- [ ] Access to third party software/SaaS
- [ ] Access to backups

If you do not own these accesses, your code, databases, and otherwise critical infrastructure might be in the hands of someone else and could be hostage in an ugly situation. You should own all of this\!

## Daily software operations

### Being able to take needless work out of the system is more important than being able to put more work into the system.

- [ ] Are you using source control?
- [ ] Are bugs managed? How?
- [ ] How do you estimate how long things take?
- [ ] Are the dev environments the same as production?
- [ ] Are you shipping small incremental changes daily? (CI/CD)
- [ ] How long does a build and deployment take?
- [ ] Is there a comprehensive suite of tests?
- [ ] How are you tracking development?

## Product

- [ ] What is your strategy for choosing what to work on?
- [ ] How do you prioritize?
- [ ] How do tech people influence the product?
- [ ] How long does it take to put a feature into production?
- [ ] **Feedback Loops:** Do you have mechanisms to gather feedback from users, customers, and stakeholders? How is this feedback integrated into the product development process?
- [ ] **Product Roadmap:** Is there a clear and communicated product roadmap? How often is it reviewed and updated?

## Scalability

### Can your systems handle more users?

- [ ] Is your infrastructure designed to handle increased load efficiently?
- [ ] Can your codebase handle growth in features, users, and data?

## People

### People are central to keeping things working

- [ ] How long to onboard a new developer on the project?
- [ ] How do you revoke rights from leavers?
- [ ] Can a disgruntled ex-employee break things?
- [ ] What happens if your star/lead developer leaves?
- [ ] Are you documenting processes and creating knowledge repositories to ensure continuity even when team members leave or change roles?

## Visibility

### Are errors invisible in your systems?

**Errors happen.** Every day you are guaranteed to have errors that hurt your bottom line. Are they visible? Can you see when payments fail? Can you see when signups fail? Can you see when important functionality fails? Are you or key persons alerted when this happens?

- [ ] Set up monitoring
- [ ] Set up alerting
- [ ] Setup process for handling fixes
- [ ] **Dashboarding:** Are there real-time dashboards that provide a clear overview of system health and key metrics?
- [ ] **User Behavior Monitoring:** Do you track user behavior to identify potential issues before they escalate? (e.g., abnormal drop-off rates at certain steps)
- [ ] **Post-Mortem Reviews:** Are post-mortems conducted after incidents to understand root causes and prevent recurrence?



## Disaster preparedness & recovery

### Are you prepared for when things break? (they will\!)

- [ ] Who is the first to notice that something is broken?
- [ ] How long did the last 3 incidents take to report and identify?
- [ ] Backups – multiple locations  
  * Create scripts to backup the full databases at least once per day, and store them in multiple locations: **monitor this system\!\!**
- [ ] Add some stuff here
- [ ] Regardless of what you have – Make sure to **test it before you need it\!**
- [ ] Do you test it regularly?

## Security

### Are things safe?

- [ ] **Access Control:** Are permissions properly configured? Is there a need-to-know access policy?
- [ ] **Data Security**: Is sensitive data encrypted and secured?
- [ ] **Regular Security Audits:** Are you conducting periodic security checks and vulnerability assessments?

## Customer Focus

- [ ] **Customer experience:** Are you continually monitoring and improving the customer experience? How?
- [ ] **Customer Journey Mapping:** Have you mapped out the entire customer journey to identify pain points and opportunities for enhancement? Are these maps regularly reviewed and updated?
- [ ] **Churn Analysis:** Are you analyzing customer churn? Do you have strategies in place to reduce it, such as customer engagement programs or loyalty rewards?
- [ ] **Proactive Support:** Do you offer proactive customer support, anticipating and addressing issues before they become problems? Are there mechanisms to educate users about new features and updates?


## Vendor Management

- [ ] Do you assess and manage the risks associated with third-party vendors?
- [ ] How are relationships with critical vendors managed?

If you want some or all of the above to be reviewed in-depth, get in touch with me and let’s talk\!


