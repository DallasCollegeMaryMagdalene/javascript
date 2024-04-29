$(document).ready(function () {

//add hover effect to each of th smaller images to add a thin dark green border and box shadow when hovering over image and remove it when you move off the image.
    $('#thumbs img').mouseover(function() {
        $(this).css('border', 'darkgreen 2px solid').css('box-shadow', '2px 2px 2px darkgreen');
    })
//remove border when you move off the image
    $('#thumbs img').mouseout(function() {
        $(this).css('border', 'none').css('box-shadow', 'none');
    })

//Add a click event to each of the smaller images to replace the src attribute of the larger image with the src attribute of clicked image
// loop through all img tags in the #gallery div (thumbnail images)
	$('#thumbs img').click(function() {
		// get the src attribute of the thumbnail image
		var imgFile = $(this).attr('src');
		// when the image is clicked, assign the src attribute to the lgPic
        $('#lgPic').attr('src', imgFile);
        var imgCaption = $(this).attr('alt');
        $('#lgPic').attr('alt', imgCaption);
        $('#lgTitle').text(imgCaption);
    }); // end click
    
//Add a click event to the large gallery image to open it in a new window using the src attribute as url
   $('#lgPic').click(function() {
	newWin = open($(this).attr('src'), 'popWin', 'width=640, height=480, top=100, left=200');
	return false;
}); 
  
});//end ready