function switchPic(whichPic){
  var targetSrc=whichPic.getAttribute("href");
  var currentSrc=document.getElementById("placeholder");
  currentSrc.setAttribute("src",targetSrc);


}
