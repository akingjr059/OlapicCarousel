var isMoving = false;

//left button
var left = function(){
	if (!isMoving) {
		isMoving = true;
		$('#carousel ul').animate({'left' : -420}, 300, function(){
			//get the first list item and put it after the last list item  
			$('#carousel ul li:last').after($('#carousel ul li:first'));    
			$('#carousel ul').css({'left' : '-210px'});
			isMoving = false;
		});
           
	}
}


//right button
var right = function(){
	if (!isMoving) {
		isMoving = true;
		$('#carousel ul').animate({'left' : 0}, 300, function(){  
			/* when sliding to left we are moving the last item before the first item */  
			$('#carousel ul li:first').before($('#carousel ul li:last'));   
			$('#carousel ul').css({'left' : '-210px'});
		  	isMoving = false;
		});
	}
}


//XMLHttp Request from the Olapic API
var getData = function() {
	
	var xhr = new XMLHttpRequest(),
		photoListFrag = document.createDocumentFragment(),
		srcLink,
		image,
		listItem;
	
	xhr.open("GET", "http://photorankapi-a.akamaihd.net/customers/215757/media/recent/?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18", true);
	xhr.send();
	
	xhr.onreadystatechange = function() {
	  	if (xhr.readyState == 4 && xhr.status == 200) {
	  	    
		  	//loadimage    
		    var res = JSON.parse(xhr.response);
		        
			for (var y = 0; y < res.data._embedded.length; y++) {
				        image = new Image();
				        image.src = res.data._embedded[y].images.normal;
				
				        listItem = document.createElement("li");
				        listItem.appendChild(image);
						photoListFrag.appendChild(listItem);
			}	
			//adding photos to the unordered list
			document.getElementById('photolist').appendChild(photoListFrag);
  		}
  	}	
}


//Run Functions on Page Load
$(document).ready(function(){
	$("#carousel ul li:first").before($("#carousel ul li:last"));	
	getData();
});
