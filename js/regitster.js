window.onload = function(){
	var
				oAc		 	= $('account'),
				oPa		 	= $('password'),
				opa1		= $('passworda'),
				oEma		= $('email1'),
				oAccount 	= $('user'),
				oPassword	= $('pa'),
				oPasswords	= $('pas'),
				oHttp	= $('email');
	
	
	oAccount.onblur = function() {
					var Account = oAccount.value,
						oReg	 = /^\b[a-z]\d{4,8}$/g,
						Bg 	= oReg.test(Account);
						
						if(Bg === true){
							oAc.outerHTML = '<span class="zc_ts font1" id="account"><img src="img/check_right.png"/></span>'
						}else{
							oAc.innerHTML = '<font color="ff9900">格式不正确</font>'
						}
				}
				oPassword.onblur = function () {
					var Password = oPassword.value,
						oReg = /^[\dA-Za-z0-9!@#$%&*?]{5,15}$/,
						Bg 	= oReg.test(Password);
						
						if(Bg === true){
							oPa.outerHTML = '<span class="zc_ts font1" id="account"><img src="img/check_right.png"/></span>'
						}else{
							oPa.innerHTML = '<font color="ff9900">密码格式不正确</font>'
						}
				}
				oPasswords.onblur = function () {
					var Passwords = this.value;
						
						if(Passwords === oPassword.value){
							opa1.outerHTML = '<span class="zc_ts font1" id="account"><img src="img/check_right.png"/></span>'
						}else{
							opa1.innerHTML = '<font color="ff9900">两次输入密码不一致</font>'
						}
				}
				
				oHttp.onblur = function () {
					var Http = this.value,
						oReg =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
						Bg 	= oReg.test(Http);
						
						if(Bg === true){
							oEma.outerHTML = '<span class="zc_ts font1" id="account"><img src="img/check_right.png"/></span>'
						}else{
							oEma.innerHTML = '<font color="ff9900">邮箱格式不正确</font>'
						}
				}
						
					
				
			}

function $(id) {
	return document.getElementById(id);
}