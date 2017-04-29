
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

/*$(function(){
	//i-list显示
	$('#nav').on('mouseenter',function(){
		$('#nav-eject').show(500);
	})
	
	$('#nav-eject').on('mouseleave',function(){
		$('#nav-eject').hide();
	})
	

	//style_1划入背景图 改变
	$('.style_1').hover(function(){
		$('.style_1').attr('class','style_1a');
		$('.i-list1').show();
	},function(){
		$('.style_1a').attr('class','style_1');
		window.setTimeout("$('.i-listt1').hide()",3000);
	})
	$('.i-listt1').on('mosueenter',function(){
		$('.i-listt1').show();
	})
	//
	$('.style_8').hover(function(){
		$('.style_8').attr('class','style_8a');
		$('.i-list8').css('display','block');
	},function(){
		$('.style_8a').attr('class','style_8');
		$('.i-list8').css('display','none');
	});
	
	$('.style_13').hover(function(){
		$('.style_13').attr('class','style_13a');
		$('.i-list13').css('display','block');
	},function(){
		$('.style_13a').attr('class','style_13');
		$('.i-list13').css('display','none');
	});
	
	$('.style_16').hover(function(){
		$('.style_16').attr('class','style_16a');
		$('.i-list16').css('display','block');
	},function(){
		$('.style_16a').attr('class','style_16');
		$('.i-list16').css('display','none');
	});
	
	$('.style_370').hover(function(){
		$('.style_370').attr('class','style_370a');
		$('.i-list370').css('display','block');
	},function(){
		$('.style_370a').attr('class','style_370');
		$('.i-list370').css('display','none');
	});
	
	$('.style_376').hover(function(){
		$('.style_376').attr('class','style_376a');
		$('.i-list376').css('display','block');
	},function(){
		$('.style_376a').attr('class','style_376');
		$('.i-list376').css('display','none');
	});
	
	$('.style_49').hover(function(){
		$('.style_49').attr('class','style_49a');
		$('.i-list49').css('display','block');
	},function(){
		$('.style_49a').attr('class','style_49');
		$('.i-list49').css('display','none');
	});
	
	$('.style_470').hover(function(){
		$('.style_470').attr('class','style_470a');
		$('.i-list470').css('display','block');
	},function(){
		$('.style_470a').attr('class','style_470');
		$('.i-list470').css('display','none');
	});
})*/