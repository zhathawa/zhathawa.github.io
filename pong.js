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

var fireBall = function() {
  $("#ball").css("--maxRot", "-90deg");
  $("#ball").addClass("paddleAnimate");

  
}

var playBall = function() {
  fireBall();
}

var startBall = function() {
  var animationCount = 0;
  document.querySelector("#iconPaddle").addEventListener("animationend", () => {
    document.querySelector("#icp").classList.remove("text-center", "mt-5");
    document.querySelector("body").addEventListener("mousemove", () => {
      var rect = document.querySelector("#icp").getBoundingClientRect();
      var updateVal = event.clientY - rect.x/2 + 4*rect.width;
      document.querySelector("#icp").style.transform = "translateX(" + updateVal + "px)";
    });
  });

  document.querySelector("body").addEventListener("animationend", () => {
    animationCount += 1;
    if (animationCount >= 2) {
      setTimeout(playBall, 50);
    }
  });

  $("#myNameRow").css({"--maxRot": "-90deg", "--xp": "-50%", "--yp": "0%"});
  $("#myNameRow").addClass("paddleAnimate");

  $("#iconPaddle").css({"--maxRot": "90deg", "--xp": "50%", "--yp": "-125%"});
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
