---
layout: page
title:  "The state of UX in 2019"
date:   2018-12-09 10:00:00 +0200
author: Amando Abreu
categories:
comments: true
newsletter: true
image: /assets/images/posts/cat.jpg
---
<style type="text/css">
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

button {
  border: 0;
  background: none;
  cursor: pointer;
}

.m-privacy-consent {
  background-color: rgba(60, 60, 60, 0.95);
  bottom: 0;
  color: white !important;
  font-size: 17px !important;
  font-weight: normal !important;
  line-height: 1.5em !important;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 5000001;
}

.m-privacy-consent__inner {
  margin: 0 auto;
  max-width: 800px;
  padding: 30px;
}

.m-privacy-consent__inner button:disabled {
  background-color: #888;
}

.m-privacy-consent__inner button {
  background-color: #4f7177;
  border: 1px solid white;
  color: #ffffff;
  display: block;
  font-weight: bold;
  height: 46px;
  line-height: 46px;
  padding: 0 2em;
  margin: 0 auto;
  min-width: 200px;
}

.m-privacy-consent__button-content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.m-privacy-consent__inner a:hover {
  color: #ccc !important;
}

.m-privacy-consent__inner a {
  color: white !important;
  font-weight: bold;
  text-decoration: underline !important;
}

button:disabled .m-privacy-consent__hourglass {
  display: block;
}
.m-privacy-consent__hourglass {
  display: none;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 3px solid rgba(255, 255, 255, 0.2);
  border-right: 3px solid rgba(255, 255, 255, 0.2);
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  border-left: 3px solid #ffffff;
  margin-right: 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}

.m-privacy-consent__hourglass,
.m-privacy-consent__hourglass:after {
  border-radius: 50%;
  width: 20px;
  height: 20px;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  z-index: 9999;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}
#popup1 {
  font-family: poppins;
}
#popup1 .popup {
  margin: 0px auto;
  padding: 50px 20px;
  background: #fff;
  border-radius: 0px;
  height: 260px;
  width: 690px;
  position: relative;
  text-align: center;
  top: 50% !important;
  position: fixed !important;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 0px;
  left: 0;
}
#popup1 .popup h2 {
  margin-top: 0;
  color: #333;
}
#popup1 .popup .close {
  position: absolute;
  top: 0px;
  right: 0px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: normal;
  text-decoration: none;
  text-align: center;
  background: #333;
  border-radius: 0;
  cursor: pointer;
  float: right;
  padding: 0;
  color: #fff;
  margin-top: 0;
  margin-right: 0;
  height: 40px;
  width: 40px;
  line-height: 45px;
}
#popup1 .popup .close:hover {
  color: #06d85f;
}
#popup1 .popup .content {
  max-height: 30%;
  overflow: auto;
}
#popup1 .newletter-title h2 {
  font-size: 24px;
  text-transform: uppercase;
  color: #000;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 15px;
}
#popup1 .box-content label {
  font-weight: 400;
  max-width: 560px;
  display: inline-block;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 26px;
}
.newletter-popup {
  background: #fff;
  top: 50% !important;
  position: fixed !important;
  padding: 0;
  text-align: center;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
#popup1 #frm_subscribe #subscribe_pemail {
  background: #ebebeb none repeat scroll 0% 0%;
  border: medium none;
  height: 40px;
  width: 65%;
  margin: 20px 0;
  padding-left: 15px;
}
#popup1 #frm_subscribe a {
  cursor: pointer;
  border: none;
  background: #333;
  padding: 3px 25px;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  line-height: 34px;
  display: inline-block;
  border-radius: 0;
  letter-spacing: 2px;
}
#popup1 .box-content .subscribe-bottom {
  margin-top: 20px;
}
#popup1 .box-content .subscribe-bottom #newsletter_popup_dont_show_again {
  display: inline-block;
  margin: 0;
  vertical-align: middle;
  margin-top: -1px;
}
#popup1 .box-content .subscribe-bottom label {
  margin: 0;
  font-weight: 400;
  max-width: 650px;
  display: inline-block;
  margin-bottom: 5px;
  font-size: 12px;
}

</style>

<div class="m-privacy-consent" id="privacy-consent">
  <div class="m-privacy-consent__inner">
    <p>We use cookies and other tracking technologies to improve your browsing experience on our site, show personalized content and targeted ads, analyze site traffic, and understand where our audience is coming from. To find out more or to opt-out, please read our <a href="#">Cookie Policy</a>. In addition, please read our <a href="#">Privacy Policy</a>, which has also been updated and became effective May 23rd, 2018.</p>
