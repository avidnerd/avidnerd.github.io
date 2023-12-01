// Function to adjust the .hori-selector element
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
 
	// Set the properties of the .hori-selector element
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
 
	// Add a click event handler to the li elements
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
 
		// Set the properties of the .hori-selector element
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
 }
 
 // Call the test function when the document is ready
 $(document).ready(function(){
	setTimeout(function(){ test(); });
 });
 
 // Call the test function when the window is resized
 $(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
 });
 
 // Toggle the visibility of the .navbar-collapse element when the .navbar-toggler element is clicked
 $(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
 });
 
 // Add the active class to the li element that corresponds to the current page
 jQuery(document).ready(function($){
	// Get the current path and find the target link
	var path = window.location.pathname.split("/").pop();
 
	// Account for the home page with an empty path
	if ( path == '' ) {
		path = 'index.html';
	}
 
	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
 
	// Add the active class to the target link
	target.parent().addClass('active');
 });
 