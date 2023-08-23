let musicName
let audio


function searchOperator() {
  let input = document.getElementById("search-bar").value;
  let chrImg = document.getElementById("searched-item");
  chrImg.classList.remove("show");
  chrImg.src = "website-library/" + input + ".png";
  chrImg.offsetWidth;
  chrImg.classList.add("show");
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