<p>By choosing <b>I Accept</b>, you consent to our use of cookies and other tracking technologies.</p>
    <button type="button" id="accept-privacy-consent">
      <div class="m-privacy-consent__button-content">
        <div class="m-privacy-consent__hourglass"></div>
        I Accept
      </div>
    </button>
  </div>
</div>

<div id="popup1" class="overlay">
  <div class="popup"> <a class="close" href="#">&times;</a>
    <div id="dialog" class="window">

      <div class="box">
        <div class="newletter-title">
          <h2>Sign up &amp; get 10% off</h2>
        </div>
        <div class="box-content newleter-content">
          <label>Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers.</label>
          <div id="frm_subscribe">
            <form name="subscribe" id="subscribe_popup">
              <div>
                <!-- <span class="required">*</span><span>Email</span>-->
                <input type="text" value="" name="subscribe_pemail" id="subscribe_pemail">
                <input type="hidden" value="" name="subscribe_pname" id="subscribe_pname">
                <div id="notification"></div>
                <a class="button" onclick="email_subscribepopup()"><span>Submit</span></a> </div>
            </form>
            <div class="subscribe-bottom">
              <input type="checkbox" id="newsletter_popup_dont_show_again">
              <label for="newsletter_popup_dont_show_again">Don't show this popup again</label>
            </div>
          </div>
          <!-- /#frm_subscribe -->
        </div>
        <!-- /.box-content -->
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary skip" href="#popup1" style="visibility:none; display:inline-block;">OPEN POPUP</a>

Do you believe everyone is able to hold nearly the same complex thoughts in their head?

- Everyone can fall in love
- Everyone can enjoy doing _something_(from video games to golf)
- Everyone can enjoy music(any genre)

How would you explain why those things happen? Why do you enjoy things? Do you think you enjoy them for the same resons others do?

You could start the argument by finding things in common with your intellectual opponent, and taking it from there, but you’d eventually get stuck trying to fit your point-of-view into theirs.

Everyone is able to hold incredibly complex thoughts in their mind, but the problem happens when you have to bring them out into the world using a form of communication.

Communication is arguably the most complex thing humans have to do in order to share knowledge and collaborate, and all disagreements between people stem from this.

### Why I kind of disagree with JP

It's not really a disagreement, I'm 80% to 99% sure he simply didn't want to explain it too deeply.

Any time you try to understand a theory, you can either focus on the theory in itself, or in the person.

But what if we do both? A theory without the person is much harder to understand.

If someone comes up with a theory that claims:

> 50% of cars on the road are Teslas

He’s wrong as shit, it’s a shit theory.

But if he now tells you that [he lives in Norway,](https://nordic.businessinsider.com/tesla-is-the-most-popular-carmaker-in-norway-this-month--/) and likes Teslas, you will understand that he sees an above average number of Teslas every day, and since he likes them, he focuses on them more than other cars.

Now you understand the theory and the person. This allows you to understand and communicate with them. And nudge them into realizing it's a dead end.

### Deconstructing theories:

Theories are incredibly personal forms of communication, and arguably no theory is true(assuming each person has their own theories, that's 7.6 Billion * average_number_of_theories_per_person), so instead of choosing either [multiverse or universe](https://www.youtube.com/watch?v=Pb1DUzcggtQ), take a step back and think, you might come up with your own new theory and create a new field of study!

It may sound like an incredibly naïve approach, which it is. I don’t need to understand MBTI if I never intend to collaborate with people who speak the MBTI language, however, if I want to point out fallacies in the theory, I’ll need to understand the theory and people involved in it extremely well, and hope they have the time, patience, and maturity to hear me out.

It’s the only way to communicate.

> But I don’t _have_ to tell them they’re wrong.

You’re right, except in one case, which is:

If the Tesla guy now starts acting upon his theory and hurts someone because of negligent behaviour. Someone will have to step in.

In the case of MBTI, the negligent behaviour would be the fact that it's sold to companies as a way to assess employees, even though it predicts absolutely nothing in terms of workplace performance. If a company wants a personality test that works well, the best option is the Big 5 personality test.

<script>
var cookieButton = document.getElementById("accept-privacy-consent");
cookieButton.addEventListener("click", function(event){
  this.disabled = "disabled";
});

window.setTimeout(function(){
  /*var overlay = document.querySelector('.overlay');
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";*/
  var skip = document.querySelector('.skip');
  var clickMe = new MouseEvent('click');
  skip.dispatchEvent(clickMe);
}, 2000);

var close = document.querySelector('.close');
close.addEventListener('click', function(){
  window.setTimeout(function(){
     var skip = document.querySelector('.skip');
    var clickMe = new MouseEvent('click');
    skip.dispatchEvent(clickMe);
  },3000);
});

Notification.requestPermission().then(function(result) {

  // Do something with the granted permission.
});
</script>
