---
layout: default
title: contact
listed: yes
---
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.14/angular.js"></script>
<script src="https://fdelbos.github.io/coolforms/static/coolforms.js" type="text/javascript"></script>

 <style type="text/css">
 * { box-sizing: border-box; position:relative;}

body {
  background: #2D82CB;
  font-family: "lato", sans-serif;
  color: rgba(255,255,255,0.7);
}

#form-wrapper {
  margin-top: 80px;
  height:450px;
  transition: all 1s ease;
  overflow: hidden;
}
#form-wrapper.answering {
  height: 150px;
  overflow: hidden;
}

.question {
  min-width: 600px;
  width:30%;
  margin: 0 auto;
  height: 30px;
  overflow: hidden;
}
.question, .question * {transition: all 0.3s ease;}
.question .q-back {opacity:1;}
.question label {font-size: 20px; padding-left:20px;}
.question input, .question .q-next {display: none;}
.question .q-text {height:30px;line-height:30px;}
.question .q-answer {display:inline; color: rgba(0,0,0,.8);}

.question.open {height: 90px; margin-bottom: 150px;}
.question.open label {font-size: 30px;}
.question.open .q-back {opacity: 0;}
.question.open input {display: block;}
.question.open .q-next {display: block;}
.question.open .q-text {height:40px;line-height:40px;}
.question.open .q-answer {display:none;}

.q-next {
  display: block;
  position: absolute;
  bottom: 5px;
  right:0px;
  padding: 0 10px;
  height: 45px;
  line-height:45px;
  text-align:center;
  font-size: 30px;
  cursor: pointer;
} .q-next:hover {background: rgba(255,255,255,.1);}

.q-back {
  position:absolute;
  top:0px;
  left:0px;
  color:rgba(0,0,0,.8);
  width: 100%;
  cursor: pointer;
  font-size:20px;
  line-height: 30px;
  padding-left: 4px;
} .q-back:hover {background: rgba(255,255,255,.1);}

.q-text {
  max-height: 40px;
  overflow:hidden;
  display:block;
}

label {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 40px;
}

input {
  border: 0px;
  outline: 0;
  box-shadow: 0;
  background: rgba(0,0,0,.15);
  border-bottom: 5px solid rgba(0,0,0,.05);
  color: black;
  width:100%;
  height:50px;
  line-height:50px;
  padding: 0 10px;
  font-size: 30px;
}


.q-title {
  text-align: center;
  line-height: 150px;
  font-size: 40px;
  font-weight: bold;
}

.q-after {
  width: 400px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px 0;
}
.q-confirm-text {
  font-size: 20px;
  padding: 20px 0;
}
.q-confirm-button {
  transition: all 0.3s ease;
  display: block;
  padding: 0 10px;
  padding-left: 50px;
  height: 40px;
  line-height:40px;
  width: 50%;
  font-size: 20px;
  cursor: pointer;
  background: rgba(255,255,255,.3);
  text-transform: uppercase;
  color: white;
} .q-confirm-button:hover {background: rgba(255,255,255,.1);}
.q-confirm-button:before {
  content: '>';
  display: block;
  position:absolute;
  top: 0px;
  left: 0px;
  width: 40px;
  height: 100%;
  background: rgba(255,255,255,.1);
  text-align:center;
  line-height: 40px;
  font-size: 25px;
  color: white;
}

hr {
  box-shadow: 0px;
  outline: 0px; border:0px;
  height: 1px;
  background: rgba(255,255,255,.2);
}


 </style>
<div class="centerwrapper centerwrapper--medium" style="margin-top:100px">
 <div ng-app="CoolForm" class="wrapper">
  
  <div cool-form>
    <div class="q-title">Join the sales team!</div>
    <div ng-repeat="q in questions" class="question">
      <label>
        <span class="q-text">
          {{q.question}}
          <span class="q-answer">
            {{q.answer}}
          </span>
        </span>
        <input type="text" id="q{{$index}}" ng-model="q.answer">
        <span class="q-back" ng-click="open($index)"><</span>
      </label>
      <span class="q-next" ng-click="open($index+1)">></span>  
    </div>
    <div class="q-after">
      <hr>
      <div class="q-confirm-text">Is the above information correct?</div>
      <div class="q-confirm-button">Absolutely</div>
    </div>
  </div>
  <center ng-show="activequestion > -1 && activequestion < questions.length">{{activequestion+1}} / {{questions.length}}</center>
  
</div>
</div>

