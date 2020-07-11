let buttonShare = document.querySelector('#icon-share');
let blockInvisible = document.querySelector(".social-media");

buttonShare.addEventListener('click', function() {

  if(blockInvisible.classList.contains('visible')) {
    blockInvisible.classList.remove('visible');
  } else {
    blockInvisible.classList.add('visible');
  }
  
});