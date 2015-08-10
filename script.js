$(document).ready(function() {
    

$(".f").click(function(event){
    $(".f").toggleClass( "categories categories2");
    $(".row1col1").html('Top 10 Family Cars');
    $(".circle1").toggleClass("circle circle-alternative");
    //To replace images: $('img[src="image.gif"]').attr('src','path/to/new/image.png'); 
    event.preventDefault();
});

$(".s").click(function(event){
    $(".s").toggleClass( "categories categories2");
    $(".row1col1").html('Top 10 Sports Cars');
    $(".circle2").toggleClass("circle circle-alternative");
    //To replace images: $('img[src="image.gif"]').attr('src','path/to/new/image.png');
    event.preventDefault();
});

$(".h").click(function(event){
    $(".h").toggleClass( "categories categories2");
    $(".row1col1").html('Top 10 Hybrid Cars');
     $(".circle3").toggleClass("circle circle-alternative");
    //To replace images: $('img[src="image.gif"]').attr('src','path/to/new/image.png');
    event.preventDefault();

});

$(".l").click(function(event){
    $(".l").toggleClass( "categories categories2");
    $(".row1col1").html('Top 10 Luxury Cars');
     $(".circle4").toggleClass("circle circle-alternative");
    //To replace images: $('img[src="image.gif"]').attr('src','path/to/new/image.png');
    event.preventDefault();

});

$(".su").click(function(event){
    $(".su").toggleClass( "categories categories2");
    $(".row1col1").html('Top 10 SUVs');
    $(".circle5").toggleClass("circle circle-alternative");
    //To replace images: $('img[src="image.gif"]').attr('src','path/to/new/image.png');
    event.preventDefault();

});

$(".select-vehicle").click(function(event) {
  $(".overlay").toggleClass("hidden");
});

});

