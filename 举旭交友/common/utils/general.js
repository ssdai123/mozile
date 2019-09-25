// 项目通用方法库

function checkPhoneCode(baseurl,phone,code){ //判断手机验证码的正确性
	console.log(phone,code)
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseurl+'verifyCode',
			method:'GET',
			data:{
				phone:phone,
				phoneCode:code
			},
			success: (res) => {
				console.log(res)
				var str=''
				if(res.data=='OK'){
					resolve(true)	
				}
				if(res.data=='codeErr'||res.data==''){
					reject(new Error('false'))
				}
			}
		})
	}).catch((e) => {
		return false
	})		
}

function generalGET(url,obj={},header={},method='GET'){ //通用数据请求接口
	return new Promise((resolve,reject)=>{
		uni.request({
			url:url,
			method:method,
			data:obj,
			header:header,
			success: (res) => {
				// console.log(res)
				var str=''
				if(res.data=='OK'||res.data.code=='OK'){
					resolve(res)	
				}else{
					reject(res)
				}
			}
		})
	}).catch((e) => {
		return e
	})		
}

function handleToken(key){ //获取本地缓存的用户token
	let info = uni.getStorageSync(key)
	return info ? JSON.parse(info) : null;		
}

module.exports = {
	checkPhoneCode,
	generalGET,
	handleToken
}