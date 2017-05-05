
$(function(){
	var index = 0,
		timer = null;
	
	timer = setInterval(function(){
	    index = (index == 4) ? 0 : index + 1;          
	    //某个div显示，其他的隐藏
	    $(".banner_list div").hide().eq(index).show();
	    $(".banner_list ul li").attr('class','off').eq(index).attr('class','on');
		}, 2000);
	//3秒轮播一次
	$('.banner_list').on('mouseleave',function(){
		
		timer = setInterval(function(){
	    index = (index == 4) ? 0 : index + 1;          
	    //某个div显示，其他的隐藏
	    $(".banner_list div").hide().eq(index).show();
	    $(".banner_list ul li").attr('class','off').eq(index).attr('class','on');
		}, 2000);
	})
	
	$('.banner_list').on('mouseenter',function(){
		clearInterval(timer);
	})
	
	
	/*$("#indexHead li").click(function(){
	    $(this).toggleClass(function(){
	    	
	           if($(this).attr('class')===""){
	              $(this).attr("class","hover_tj");
	           }else{
	              $(this).attr('class',"hover_tj");
	           }
	           	console.log($(this).attr('class')) 
	    });
	 }); */  

	$("#indexHead li").click(function(){
     var $div = $(this);
     var $others = $div.siblings();
      if($div.hasClass('hove_tj')){
			$others.attr('class','');
      }else {
           $div.attr('class','hover_tj');
           $others.attr('class','');
       }
      });
      
      
      
      $('#jr1').click(function(){
      	$('.imglist_w').css('display','block').html(
      				'<ul class="imglist" style="block"><!--11111--><li><a href="#" title="隔离DHV气垫CC霜 致润无暇保湿补水 持久遮瑕 15g*2"><img src="http://img_1.360zan.cn/picture/specialImages/ce349004259711e7b8d2fd4635effb6a.jpg" width: 167px; height: 212px;/></a><h5><a href="#">隔离DHV气垫CC霜 致润无暇保湿补水 持久遮瑕 15g*2</a></h5><p>原价：￥168.00<span>￥145.00</span></p></li><!--22222--><li><a href="#" title="隔离DHV气垫CC霜 致润无暇保湿补水 持久遮瑕 15g*2"><img src="http://img_1.360zan.cn/picture/specialImages/ce349004259711e7b8d2fd4635effb6a.jpg" width: 167px; height: 212px;/></a><h5><a href="#">隔离DHV气垫CC霜 致润无暇保湿补水 持久遮瑕 15g*2</a></h5><p>原价：￥168.00<span>￥145.00</span></p></li><!--333333--><li><a href="#" title="隔离DHV气垫CC霜 致润无暇保湿补水 持久遮瑕 15g*2"><img src="http://img_1.360zan.cn/picture/specialImages/ce349004259711e7b8d2fd4635effb6a.jpg" width: 167px; height: 212px;/></a><h5><a href="#">隔离DHV气垫CC霜 致润无暇保湿补水 持久遮瑕 15g*2</a></h5><p>原价：￥168.00<span>￥145.00</span></p></li><!--444444--><li><a href="#" title="隔离DHV气垫CC霜 致润无暇保湿补水 持久遮瑕 15g*2"><img src="http://img_1.360zan.cn/picture/specialImages/ce349004259711e7b8d2fd4635effb6a.jpg" width: 167px; height: 212px;/></a><h5><a href="#">隔离DHV气垫CC霜 致润无暇保湿补水 持久遮瑕 15g*2</a></h5><p>原价：￥168.00<span>￥145.00</span></p></li><!--55555--><li><a href="#" title="隔离DHV气垫CC霜 致润无暇保湿补水 持久遮瑕 15g*2"><img src="http://img_1.360zan.cn/picture/specialImages/ce349004259711e7b8d2fd4635effb6a.jpg" width: 167px; height: 212px;/></a><h5><a href="#">隔离DHV气垫CC霜 致润无暇保湿补水 持久遮瑕 15g*2</a></h5><p>原价：￥168.00<span>￥145.00</span></p></li></ul>'
      	);
      })
      
      $('#jr2').click(function(){
      	$('.imglist_w').css('display','block').html(
      				'<ul class="imglist" style="block"><!--11111--><li><a href="#" title="缪佳 女式显瘦印花牛仔裤 小脚裤   "><img src="img/384a59942906468c890efc27ae8cea2c.jpg" width: 167px; height: 212px;/></a><h5><a href="#">缪佳 女式显瘦印花牛仔裤 小脚裤   </a></h5><p>原价：￥298.00<span>￥118.00</span></p></li><!--22222--><li><a href="#" title="布里奥索 男式时尚修身印花款磨毛长袖衬衫   "><img src="img/3c9112a01ebc46db8d4a632320f48f7b.jpg" width: 167px; height: 212px;/></a><h5><a href="#">布里奥索 男式时尚修身印花款磨毛长袖衬衫</a></h5><p>原价：￥268.00<span>￥79.00</span></p></li><!--333333--><li><a href="#" title="小辣椒 3代（LA3-W）四核5.5寸高清屏双卡智能手机 联通3G  "><img src="img/77c7cbf678b14862a92a8357ea754f7b.jpg" width: 167px; height: 212px;/></a><h5><a href="#">小辣椒 3代（LA3-W）四核5.5寸高清屏双卡智能手机 联通3G</a></h5><p>原价：￥1998.00<span>￥1408.00</span></p></li><!--444444--><li><a href="#" title="丹姿 男士劲爽沐浴露200ml "><img src="img/68731ae5269d46df9033005ef513fd9b.jpg" width: 167px; height: 212px;/></a><h5><a href="#">丹姿 男士劲爽沐浴露200ml</a></h5><p>原价：￥39.00<span>￥29.00</span></p></li><!--55555--><li><a href="#" title="芝宝/ZIPPO 200拉丝天道酬勤打火机 美版 "><img src="img/fcd22e29d0fb46b18fa2ade01c2240fa.jpg" width: 167px; height: 212px;/></a><h5><a href="#">芝宝/ZIPPO 200拉丝天道酬勤打火机 美版</a></h5><p>原价：￥198.00<span>￥166.00</span></p></li><!--66666--><li><a href="#" title="七匹狼 男士牛津布高档单肩包 "><img src="img/90f5eab6d3a3448eaa60ffefa12b517d.jpg" width: 167px; height: 212px;/></a><h5><a href="#">七匹狼 男士牛津布高档单肩包    </a></h5><p>原价：￥529.00<span>￥229.00</span></p></li><!--77777--><li><a href="#" title="太平公主 女式圆头防水台高跟单鞋    "><img src="img/1cdb3de9cfce4cf3830c16fafd414842.jpg" width: 167px; height: 212px;/></a><h5><a href="#">太平公主 女式圆头防水台高跟单鞋</a></h5><p>原价：￥179.00<span>￥89.00</span></p></li><!--88888--><li><a href="#" title="男性主义 C2男士控油平衡水   "><img src="img/d0954df78e3a4d378db95435cfb149af.jpg" width: 167px; height: 212px;/></a><h5><a href="#">男性主义 C2男士控油平衡水  </a></h5><p>原价：￥99.00<span>￥49.00</span></p></li></ul>'
      	);
      })
    $(function(){
    	var	
    		index = 0,
    		timer = null;
    	
    	var timer = setInterval(function(){
    	index++;
    	if(index >= 2){
    			index = 0;
    		}
    	
    	 $('.imglist').animate({
    	 		left:-237*index,
    		 })
    	 },3800)
    	
    	
    	$('.imglist').on('mouseenter',function(){
    		clearInterval(timer);
    		
    	})
    	
    	$('.imglist').on('mouseleave',function(){
    	clearInterval(timer);
    	timer = setInterval(function(){
    	index++;
    	if(index >= 2){
    			index = 0;
    		}
    	
    	 $('.imglist').animate({
    	 		left:-237*index,
    		 })
    	 },4000)
    	
    })
    
    $("#tr1").click(function(){
    	$("#tr1").addClass('fenge')
    	$("#tr2").removeClass('fenge')
    	$('.string_one').css('display','block')
    	$('.string_twe').css('display','none')
    })
    $("#tr2").click(function(){
    	$("#tr2").addClass('fenge')
    	$("#tr1").removeClass('fenge')
    	$('.string_one').css('display','none')
    	$('.string_twe').css('display','block')
      })
      
    })
     
})
$(function(){
	
	var 
		index = 0,
		timer = null;
		
	 $("#banld_left").click(function(){
    	$("#banld_right").addClass('on')
    	$("#banld_left").removeClass('on')
    	$('#banld_center').css('display','block')
    	$('#product').css('display','none')
    })
    $("#banld_right").click(function(){
    	$("#banld_left").addClass('on')
    	$("#banld_right").removeClass('on')
    	$('#banld_center').css('display','none')
    	$('#product').css('display','block')
      })
    
    $('#one1').click(function(){
    	 $('#one1').addClass('own')
    	 $('#one2').attr('class','')
    	 $('#one3').attr('class','')
    	 $('#con_one_1').css('display','block')
    })
    $('#one2').click(function(){
    	 $('#one2').addClass('own')
    	 $('#one1').attr('class','')
    	 $('#one3').attr('class','')
    	 $('#con_one_2').css('display','block')
    	 $('#con_one_1').css('display','none')
    })
    $('#one3').click(function(){
    	 $('#one3').addClass('own')
    	 $('#one2').attr('class','')
    	 $('#one1').attr('class','')
    	 $('#con_one_3').css('display','block')
    	 $('#con_one_1').css('display','none')
    	 $('#con_one_2').css('display','none')
    })
    $('#tw1').click(function(){
    	 $('#tw1').addClass('off2')
    	 $('#tw2').attr('class','')
    	 $('#tw3').attr('class','')
    	 $('#con2_twe_1').css('display','block')
    })
    $('#tw2').click(function(){
    	 $('#tw2').addClass('off2')
    	 $('#tw1').attr('class','')
    	 $('#tw3').attr('class','')
    	 $('#con2_twe_2').css('display','block')
    	 $('#con2_twe_1').css('display','none')
    })
    $('#tw3').click(function(){
    	 $('#tw3').addClass('off2')
    	 $('#tw2').attr('class','')
    	 $('#tw1').attr('class','')
    	 $('#con2_twe_3').css('display','block')
    	 $('#con2_twe_1').css('display','none')
    	 $('#con2_twe_2').css('display','none')
    })
    
    $('#thr1').click(function(){
    	 $('#thr1').attr('class','onn3')
    	 $('#thr2').attr('class','')
    	 $('#con3_thr_1').css('display','block')
    	 $('#con3_thr_2').css('display','none')
    })
    $('#thr2').click(function(){
    	 $('#thr1').attr('class','')
    	 $('#thr2').attr('class','onn3')
    	 $('#con3_thr_2').css('display','block')
    	 $('#con3_thr_1').css('display','none')
    })
    
    $(document).ready(function(){ 
    	
　　	 timer = setInterval(function(){
		
		if(index >= 2){
			index = -1;
		}
		index++
		$('.menu_hd1 li').attr('class','').eq(index).attr('class','own');
		$('.menudiv1 > div').css('display','none').eq(index).css('display','block')
		
		},3200)	
		
	$('.tab1').on('mouseenter',function(){
		clearInterval(timer);
		})
	$('.tab1').on('mouseleave',function(){
		timer = setInterval(function(){
		
			if(index >= 2){
				index = -1;
			}
			index++
			$('.menu_hd1 li').attr('class','').eq(index).attr('class','own');
			$('.menudiv1 > div').css('display','none').eq(index).css('display','block')
			
			},3000)	
		})
　　});
})

