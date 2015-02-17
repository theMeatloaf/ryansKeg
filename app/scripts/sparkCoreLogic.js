'use strict';

          function getTemp()
          {
                var tempUrl = "https://api.spark.io/v1/devices/50ff6d065067545652220387/temperature?access_token=0211d4fd404edb3d5f319486a087b2a51da511c0";
              var xmlHttp = null;

              xmlHttp = new XMLHttpRequest();
              xmlHttp.open( "GET", tempUrl, false );
              xmlHttp.send( null );
              
              var jsonObj = JSON.parse(xmlHttp.responseText);
              
              document.getElementById("Ctemp").innerHTML = jsonObj.result +"&deg;F" ;
              
           //   + " &degF <br>"+
           //     "Last Update: " + jsonObj.coreInfo.last_heard + "<br>"+
           //     "Connected? " + jsonObj.coreInfo.connected;
              getFridgeStatus();

              return;
          }

          function getFridgeStatus()
          {
                var statusUrl = "https://api.spark.io/v1/devices/50ff6d065067545652220387/fridgeStatus?access_token=0211d4fd404edb3d5f319486a087b2a51da511c0";
              var xmlHttp = null;

              xmlHttp = new XMLHttpRequest();
              xmlHttp.open( "GET", statusUrl, false );
              xmlHttp.send( null );
              
              var jsonObj = JSON.parse(xmlHttp.responseText);

              if(jsonObj.result == true)
              {
                document.getElementById("Ctemp").innerHTML = document.getElementById("Ctemp").innerHTML 
                + "<font color='blue'><span class='glyphicon glyphicon-arrow-down' aria-hidden='true'></span></font>";
              }else
              {
                document.getElementById("Ctemp").innerHTML = document.getElementById("Ctemp").innerHTML 
                + "<font color='red'><span class='glyphicon glyphicon-arrow-up' aria-hidden='true'></span></font>";
              }

              getHoldTemp();
              
              return;
          }

          function getHoldTemp()
          {
                var statusUrl = "https://api.spark.io/v1/devices/50ff6d065067545652220387/goalTemp?access_token=0211d4fd404edb3d5f319486a087b2a51da511c0";
              var xmlHttp = null;

              xmlHttp = new XMLHttpRequest();
              xmlHttp.open( "GET", statusUrl, false );
              xmlHttp.send( null );
              
              var jsonObj = JSON.parse(xmlHttp.responseText);
              var value = jsonObj.result;
              value = Number(value).toFixed(0);

             document.getElementById("Htemp").innerHTML = "&nbsp;&nbsp;&nbsp;<font color='gray'>"+ value +"&deg;F</font>" ;
              
              document.getElementById("Nbeers").innerHTML = "&nbsp;130 beers left" ;


              return;
          }