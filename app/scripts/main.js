'use strict';

console.log('\'Allo \'Allo!');

$(document).ready(function() {

  
  var animateTo = 50;

  animateTo = animateTo*.75;

  $('#liquid') // I Said Fill 'Er Up!
    .delay(1000)
    .animate({
      height: animateTo + '%'
    }, 2500);
  
  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(1000)
    .animate({
      bottom: (animateTo - 15) + '%'
      }, 2500);
  });

