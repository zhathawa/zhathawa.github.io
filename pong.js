function Paddle(elem, x, y) {
  this.elem = elem;
  this.x = x;
  this.y = y;


  this.move = function(dy) {
    this.y += dy;
  }
}

p1 = new Paddle(
  $("#myName"), 0, 100
)

var playBall = function() {

}

var startBall = function() {
  var animationCount = 0;
  // document.querySelector("#myNameRow").addEventListener("animationend", () => {
  //   document.querySelector("body").addEventListener("mousemove", () => {
  //     var rect = document.querySelector("#myName").getBoundingClientRect();
  //     var updateVal = rect.x - event.clientY + rect.height/2;
  //     document.querySelector("#myName").style.transform = "translateX(" + updateVal + "px)";
  //
  //   });

    document.querySelector("#iconPaddle").addEventListener("animationend", () => {
      document.querySelector("#icp").classList.remove("text-center", "mt-5");
      document.querySelector("body").addEventListener("mousemove", () => {
        var rect = document.querySelector("#icp").getBoundingClientRect();
        var updateVal = event.clientY - rect.x/2 - rect.width/2;
        document.querySelector("#icp").style.transform = "translateX(" + updateVal + "px)";
      });
});

  document.querySelector("#ball").addEventListener("animationend", () => {
    if (animationcount == 2)
      playBall();
  });

  $("#myNameRow").css({"--maxRot": "-90deg", "--xp": "-50%", "--yp": "0%"});
  $("#myNameRow").addClass("paddleAnimate");

  $("#iconPaddle").css({"--maxRot": "90deg", "--xp": "50%", "--yp": "0%"});
  $("#iconPaddle").addClass("paddleAnimate");
}

$(document).ready(function() {

});


// $("#myName").css(
//   {"-webkit-transform":"rotate(-90deg)",
//   "-moz-transform": "rotate(-90deg)",
//   "-ms-transform": "rotate(-90deg)"
// });

//
// $("#myName").animate(
//     // {"-webkit-transform":"rotate(-90deg)",
//     // "-moz-transform": "rotate(-90deg)",
//     // "-ms-transform": "rotate(-90deg)",
//     //"-o-transform": "rotate(-90deg)",
//     {"transform": "rotate(-90deg)"
//   }, 5000);
