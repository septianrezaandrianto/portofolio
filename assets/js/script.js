//event pada saat link di klik
$('.page-scroll').on('click', function(e){
//console.log('ok');
	
	//ambil isi href
	var tujuan = $(this).attr('href');
	//console.log(tujuan);

	//tangkap element yang bersangkutan
	var elemenTujuan = $(tujuan);
	//console.log(elemenTujuan);
	//console.log(elemenTujuan.offset().top);

	//pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutExpo');

	e.preventDefault();
});


//parallax

//about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

//portfolio
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	//console.log(wScroll);

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.1 +'%)'
	});


	//portfolio
	if( wScroll > $('.portfolio').offset().top - 250 ) {
		//console.log('ok');
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				// console.log('ok');
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 400 * (i+1));
		});
		
	}

});
