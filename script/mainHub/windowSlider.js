const imageContainer = document.querySelector('.image-container');
let rightValue = parseInt(imageContainer.style.right) || 0; 
const imageContainer2 = document.querySelector('.image-container-2');
let rightValue2 = parseInt(imageContainer.style.right) || 0; 



setInterval(slideRight2, 6000);
//Currently only for image container 2
//and the image containter 2 should be applied later

function slideRight2() {
  if(rightValue2 + 300 > 600){
    rightValue2 = -300;
  }
  else{
    rightValue2 += 300;
    console.log(rightValue)
    imageContainer2.style.right = rightValue2 + 'px';
  }

}
setInterval(slideRight, 4000);
function slideRight() {
  if(rightValue + 300 > 600){
    rightValue = -300;
  }
  else{
    rightValue += 300;
    console.log(rightValue)
    imageContainer.style.right = rightValue + 'px';
  }

}
function slideLeft() {

  if(rightValue -300 < 0){
    rightValue = 900;
  }
  else{
    rightValue -= 300;
    console.log(rightValue)
    imageContainer.style.right = rightValue + 'px';
  }

}