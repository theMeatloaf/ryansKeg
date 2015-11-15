
Parse.Cloud.define("drinkBeer", function(request, response) {

  var beerEntry = Parse.Object.extend("beerEntry");
  var newBeerEntry = new beerEntry();

  var Image = require("parse-image");

  //get photo
  Parse.Cloud.httpRequest({
         url: "http://jah-box.ddns.net/snapshot.cgi?user=ryan&pwd=yoloswag",
         followRedirects: true,
         success:function(httpResponse) {
            var parseFile = new Parse.File("derp.jpg", {base64: httpResponse.buffer.toString('base64', 0, httpResponse.buffer.length)});

            newBeerEntry.set("image",parseFile);
	        //ok it worked lets save this image
	        newBeerEntry.save(null, {
		  		success: function(newBeerEntry) {
		  		     response.success("Save Success!");
		  		},
		  		error: function(newBeerEntry, error) {
		  			response.error("save Failed: "+error.message);
		  		}
			});
         },
         error:function(httpResponse) {
         	response.error("Image Download Failed: "+httpResponse.text);
         }
      });
});

Parse.Cloud.job("kegReading", function(request, response) {

	var kegStatus = Parse.Object.extend("kegeratorStatus");
  	var newKegStatus = new kegStatus();

	Parse.Cloud.httpRequest({
         url: "https://api.particle.io/v1/devices/50ff6d065067545652220387/temperature?access_token=cba42504f82d35acb0c6b4aba1a829ca392919e7",
         followRedirects: true,
         success:function(httpResponse) {
                var json = JSON.parse(httpResponse.buffer);

                var value = json.result;
              	value = Number(value);

                newKegStatus.set("currentTemp",value);

                newKegStatus.save(null, {
			  		success: function(newKegStatus) {
			  		     response.success("Save Success!");
			  		},
			  		error: function(newKegStatus, error) {
			  			response.error("save Failed: "+error.message);
			  		}
				});
         },
         error:function(httpResponse) {
         	response.error("temp reading Failed: "+httpResponse.text);
         }
      });

});