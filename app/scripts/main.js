'use strict';

function animateToPoint(point) {
  $('#liquid') // I Said Fill 'Er Up!
    .delay(1000)
    .animate({
      height: point + 'px'
    }, 2500);
  
  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(1000)
    .animate({
      bottom: (point - 100) + 'px'
      }, 2500);
}

// percent is (0.0-1.0)
function animateToPercent(percent) {
  var height = window.innerHeight;
  var point = height * percent;
  animateToPoint(point);
}

function changePercentFromForm() {
  var value = $('#temp').val();
  animateToPercent(value);
}

$(document).ready(function() {
  animateToPercent(0.3);
});


