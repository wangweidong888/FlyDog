function rec(){
	var firm = confirm('真的要删除吗？');
		if(firm == true){
				$('.car').html('<div class="car_wu"><p>您的购物车中没有商品，请您先<a href="http://127.0.0.1:8020/FlyDog2/home.html"></a></p></div>')
				$('.car').css('height',162)
			}
	}

$(function(){
	
	$('.left').click(function(){
		$('#change_txt_0').val(Number($('#change_txt_0').val())-1);
		$('.bot_top1 .li4').html('￥' + $('#change_txt_0').val()*79 + '.00')
		$('.font_js').html($('#change_txt_0').val())
		$('#totalPrice').html('￥' + $('#change_txt_0').val()*79 + '.00元')
		
		
		
		if($('#change_txt_0').val()<= 0){
		$('#change_txt_0').val(1)
		$('.bot_top1 .li4').html('￥79.00')
		$('#totalPrice').html('￥79.00元')
		$('.font_js').html(1)
		$('#totalPrice')
		alert('商品数量不能为0')
	}
		
	})
	
	$('.right').click(function(){
		$('#change_txt_0').val(Number($('#change_txt_0').val())+1);
		$('.bot_top1 .li4').html('￥' + $('#change_txt_0').val()*79 + '.00')
		$('.font_js').html($('#change_txt_0').val())
		$('#totalPrice').html('￥' + $('#change_txt_0').val()*79 + '.00元')
	})
	
	$('.close').click(function(){
		$('.tip').css('display','none')
	})
	
	$('.login').click(function(){
		window.open('http://localhost/FlyDog2/login.html')
	})
	
	
})

