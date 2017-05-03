
$(function(){
	var 
		index = 0;
	$('#pic_list li').click(function(){
		var $li = $(this);
		var $others = $li.siblings();
		if($li.hasClass('cur')){
			$others.attr('class','');
		}else{
			$li.attr('class','cur');
			$others.attr('class','');
		}
	});
	
	$('.cur1').click(function(){
		$('.right_pic img').attr('src','http://img.360zan.cn/picture/size400img1207/2017_4_18_40_100575673.jpg')
		$('.zoomdiv img').attr('src','http://img.360zan.cn/picture/size500upimg1207/2017_4_18_40_100575673.jpg')
	})
	$('.cur2').click(function(){
		$('.right_pic img').attr('src','http://img.360zan.cn/picture/size400img1207/2017_4_18_40_1210248782.jpg')
		$('.zoomdiv img').attr('src','http://img.360zan.cn/picture/size500upimg1207/2017_4_18_40_1210248782.jpg')
	})
	
	$('.right_pic').on('mouseenter',function(){
		$('#mask').css('display','block')
		$('.zoomdiv').css('display','block')
	})
	
	$('#mask').on('mousemove',function(){
		$('#mask').css({
			"left": event.clientX - 267,
		})
		if(event.clientX = 267){
			event.clientX = 267
		}
		console.log(event.clientY)
	})
	
	$('.right_pic').on('mouseleave',function(){
		$('#mask').css('display','none')
		$('.zoomdiv').css('display','none')
	})
	$('#mask').on('mouseenter',function(){
		$('#mask').css('display','block')
		$('.zoomdiv').css('display','block')
	})
})