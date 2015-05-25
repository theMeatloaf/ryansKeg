'use strict';

$(document).ready(function() {
  getBeers();
});


function getBeers()
{
    var beerUrl = "https://api.spark.io/v1/devices/50ff6d065067545652220387/beersLeft/?access_token=cba42504f82d35acb0c6b4aba1a829ca392919e7";

    $.get(beerUrl, function(data, status){
      var value = data.result;
      value = Number(value).toFixed(0);
      animateToBeers(value);
    });

    return;
}

function animateToBeers(beersLeft) {
  var height = window.innerHeight;
  var point = Math.max(150,(height*0.7) * (beersLeft / 53.0));
  point = Math.min(point,height*0.62);

  $('#liquid') // I Said Fill 'Er Up!
    .delay(1000)
    .animate({
      height: point + 'px'
    },
    {
      duration:2500,
      easing:'easeOutCubic'
    });

  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(1000)
    .animate({
      bottom: (point - 100) + 'px'
      }, 
      {
            duration: 2500,
            easing:'easeOutCubic',
            progress: function(animation, progress) {
                var curVal = Number(progress*beersLeft).toFixed(0);
               $("#Nbeers").html("&nbsp&nbsp"+curVal +" Beers Left &nbsp;&nbsp;");
            }
      });
}
