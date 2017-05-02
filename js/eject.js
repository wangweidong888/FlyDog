
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
})

$(function(){
	$('.zhuce').click(function(){
		window.location.href="http://localhost/FlyDog2/register.html";
	})
})