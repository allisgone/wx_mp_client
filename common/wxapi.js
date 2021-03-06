import wx from 'weixin-js-sdk'
const wxApi = {
    /**
     * [wxRegister 微信Api初始化]
     * @param  {Function} callback [ready回调函数]
     */
    wxRegister(data,option) { //data是微信配置信息，option是分享的配置内容
        wx.config({
            debug: true, // 开启调试模式
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名，见附录1
            jsApiList: [
                'checkJsApi',
                'updateTimelineShareData',
                'updateAppMessageShareData'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
        wx.ready(function(){
            wx.updateTimelineShareData({
                title: option.title, // 分享标题
                link: option.link, // 分享链接
                imgUrl: option.imgUrl, // 分享图标
                desc: option.desc, // 分享描述
                success() {
                    // 用户成功分享后执行的回调函数
					console.log('success');
                    // option.success()
                },
                cancel() {
					console.log('quit share');
                    // 用户取消分享后执行的回调函数
                    // option.error()
                }
            });
            wx.updateAppMessageShareData({
                title: option.title, // 分享标题
                desc: option.desc, // 分享描述
                link: option.link, // 分享链接
                imgUrl: option.imgUrl, // 分享图标
                success() {
                    // 用户成功分享后执行的回调函数
                    // option.success()
					console.log('success');
                },
                cancel() {
					console.log('quit share');
                    // 用户取消分享后执行的回调函数
                    // option.error()
                }
            })
        })
    }
}
export default wxApi