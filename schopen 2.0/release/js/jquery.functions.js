
	/*
	@mikaelcarrara
	http://www.mikaelcarrara.com
	*/

	jQuery(document).ready(function(){
				
		$('ul#gallery li:eq(2), ul#gallery li:eq(5), ul#gallery li:eq(8)').css('margin-right','0');

		/* CrossSlide */
		$('div#banner').crossSlide({
			sleep: 2,
			fade: 1
		}, [
			{src:'img/banners/banner01.jpg'},
			{src:'img/banners/banner02.jpg'},
			{src:'img/banners/banner03.jpg'}
		]);

		/* Gallery */
		$('ul#gallery li img').click(function(){
			$(this).next('div.light').fadeIn();
		});
		$('div.light span').click(function(){
			$(this).parent().fadeOut('fast');
		});

		/* External Links */
		$('a[rel="external"]').attr('target','_blank');

		/* Focus */
		$('input[type="text"], input[type="password"], textarea').focus(function(){
			$(this).css('border-color', '#fff');
		});
		$('input[type="text"], input[type="password"], textarea').blur(function(){
			$(this).css('border-color', '#0c1e2f');
		});
		
		/*Validation*/
		$("form#validationContact").validate({
			rules:{
			  name:'required',
			  email:{required:true, email:true},
			  company:{required:true, minlength:1},
			  msn:{required:true, minlength:5}
			},
			messages:{
			  name:'Escreva seu nome',
			  email:'Escreva um e-mail válido',
			  company:'Escreva o nome da sua empresa', minlength:'No mínimo 1 caracteres',
			  msn:{required:'Escreva uma mensagem', minlength:'No mínimo 5 caracteres'}
			}
		});

	}); /* jQuery */
	