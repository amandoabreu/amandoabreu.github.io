---
layout: default
title: contact
listed: yes
---
<!--<style type="text/css"> html{ margin: 0; height: 100%; overflow: hidden; } iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; } </style>
 <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/vAy9JQ?typeform-medium=embed-snippet"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>-->

 <style type="text/css">
    .form-container {
  background: #2462b3;
  background: #FFF;
  border: 2px solid #2462b3;
  padding: 40px;
  margin-bottom: 40px;
  margin: 2rem auto;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  text-align: center;
  position: relative;
}

.form-label {
  position: absolute;
  top: 0;
  left: 3rem;
  background: #FFF;
  padding: 0.5rem 1rem;
  margin: 0;
  transform: translateY(-50%);
  color: #2462b3;

  &:before,
    &:after{
		content: "";
		position: absolute;
		height: 50%;
		width: 100%;
		left: 0;
		z-index: -1;
    }

    &:before{
		background: #ecf0f1;
		top: 0;
    }

    &:after{
    	background: #FFF;
    	bottom: 0;
    }
}


/* container sorrounding message */

.message-form-control {
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 1rem;
  box-shadow: 0 0 0 1px #2462b3;
  transition: all 0.5s ease;
}

.message-form-control:focus {
  outline: 0;
  box-shadow: 0 0 0 2px #2462b3;
}

.message-form-control::-webkit-input-placeholder {
  color: #2462b3;
  font-size: 18px;
  line-height: 100px;
  transition: all 0.5s ease;
  margin: 0 auto;
}

.message-form-control:focus::-webkit-input-placeholder {
  color: #AAA;
  font-size: 12px;
  line-height: 12px;
  padding-left: 0%;
}


/* Button styling */

.button {
  background: #FFF;
  border-radius: 0;
  font-family: 'Roboto', sans-serif;
  color: #2462b3;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 40px;
  border: 2px solid #2462b3;
  text-align: center;
}

.button:hover {
  background: #2462b3;
  color: #FFF;
  border: 2px solid #2462b3;
}

.button.raised {
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0);
}

.button.raised:hover {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
}

.button.raised:active {
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
}


/* form starting stylings*/

.group {
  position: relative;
  margin-bottom: 45px;
}

input {
  background: transparent;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #2462b3;
}

input:focus {
  outline: none;
}


/* LABEL */

label {
  color: #2462b3;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
}


/* active state */

input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #2462b3;
}


/* BOTTOM BARS */

.bar {
  position: relative;
  display: block;
  width: 50%;
}

.bar:before,
.bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #2462b3;
  transition: 0.2s ease all;
}

.bar:before {
  left: 100%;
}

.bar:after {
  right: 0%;
}


/* active state */

input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 100%;
}


/* HIGHLIGHTER */

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}


/* active state */

input:focus ~ .highlight {
  animation: inputHighlighter 0.3s ease;
}


/* ANIMATIONS */

@keyframes inputHighlighter {
  from {
    background: #5264AE;
  }
  to {
    width: 0;
    background: transparent;
  }
}
 </style>
<div class="centerwrapper centerwrapper--medium" style="margin-top:100px">
 <div class="container-form">
    <div class="form-container front">
    	<h1 class="form-label">Say something</h1>
        <form name="contact" netlify>
            <div class="group">
                <input name="user-name" type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Name</label>
            </div>
            <div class="group">
                <input name="user-email" type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Email</label>
            </div>
            <!-- Message body -->
            <textarea class="message-form-control" id="message" name="message" placeholder="Message" rows="5"></textarea>
            <input type="submit" class="button raised btn btn-primary btn-lg">
        </form>
    </div>
</div>
</div>

