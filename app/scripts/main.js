'use strict';

$(document).ready(function() {
  getBeers();
});


function getBeers()
{
    var beerUrl = "https://api.particle.io/v1/devices/200033001447343339383037/beersLeft/?access_token=cba42504f82d35acb0c6b4aba1a829ca392919e7";

    $.get(beerUrl, function(data, status){
      var value = data.result;
      value = Number(value).toFixed(0);
      animateToBeers(value);

      //load images for gallery
      loadNewGallery();

      //sparkcoreLogic.js to load all the other values
      loadAll();
    });
}

//this is where the gallery load would go...if we ever make a new backend
function loadNewGallery() {

}

function loadGallery()
{
    Parse.initialize("BbItMQIZYMRPVXCHHp7veIWVtjsfRoG7U0QA3tZg", "Wcseuh8TpmsTm7cYPmSkFF9oBVtlLG5BtRlYgXjM");
  
    var beerEntry = Parse.Object.extend("beerEntry");
    var query = new Parse.Query(beerEntry);
    query.descending("createdAt");
    query.limit(30);
    query.find({
      success: function(results) {
        //got objects
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          var date = object.get("createdAt");
          var dateString = date.toLocaleString('en-US');
          var html = "<a href='" + object.get("image").url() + "' data-lightbox='gallery' data-title='"+
          dateString+"'>";
          if(i==0)
          {
            html = html +"<h3>Recent<br>Drinker<br>Gallery</h3>";
          }
          html = html+"</a>"; 
          $('#gallery').append(html);
        }
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function animateToBeers(beersLeft) {
  var height = window.innerHeight;
  var totalBeers = 55.0
  var minHeight = 150.0
  var maxHeight = (height * 0.70)
  //calculate and put between min and max
  var point = Math.max(minHeight,maxHeight * (beersLeft / totalBeers));
  point = Math.min(point,maxHeight);

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