$(function(){
	var
		index = 0,
		timer = null;
	$(document).ready(function(){ 
    	
　　	 timer = setInterval(function(){
		
		if(index >= 2){
			index = -1;
		}
		index++
		$('.menu_hd2 li').attr('class','').eq(index).attr('class','off2');
		$('.menudiv2 > div').css('display','none').eq(index).css('display','block')
		
		},3000)	
	
	$('.tab2').on('mouseenter',function(){
		clearInterval(timer);
		})
	$('.tab2').on('mouseleave',function(){
		timer = setInterval(function(){
		
			if(index >= 2){
				index = -1;
			}
			index++
			$('.menu_hd2 li').attr('class','').eq(index).attr('class','off2');
			$('.menudiv2 > div').css('display','none').eq(index).css('display','block')
			
			},2500)	
		})
	
　　})
	
});


$(function(){
	var
		index = 0,
		timer = null;
	$(document).ready(function(){ 
    	
　　	 timer = setInterval(function(){
		
		if(index >= 1){
			index = -1;
		}
		index++
		$('.menu_hd3 li').attr('class','').eq(index).attr('class','onn3');
		$('.menudiv3 > div').css('display','none').eq(index).css('display','block')
		
		},4000)	
	
	$('.tab3').on('mouseenter',function(){
		clearInterval(timer);
		})
	$('.tab3').on('mouseleave',function(){
		timer = setInterval(function(){
		
			if(index >= 1){
				index = -1;
			}
			index++
			$('.menu_hd3 li').attr('class','').eq(index).attr('class','onn3');
			$('.menudiv3 > div').css('display','none').eq(index).css('display','block')
			
			},3500)	
		})
　　	});
})


