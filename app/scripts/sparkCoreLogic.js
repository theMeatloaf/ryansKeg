'use strict';

var leftValue;
var LoadingSpinner = "<img src='images/load.gif' class='loader'>";

          function loadAll()
          {
            getTemp(true);
          }

          function getTemp(withHoldTemp)
          {
              leftValue = null;

              var tempUrl = "https://api.particle.io/v1/devices/50ff6d065067545652220387/temperature?access_token=cba42504f82d35acb0c6b4aba1a829ca392919e7";

              $.get(tempUrl, function(data, status){
                if (leftValue) {
                  leftValue = data.result +"&deg;F" + leftValue;
                }else
                {
                  leftValue = data.result +"&deg;F";
                }
                if(leftValue.length>95)$("#Ctemp").html(leftValue);
              
                getFridgeStatus(withHoldTemp);
              });
              
          }

          function getFridgeStatus(withHoldTemp)
          {
              var statusUrl = "https://api.particle.io/v1/devices/50ff6d065067545652220387/fridgeStatus?access_token=cba42504f82d35acb0c6b4aba1a829ca392919e7";

              $.get(statusUrl, function(data, status){
                if(data.result == true)
                {
                  var downArrow = "<font color='blue'><span class='glyphicon glyphicon-arrow-down' aria-hidden='true'></span></font>";
                  if(leftValue)
                  {
                    leftValue = leftValue + downArrow;
                  }else
                  {
                    leftValue = downArrow;
                  }
                }else
                {
                  var upArrow = "<font color='red'><span class='glyphicon glyphicon-arrow-up' aria-hidden='true'></span></font>";
                   if(leftValue)
                  {
                    leftValue = leftValue + upArrow;
                  }else
                  {
                    leftValue = upArrow;
                  }
                }
                if(leftValue.length>95)$("#Ctemp").html(leftValue);
              
                if (withHoldTemp)
                {
                  getHoldTemp();
                }
              });
              
          }

          function getHoldTemp()
          {
              var holdUrl = "https://api.particle.io/v1/devices/50ff6d065067545652220387/goalTemp?access_token=cba42504f82d35acb0c6b4aba1a829ca392919e7";

              $.get(holdUrl, function(data, status){
              var value = data.result;
              value = Number(value).toFixed(0);
                $("#Htemp").html("&nbsp;<font color='gray'>"+ value +"&deg;F</font>");
              });
          
              return;
          }




