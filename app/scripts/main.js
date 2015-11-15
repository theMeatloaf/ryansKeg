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

      //sparkcoreLogic.js to load all the other values
      loadAll();
    });
}

function loadGallery()
{
    Parse.initialize("BbItMQIZYMRPVXCHHp7veIWVtjsfRoG7U0QA3tZg", "Wcseuh8TpmsTm7cYPmSkFF9oBVtlLG5BtRlYgXjM");
  
    var beerEntry = Parse.Object.extend("beerEntry");
    var query = new Parse.Query(beerEntry);
    query.descending("createdAt");
    query.limit(10);
    query.find({
      success: function(results) {
        //got objects
        for (var i = 0; i < results.length-2; i++) {
          var object = results[i];
          $('.galleria').append("<img src='"+object.get("image").url()+"'>");
        }

          Galleria.loadTheme('scripts/themes/classic/galleria.classic.min.js');
          Galleria.run('.galleria');
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
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
