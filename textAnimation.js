// Wrap every letter in a span
var nav=document.getElementById('navbar');
window.addEventListener("scroll",function(){
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
    // nav.style.display="block";
    nav.style.backgroundColor="#5e86a0";
  }
  else if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
    // nav.style.display="block";
    nav.style.backgroundColor="#19141a";
  }
  else if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    nav.style.display="block";
    nav.style.backgroundColor="#001b2c"
  }
  else{
    nav.style.backgroundColor="transparent";
  }
})

var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml13 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });


document.onload=function(){
  setTimeout(function(){

  },650);
}

var textWrapper = document.querySelector('.ml132');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml132 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 400 * (i+1)
  });


document.onload=function(){
  setTimeout(function(){

  },650);
}
