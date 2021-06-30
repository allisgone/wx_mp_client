<template>
	<view>
		<!-- <view>
			<button @click="login()">微信登录</button>
		</view>
		<view>
			<button @click="pay()">微信支付</button>
		</view> -->
		<view id="container"></view>
		<view>请输入支付订单号：
			<input type="text" value="" v-model="orderNo" />
		</view>
		<view>请输入支付金额（单位分）：
			<input type="text" value="" v-model="orderAmount" />
		</view>
		<view>
			<button @click="insuranceSilenceWechatLogin()">基于客户端平台微信静默授权</button>
		</view>
		<view>
			<button @click="insuranceWechatLogin()">基于客户端平台微信用户授权</button>
		</view>
		<view>
			<button @click="insuranceWechatPay()">基于客户端平台微信用户支付(包括微信内和微信外)</button>
		</view>
		<view>
			<button @click="insuranceWechatH5PayInApp()">基于客户端平台微信用户支付(微信h5嵌App)</button>
		</view>
		<view>
			<button @click="toShare()">分享</button>
		</view>
		<view>
			<button @click="sendMsg()">发送数据</button>
		</view>
		<view>
			<view>授权返回内容</view>
			<view>nickname:
				<text>{{nickname}}</text>
			</view>
			<view>openid:
				<text>{{openid}}</text>
			</view>
			<view>
				<image :src="headimgurl"></image>
			</view>
		</view>

	</view>
</template>

