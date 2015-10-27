﻿//left button
var left = function(){
		
				$('#carousel ul').animate({'left' : -420}, 300, function(){
  
                //get the first list item and put it after the last list item  
                $('#carousel ul li:last').after($('#carousel ul li:first'));    
                $('#carousel ul').css({'left' : '-210px'});
				
				});           
}


//right button
var right = function(){

            	$('#carousel ul').animate({'left' : 0}, 300, function(){  
  
            	/* when sliding to left we are moving the last item before the first item */  
            	$('#carousel ul li:first').before($('#carousel ul li:last'));   
            	$('#carousel ul').css({'left' : '-210px'});
              
   				});
}


//XMLHttp Request from the Olapic API
var getData = function() {
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://photorankapi-a.akamaihd.net/customers/215757/media/recent/?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18", false);
	xhr.send();
	
	var img = xhr.response.message;
	console.log(img);
}


//Run Functions on Page Load
$(document).ready(function(){
	$("#carousel ul li:first").before($("#carousel ul li:last"));	
	getData();
});