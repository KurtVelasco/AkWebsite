let musicName
let audio


function searchOperator() {
  let chrImg = document.getElementById("searched-item");
  
  if (chrImg.classList.contains("show")) {
    chrImg.classList.remove("show");
  } 
  else {
    chrImg.src = "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/avg/ui/act6d5_story01_large.png";
    chrImg.offsetWidth;
    chrImg.classList.add("show");
  }
}
function selectMusic() {
  let dropdown = document.getElementById('music-list-dropdown');
  musicName = dropdown.value;
  jukeBox();
}

function jukeBox() {
  audio = document.getElementById("music-player");
  if (audio.paused) {// set the src attribute before playing
    audio.src = musicName;
    var select = document.getElementById
    audio.play();
  } else { 
    audio.pause();
  }
}


var videoSources = [
  "https://re1999.bluepoch.com/countdown/data/bg-video1.mp4",
  "https://re1999.bluepoch.com/cbt/en/assets/media/kvvideo.mp4",
  "https://re1999.bluepoch.com/kv/1.mp4"
];

var currentIndex = 0;

function changeVideo() {
  var videoList = document.getElementById('bg-video');
  var sourceElement = videoList.querySelector('source');

  videoList.style.opacity = 0; // Fade out

  setTimeout(function() {
    sourceElement.setAttribute('src', videoSources[currentIndex]);
    videoList.load();
    videoList.play();
    console.log("Video source replaced:", videoSources[currentIndex], currentIndex);
    currentIndex = (currentIndex + 1) % videoSources.length;
    videoList.style.opacity = 1; // Fade in
  }, 500); // Delay the video source change to match the transition duration
}

//setInterval(changeVideo, 10000);