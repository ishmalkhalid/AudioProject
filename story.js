var navbar=document.getElementById('navbar');

var vid1=document.getElementById('vid1');
var vid2=document.getElementById('vid2');
var vid3=document.getElementById('vid3');
var vid4=document.getElementById('vid4');
var vid5=document.getElementById('vid5');

var vid1_wrapper=document.getElementById('vid1Wrapper');
var vid2_wrapper=document.getElementById('vid2Wrapper');
var vid3_wrapper=document.getElementById('vid3Wrapper');
var vid4_wrapper=document.getElementById('vid4Wrapper');
var vid5_wrapper=document.getElementById('vid5Wrapper');

var aud=document.getElementById('myAudio');


var playButton=document.getElementById('btn-play');
var pauseButton=document.getElementById('btn-pause');

playButton.addEventListener("click",function(){
  // playButton.style.display="none";
  console.log('hello');
  vid1.play();
  aud.play();
  // aud.volume=0;
});

pauseButton.addEventListener("click",function(){
  vid1.pause();
  aud.pause();
  // aud.volume=0;
})

var timestamp=[];
timestamp=[29,95,140,186];
var visited=[];
visited=[false,false,false,false];
var backgroundColors=[];
backgroundColors=["#1f471f","#808080","black","#800000"];

aud.ontimeupdate = function(){
  console.log(aud.currentTime);
  if (Math.floor(aud.currentTime)==timestamp[0] && !visited[0]){
    navbar.style.backgroundColor=backgroundColors[0];

    visited[0]=true;
    vid1_wrapper.style.opacity=0;
    vid1.style.opacity=0;
    vid1.pause();
    vid1.currentTime=0;

    setTimeout(function() {
      vid1.style.display='none';
      vid1_wrapper.style.display='none';
      vid2_wrapper.style.display='block';
      vid2_wrapper.style.opacity=1;
      vid2.style.opacity=1;
      vid2.play();
    }, 200);
  }

  else if (Math.floor(aud.currentTime)==timestamp[1] && !visited[1]) {
    navbar.style.backgroundColor=backgroundColors[1];

    visited[1]=true;
    // vid2_wrapper.style.opacity=0;
    // vid2.style.opacity=0;
    // vid2.pause();
    // vid2.currentTime=0;
    //
    // setTimeout(function() {
    //   vid2.style.display='none';
    //   vid2_wrapper.style.display='none';
    //   vid3_wrapper.style.display='block';
    //   vid3_wrapper.style.opacity=1;
    //   vid3.style.opacity=1;
    //   vid3.play();
    // }, 200);
  }
  else if (Math.floor(aud.currentTime)==timestamp[2] && !visited[2]) {
    navbar.style.backgroundColor=backgroundColors[2];

    visited[2]=true;
    // vid3_wrapper.style.opacity=0;
    // vid3.style.opacity=0;
    // vid3.pause();
    // vid3.currentTime=0;
    //
    // setTimeout(function() {
    //   vid3.style.display='none';
    //   vid3_wrapper.style.display='none';
    //   vid4_wrapper.style.display='block';
    //   vid4_wrapper.style.opacity=1;
    //   vid4.style.opacity=1;
    //   vid4.play();
    // }, 200);
  }
  else if (Math.floor(aud.currentTime)==timestamp[3] && !visited[3]) {
    navbar.style.backgroundColor=backgroundColors[3];

    visited[3]=true;
    vid2_wrapper.style.opacity=0;
    vid2.style.opacity=0;
    vid2.pause();
    vid2.currentTime=0;

    setTimeout(function() {
      vid2.style.display='none';
      vid2_wrapper.style.display='none';
      vid5_wrapper.style.display='block';
      vid5_wrapper.style.opacity=1;
      vid5.style.opacity=1;
      vid5.play();
    }, 200);
  }
  //else if (aud.currentTime==timestamp[3]) {}
}
