// FOr the work logo to be animated
(function () {
  "use strict";
  var items = document.querySelectorAll(".worklogo a img");
  // checking if the element is in viewport //
  //src = stackoverflow
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */
    );
  }
  // triggers the animation when the element is in viewport
  function callBack() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // // makes the element invisible when it is out of viewport
  // function callBackAgain(){
  //     for(let i = 0; i< items.length; i++){
  //         if(!isElementInViewport(items[i])){
  //             items[i].classList.remove("in-view");
  //         }
  //     }

  // }
  window.addEventListener("load", callBack);
  window.addEventListener("scroll", callBack);
  window.addEventListener("resize", callBack);

  // window.addEventListener('load',callBackAgain);
  // window.addEventListener('scroll',callBackAgain);
  // window.addEventListener('resize',callBackAgain);
})();

//For responsive navigation bar
function myFunction() {
  var x = document.getElementById("icon-bar");
  if (x.className === "icon-bar") {
    x.className += " responsive";
  } else {
    x.className = "icon-bar";
  }
}
