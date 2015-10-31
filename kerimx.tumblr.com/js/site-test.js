//sayfalar
var homePage = window.location.pathname == '/';
var postPage = window.location.pathname.indexOf('post');
var askPage = window.location.pathname.indexOf('ask');
if (homePage == 1) {
    $('body').addClass('homePage');
} else if (postPage > -1) {
	$('body').addClass('postPage');
} else if (askPage > -1) {
    $('body').addClass('askPage');
} else {
	$('body').addClass('normalPage');
	}
	
//masonry
$(document).ready(function () {
  // init Masonry after all images have loaded
  var $grid = $('.posts').imagesLoaded(function () {
    $grid.masonry({
      itemSelector: '.posts > article',
      percentPosition: true,
      columnWidth: '.grid-sizer',
	  transitionDuration: '0.2s'
    });
  });
});
	
/*bossa gizle
if ($('.asd').html().length < 15) $('.asd').addClass('hidden');*/
	
//lightbox
$('.photo figure > a, .photoset figure > a, article .lb').nivoLightbox({ keyboardNav: true });

//pageTop
function pageTop(){
	$('html, body').animate({scrollTop:0}, 600);
}
$('li.pageInfo > i').click(function(){
	pageTop();
});

//mobil menu
$('header nav > i').click(function(e) {
	e.stopPropagation();
    if(!$('header nav').hasClass('open')){
			$('header nav').addClass('open');
		}else{
			$('header nav').removeClass('open');
			};
});
	$(document).click(function(){
			$('header nav').removeClass('open');
	});


/*
//mobil menu
$('header nav > i').click(function(e) {
	e.stopPropagation();
    if(!$('header nav').hasClass('open')){
			$('header nav').addClass('open');
		}else{
			$('header nav').removeClass('open');
			};
});
	$(document).click(function(){
			$('header nav').removeClass('open');
	});
*/