$(document).ready(function () {
    var stars = 900;
    var $stars = $(".stars");
    var r = 900;
    for (var i = 0; i < stars; i++) {
      var $star = $("<div/>").addClass("star");
      $stars.append($star);
    }
    $(".star").each(function () {
      var _this = $(this);
      var s = 0.2 + Math.random() * 1;
      var MathR = r + Math.random() * 400;
      _this.css({
        transformOrigin: "0 0 " + MathR + "px",
        transform:
          " translate3d(0,0,-" +
          MathR +
          "px) rotateY(" +
          Math.random() * 360 +
          "deg) rotateX(" +
          Math.random() * -50 +
          "deg) scale(" +
          s +
          "," +
          s +
          ")"
      });
    });
  });