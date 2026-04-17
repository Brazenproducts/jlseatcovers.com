document.addEventListener('DOMContentLoaded',function(){
  var btn=document.querySelector('.hamburger');
  var nav=document.querySelector('nav ul');
  if(btn&&nav){btn.addEventListener('click',function(){nav.classList.toggle('open')})}
});
