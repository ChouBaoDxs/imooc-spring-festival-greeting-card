window.onload = function () {  // 页面渲染完才运行，也可以在script标签中加一下defer来实现
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById("page3");

  var music = document.getElementById("music");
  var audio = document.getElementsByTagName("audio")[0];

  // 当音乐播放停止时，自动停止光盘旋转效果
  audio.addEventListener('ended', function () {
    music.setAttribute("class", "music_disc");
    // music.style.animationPlayState = "paused";
  }, false);

  // music.onclick = function () {
  //   if (audio.paused) {
  //     audio.play();
  //     // this.setAttribute("class", "play");
  //     // this.style.animationPlayState = "running";  //4.4以下的android不行，iphone6之前的不行
  //     // this.style.webkitAnimationPlayState = "running";  //这样iphone就可以
  //   } else {
  //     audio.pause();
  //     // this.setAttribute("class", "");
  //     // this.style.animationPlayState = "paused";
  //     // this.style.webkitAnimationPlayState = "paused";
  //   }
  // };

  // 触控监听代替点击
  music.addEventListener("touchstart", function () {
    audio.paused ? audio.play() : audio.pause();
  }, false);

  // 点击翻页
  page1.addEventListener("touchstart", function() {
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "block";
    page3.style.top = "100%";

    setTimeout(function() {
      page2.setAttribute("class","page fadeout");
      page3.setAttribute("class","page fadein");
    }, 2500);
  }, false);
};
