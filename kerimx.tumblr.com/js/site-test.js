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
	
//functions
//pageTop
function pageTop(){
	$('html, body').animate({scrollTop:0}, 600);
}
//menuOpen
function menuOpen0(){
	$('body').removeClass('menuOpened');
}
function menuOpen1(){
	$('body').addClass('menuOpened');
}
//aboutMe
function aboutMe0(){
	$('body').removeClass('aboutMeOpened')
}
function aboutMe1(){
	$('body').addClass('aboutMeOpened')
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

//sayfa basi
$('li.pageInfo > i').click(function(){
	pageTop();
});

//menu
$('header nav > a.siteMenu').click(function(e) {
	e.stopPropagation();
    if(!$('body').hasClass('menuOpened')){
			pageTop();
			menuOpen1();
		}else{
			menuOpen0();
			};
});

$(document).click(function(){
		menuOpen0();
});