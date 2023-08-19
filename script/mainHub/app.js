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
