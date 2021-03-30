import Request from './request'

const test = new Request();
test.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = (process.env.NODE_ENV === 'development'?'https://platform-pay.sqqmall.com/':'https://platform-pay.sqqmall.com/');
	config.header = {
		a: 1,
		b: 2
	}
	return config
})
test.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	config.header = {
		...config.header,
		a: 1
	}
	/*
	if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
		cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
	}
	*/
	return config;
})
test.interceptor.response((response) => { /* 请求之后拦截器 */
	return response;
})

const http = new Request();
http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = (process.env.NODE_ENV === 'development'?'https://platform-pay.sqqmall.com/':'https://platform-pay.sqqmall.com/'); /* 根域名不同 */
	config.header = {
		'content-type': 'application/json'
	}
	return config
})
http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	//http.setConfig时无法获取到uni.getStorageSync("X-SessionId") 故此处再次设置
	/*config.header = {
		'content-type': 'application/json',
		"X-SessionId" : uni.getStorageSync("X-SessionId")||''
	} */
	if(process.env.NODE_ENV === 'development'){
		console.log('request拦截:'+JSON.stringify(config));
	}
	uni.showLoading({
		title: '请求中...'
	})
	config.header = {
		...config.header
	}
	/*
	if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
		cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
	}
	*/
	return config;
})
http.interceptor.response((response) => { /* 请求之后拦截器 */
	if(process.env.NODE_ENV === 'development'){
		console.log('response拦截：'+JSON.stringify(response));
	}
	uni.hideLoading();
	if(response.statusCode==403){
		console.log('用户被禁用'+response);
		//uni.redirectTo({url:'/pages/index/forbidden/forbidden'})
	}else if(response.statusCode==401){
		//X-SessionId失效 跳转到授权页
		//uni.redirectTo({url:'/pages/index/user-login/user-login'})
	}else{
		console.log('请求成功');
		//如果获取到sessionId
		/* var sessionId = response.header["X-SessionId"];
		if(sessionId){
			uni.setStorageSync("X-SessionId", sessionId);
		} */
	}
	return response;
})
export {
	http,
	test
};


