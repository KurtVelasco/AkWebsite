

//Currently only for image container 2
//and the image containter 2 should be applied later

setInterval(slideRight2,4000);
setInterval(slideRight, 5000);



var pageNumberElement = document.querySelector('.page-number-1');
var currentPage = 1;
var TotalPage = 3;

const imageContainer = document.querySelector('.image-container');
let rightValue = parseInt(imageContainer.style.right) || 0; 
function slideRight() {
  if(rightValue + 300 > 600){
    rightValue = -300;
  }
  else{
    rightValue += 300;
    imageContainer.style.right = rightValue + 'px';
  }

}

const imageContainer2 = document.querySelector('.image-container-2');
let rightValue2 = parseInt(imageContainer.style.right) || 0; 
function slideRight2() {
  if(rightValue2 + 300 > 600){
    currentPage = 1
    pageNumberElement.textContent = currentPage + "/" + TotalPage;
    rightValue2 = 0;
    imageContainer2.style.right = rightValue2 + 'px';
    console.log(rightValue2);
  }
  else{
    currentPage++;
    pageNumberElement.textContent = currentPage + "/" + TotalPage;
    rightValue2 += 300;
    imageContainer2.style.right = rightValue2 + 'px';
    console.log(rightValue2);
  }

}

function slideLeft() {

  if(rightValue -300 < 0){
    rightValue = 900;
  }
  else{
    rightValue -= 300;
    imageContainer.style.right = rightValue + 'px';
  }

}


// Will change from function()  not for lamba

const newsSingleAll = document.querySelectorAll(".news-container .news-single");

let currentActive = 0;
let totalNews = newsSingleAll.length;
let duration = 5000;

function removeAllActive() {
  newsSingleAll.forEach(function(n) {
    n.classList.remove("active");
  });
}

const changeNews = () => {
  if (currentActive >= totalNews - 1) {
    currentActive = 0;
  } else {
    currentActive += 1;
  }

  removeAllActive();
  newsSingleAll[currentActive].classList.add("active");
};

setInterval(changeNews, duration);