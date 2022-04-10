---
title: ddddd
description: ddddd
newsletter: true
comments: true
author: amando
date: 2022-04-09 06:48:38
---
<script type="text/javascript">
    //const apiApplyBtn = document.getElementById('apiApplyBtn');
    //const closeApiApplyBtn = document.getElementById('closeApiApplyBtn');
    
    function openApiApplyOverlay(){
      alert("hhh");
      document.getElementById('apiApplyOverlay').style.display ='block';
    }

    function closeApiApplyOverlay(){
      alert("hhh");
      document.getElementById('apiApplyOverlay').style.display ='none';
    }

    //apiApplyBtn.addEventListener('click', function(){
     //   document.getElementById('apiApplyOverlay').style.display ='block';
    //});

    //closeApiApplyBtn.addEventListener('click', function(){
     //   document.getElementById('apiApplyOverlay').style.display ='none';
    //});
</script>
<link rel="stylesheet" href="https://www.api-apply.com/css/embed.css">
  <div class="apply">
  <button class="applyBtn" onclick="openApiApplyOverlay()" id="apiApplyBtn">Apply</button>
  <div class="apiApplyOverlay" id="apiApplyOverlay"> 
    <div class="apiApplyIframeWrapper">
      <iframe frameborder="0" height="550" width="100%" src="https://api-apply.com/embed/?jobId=#jobId"></iframe>
      <button class="applyBtn" onclick="closeApiApplyOverlay()" class="closeApiApplyBtn">Done</button>   
    </div> 
  </div>
</div> 