<script>
	import wxapi from '@/common/wxapi.js';
	var VConsole = require("static/vconsole.min.js");
	// 接收消息
 	const getsocketData = e => { // 创建接收消息函数
		const data = e && e.detail.data
		console.log("客户端接收到消息:"+data)
	} 
	export default {
		data() {
			return {
				openid: '',
				nickname: '',
				headimgurl: '',
				orderAmount: 0,
				orderNo: null,
			};
		},
		onLoad(option) {
			if (option) {
				var vConsole = new VConsole();
				this.openid = option.openid;
				this.nickname = option.nickname;
				this.headimgurl = option.headimgurl;
			}
			// 注册监听事件
			window.addEventListener('onmessageWS', getsocketData)
		},
		beforeRouteLeave() {
			// 在需要的时候卸载监听事件，比如离开页面
			window.removeEventListener('onmessageWS', getsocketData)
		},
		methods: {
			login() {
				let _this = this;
				_this
					.$http
					.post('wechat/toGetUserinfoPage', {
						'returnUrl': 'http://spmixe.natappfree.cc/h5/pages/index/wxlogin/wxlogin'
					})
					.then(res => {
						window.location.href = res.data
					})
					.catch((res, err) => {
						uni.showToast({
							title: err,
							icon: 'none',
							duration: 2000
						});
					});

			},
			insuranceSilenceWechatLogin() {
				let platformKey = "4f949a2e76f9971fccc8e1935000bed3"; //在内部平台注册公众号配置后获取
				let redirectUri = "http%3A%2F%2Ffr5n2k.natappfree.cc%2fh5%2fpages%2findex%2fwxlogin%2fwxlogin"; //当前授权后跳转的地址 不一定是当前页 必须encode
				window.location.href = "https://platform-pay.sqqmall.com/wx-oauth-web/code?platformKey=" + platformKey +
					"&redirectUri=" + redirectUri +
					"&state=ffgghh";
			},
			insuranceWechatLogin() {
				let platformKey = "4f949a2e76f9971fccc8e1935000bed3"; //在内部平台注册公众号配置后获取
				let redirectUri = "http%3A%2F%2Ffr5n2k.natappfree.cc%2fh5%2fpages%2findex%2fwxlogin%2fwxlogin"; //当前授权后跳转的地址 不一定是当前页 必须encode
				window.location.href = "https://platform-pay.sqqmall.com/wx-oauth-web/code?platformKey=" + platformKey +
					"&redirectUri=" + redirectUri +
					"&state=aabbcc123";
			},
			insuranceWechatPay() {
				let platformPayKey = "e1a453e722356e7f87f6a5bf120278dc"; //在内部平台注册微信商户支付配置后获取
				let clientWapUrl = "https%3a%2f%2fwww.baidu.com%2fs"; //当前支付后跳转的地址 不一定是当前页 必须encode
				let orderFee = this.orderAmount;
				let orderNo = this.orderNo;
				window.location.href = "https://platform-pay.sqqmall.com/wx-oauth-web/h5pay?platformPayKey=" + platformPayKey +
					"&clientWapUrl=" + clientWapUrl + "&orderFee=" + orderFee + "&openid=" + this.openid + "&orderNo=" + orderNo +
					"&orderDesc=购买优惠券";
			},
			//app内h5支付 不能使用insuranceWechatPay，因为支付后会回跳到浏览器而不是app内（注意：此处微信支付商户平台必须配置业务系统的h5支付域名）
			insuranceWechatH5PayInApp() {
				let platformPayKey = "e1a453e722356e7f87f6a5bf120278dc"; //在内部平台注册微信商户支付配置后获取
				let clientWapUrl = "http://fr5n2k.natappfree.cc"; //当前支付后跳转的地址 不一定是当前页 因为是post提交 所以不需要encode
				let orderFee = this.orderAmount;
				let orderNo = this.orderNo;

				this.$http.post("pay/h5-pre-pay?platformPayKey=" + platformPayKey + "&orderFee=" + orderFee + "&orderNo=" + orderNo +
						"&orderDesc=购买优惠券", clientWapUrl)
					.then(res => {
						let datas = res.data;
						location.href = datas.data.mwebUrl;
					})
					.catch((res, err) => {
						uni.showToast({
							title: err,
							icon: 'none',
							duration: 2000
						});
					});
			},
			async toShare() {
				try {
					//签名url必须是当前地址
					let url = window.location.href;

					console.log(url);
					let data = {
						"platformKey": "4f949a2e76f9971fccc8e1935000bed3",
						"url": url
					}
					this.$http.post('wx-platform-api/js-config', data)
						.then(res => {
							let datas = res.data;
							let option = {
								title: "自定义分享标题", // 分享标题
								desc: "自定义分享描述", // 分享描述
								link: window.location.href + '&bdopenid=' + this.openid, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: window.location.protocol + "//" + window.location.host + "/h5/static/shuijiao.jpg", // 分享图标
							}
							// console.log('share datas====' + datas);
							// console.log('share option====' + option);
							// wxDis.wxRegister(this.$platformKey)
							wxapi.wxRegister(datas, option)
						})
						.catch((res, err) => {
							uni.showToast({
								title: err,
								icon: 'none',
								duration: 2000
							});
						});
				} catch (e) {
					console.log(e.message);
				}
			},
			pay() {
				let userinfoJson = JSON.parse(this.userinfo);
				//todo 先要通过业务调用获取订单号和订单金额
				let _this = this;
				_this
					.$http
					.post('pay/toPrepayPage', {
						"customerId": 123456,
						"isDefaultConfig": true,
						"openid": userinfoJson.data.openId,
						"orderFee": this.orderAmount,
						"orderNo": Date.parse(new Date()),
						"payType": 2,
						"redirectMethodUrl": "http://10.10.2.162:9990/insurance-wechat/wx-pay/callback",
						"returnUrl": "http://spmixe.natappfree.cc/h5"
					})
					.then(res => {
						window.location.href = res.data;
					})
					.catch((res, err) => {
						uni.showToast({
							title: err,
							icon: 'none',
							duration: 2000
						});
					});

			},
			sendMsg() {
				//模拟登录后建立长链接
				this.$sendWSPush({'msgType':'login','from':'135790','msg':{}});
			}
		}
	}
</script>
