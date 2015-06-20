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
	
/*bossa gizle*/
//if ($('.asd').html().length < 15) $('.asd').addClass('hidden');
	
//lightbox
$('.photo figure > a, .photoset figure > a, article .lb').nivoLightbox({ keyboardNav: true });

//pageTop
$('li.pageInfo > i').click(function(){
	$('html, body').animate({scrollTop:0}, 600);
});

//menu mobil
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
