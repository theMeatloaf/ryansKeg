'use strict';

// function getFridgeStatus()
// {
//     	var statusUrl = 'https://api.spark.io/v1/devices/50ff6d065067545652220387/fridgeStatus?access_token=48c89a159ff81b36491232b4bd8391ab95d5306f';
//    	var xmlHttp = null;

//    	xmlHttp = new XMLHttpRequest();
//    	xmlHttp.open( 'GET', statusUrl, false );
//    	xmlHttp.send( null );
   	
//    	var jsonObj = JSON.parse(xmlHttp.responseText);
    
//    	document.getElementById('infoP').innerHTML = document.getElementById('infoP').innerHTML +
//    	'<br> Fridge Running: ' + jsonObj.result ;
   	
//    	return;
// }

// function getHoldTemp() {
//       var holdUrl = 'https://api.spark.io/v1/devices/50ff6d065067545652220387/goalTemp?access_token=48c89a159ff81b36491232b4bd8391ab95d5306f';
//     var xmlHttp = null;

//     xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( 'GET', holdUrl, false );
//     xmlHttp.send( null );
    
//     var jsonObj = JSON.parse(xmlHttp.responseText);
    
//     document.getElementById('infoP').innerHTML = document.getElementById('infoP').innerHTML +
//     '<br> Goal Temperature: ' + jsonObj.result ;
    
//     getFridgeStatus();
    
//     return;
// }

// function getTemp() {
//       //todo: make login get access token
//       var tempUrl = 'https://api.spark.io/v1/devices/50ff6d065067545652220387/temperature?access_token=48c89a159ff81b36491232b4bd8391ab95d5306f';
//     var xmlHttp = null;

//     xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( 'GET', tempUrl, false );
//     xmlHttp.send( null );
    
//     var jsonObj = JSON.parse(xmlHttp.responseText);
    
//     document.getElementById('infoP').innerHTML =
//     'Current Temperature: ' + jsonObj.result ;
    
//  //   + ' &degF <br>'+
//  //     'Last Update: ' + jsonObj.coreInfo.last_heard + '<br>'+
//  //     'Connected? ' + jsonObj.coreInfo.connected;
  
//     getHoldTemp(); //get goal temp next
//     return;
// }


// function setNewTemp()
// {
// 	var formElement = document.getElementById('theForm');
// 	var formData = new FormData();
// 	formData.append('args', formElement.elements[0].value);
	
// 	var setTempUrl = 'https://api.spark.io/v1/devices/50ff6d065067545652220387/setHoldTemp?access_token=48c89a159ff81b36491232b4bd8391ab95d5306f';
//    	var xmlHttp = null;

//    	xmlHttp = new XMLHttpRequest();
//    	xmlHttp.open( 'POST', setTempUrl);
//    	xmlHttp.send( formData );
   	
//    	formElement.elements[0].value = '';
   	
// 	return;
// } 

// function doCountdown() {
//   if(count === 6)
//   {
//     //first time through
//     getTemp();
//   }
//   if(count >= 0)
//   {
//     var countTag = document.getElementById('countdown');
//     countTag.innerHTML = 'Updating in ' + count + ' seconds';
//     count--;
//   }else
//   {
//     count = 5;
//     getTemp();
//   }
// }