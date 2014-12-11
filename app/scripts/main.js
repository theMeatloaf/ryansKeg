'use strict';

console.log('\'Allo \'Allo!');

$(document).ready(function() {

  
  var animateTo = 240;

  $('#liquid') // I Said Fill 'Er Up!
    .delay(1000)
    .animate({
      height: animateTo + 'px'
    }, 2500);
  
  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(1000)
    .animate({
      bottom: (animateTo - 100) + 'px'
      }, 2500);
  });

