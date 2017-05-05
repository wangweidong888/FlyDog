
$(document).ready(function(){
	
		$('#nav').mouseover(function(){
			    $('#nav-eject').show();
				$('#nav-eject').mouseleave(function(){$(this).hide()});
				$('.sidelist').mouseover(function(){
					$(this).find('.i-list').show().children().children().find('li:last').css('border-right','none');
					$(this).find('h3').addClass('hover');
				})
				$('.sidelist').mouseleave(function(){
					$(this).find('.i-list').hide();
					$(this).find('h3').removeClass('hover');
				})		
				$('.i-list').mousemove(function(){
			      $(this).parent().children('span').find('h3').addClass('bg_h3');
		        })
		        $('.i-list').mouseleave(function(){
			      $(this).parent().children('span').find('h3').removeClass('bg_h3');
		        })
		})
		$('.menu_pop').mouseleave(function(){$('#nav-eject').hide()});
		
		
		$('.close').on('click',function(){
			$('.close').css('display','none');
			$('.replay').css('display','block');
					$('.store_top').animate({
								"height":87,
						},600)
					$('.banner_list').css('display','none')
					$('.gg').css('display','block')
					})
		
		$('.replay').on('click',function(){
			$('.replay').css('display','none')
			$('.close').css('display','block')
			$('.banner_list').css('display','block')
					$('.store_top').animate({
							"height":340,
						},600)
					})
})

$(function(){
					
	$('#banner_pic0').click(function(){
		$('#banner0').css('display','block')
		$('#banner1').css('display','none')
		$('#banner2').css('display','none')
		$('#banner3').css('display','none')
		$('#banner4').css('display','none')
		$('#banner_pic0').attr('class','on')
		$('#banner_pic1').attr('class','off')
		$('#banner_pic2').attr('class','off')
		$('#banner_pic3').attr('class','off')
		$('#banner_pic4').attr('class','off')
	})
	
	$('#banner_pic1').click(function(){
		$('#banner0').css('display','none')
		$('#banner1').css('display','block')
		$('#banner2').css('display','none')
		$('#banner3').css('display','none')
		$('#banner4').css('display','none')
		$('#banner_pic0').attr('class','off')
		$('#banner_pic1').attr('class','on')
		$('#banner_pic2').attr('class','off')
		$('#banner_pic3').attr('class','off')
		$('#banner_pic4').attr('class','off')
	})
	
	$('#banner_pic2').click(function(){
		$('#banner0').css('display','none')
		$('#banner1').css('display','none')
		$('#banner2').css('display','block')
		$('#banner3').css('display','none')
		$('#banner4').css('display','none')
		$('#banner_pic0').attr('class','off')
		$('#banner_pic1').attr('class','off')
		$('#banner_pic2').attr('class','on')
		$('#banner_pic3').attr('class','off')
		$('#banner_pic4').attr('class','off')
	})
	
	$('#banner_pic3').click(function(){
		$('#banner0').css('display','none')
		$('#banner1').css('display','none')
		$('#banner2').css('display','none')
		$('#banner3').css('display','block')
		$('#banner4').css('display','none')
		$('#banner_pic0').attr('class','off')
		$('#banner_pic1').attr('class','off')
		$('#banner_pic2').attr('class','off')
		$('#banner_pic3').attr('class','on')
		$('#banner_pic4').attr('class','off')
	})
	
	
	$('#banner_pic4').click(function(){
		$('#banner0').css('display','none')
		$('#banner1').css('display','none')
		$('#banner2').css('display','none')
		$('#banner3').css('display','none')
		$('#banner4').css('display','blcok')
		$('#banner_pic0').attr('class','off')
		$('#banner_pic1').attr('class','off')
		$('#banner_pic2').attr('class','off')
		$('#banner_pic3').attr('class','off')
		$('#banner_pic4').attr('class','on')
	})
	
	$('.zhuce').click(function(){
		window.location.href="http://localhost/FlyDog2/register.html";
	})
})