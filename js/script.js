


document.getElementById("contact").addEventListener('click',function(){
    
    document.getElementById("contact-section").style.visibility="visible";
    document.getElementById("about-section").style.visibility="hidden";
     document.getElementById("offers-section").style.visibility="hidden";
     document.getElementById("menu-section").style.visibility="hidden";
    
 });
 document.getElementById("menu").addEventListener('click',function(){
     document.getElementById("menu-section").style.visibility="visible";
     document.getElementById("contact-section").style.visibility="hidden";
     document.getElementById("about-section").style.visibility="hidden";
     document.getElementById("offers-section").style.visibility="hidden";
  });
  document.getElementById("offers").addEventListener('click',function(){
    document.getElementById("menu-section").style.visibility="hidden";
    document.getElementById("contact-section").style.visibility="hidden";
    document.getElementById("about-section").style.visibility="hidden";
    document.getElementById("offers").style.visibility="visible";
   
 });
 document.getElementById("about").addEventListener('click',function(){
    document.getElementById("menu-section").style.visibility="hidden";
    document.getElementById("contact-section").style.visibility="hidden";
    document.getElementById("about-section").style.visibility="visible";
    document.getElementById("offers-section").style.visibility="hidden";
 
 });