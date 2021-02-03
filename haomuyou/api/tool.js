// import Request, { config, requestConfig, response } from '../js_sdk/luch-request/request.js'
// const http = new Request();
import Request from '../js_sdk/luch-request/luch-request/index.js' // 下载的插件
// import Request from 'luch-request' // 使用npm

const http = new Request();
// 上传图片
export const upload = (param) => {
	param.formData.access_token = uni.getStorageSync('access_token') || ''
    return http.upload("/upload/upload", param);
}
export const smsCode = (param) => {
    return http.post("/sms/send",param);
}

export const normalSend = (param) => {
    return http.post("/sendMobileCode/normalSend",param);
}

export const getBanner = (param) => {
    return http.post("/tool/handelGetAd", param);
}


export const getConfig = (param) => {//获取全局配置
    return http.post("/distribution/getConfig", param);
}

export const byCodeGetArticleInfo = (param) => {//根据code获取文章详情
    return http.post("/tool/byCodeGetArticleInfo", param);
}

export const jssdk = (param) => {//获取必要的jssdk
    return http.post("/share/jssdk", param);
}


export const handelSendSms = (param) => {//获取短信接口
    return http.post("/tool/handelSendSms", param);
}



// 设置缓存
export const setCache = (key,value) => {
    sessionStorage.setItem(key,JSON.stringify(value))
}


// 获取缓存
export const getCache = (key) => {
    let res = sessionStorage.getItem(key)
    return res == null || res == undefined || res == '' ? '' : JSON.parse(res)

}

//获取验证码
export const getSms = (param) => {
	return http.post('/shop/Sms/send',param)
}

// 版本更新
export const checkUpdate = (param) => {
    return http.get("/tool/checkUpdate", param);
}

// 获取全局配置
export const getConfige = (param) => {
    return http.get("/home/index/getConfig", param);
}

// 分享朋友圈
export const sharePyq = (param) => {
    return http.get("/home/Share/sharePyq", param);
}


export const handelGetArticleDetail = (param) => {//获取文章详情
    return http.post("/tool/handelGetArticleDetail", param);
}


// 分享还有
export const shareHy = (param) => {
    return http.get("/home/Share/shareHy", param);
}

// 通过文章CODE获取文章列表
export const handelGetArticeList = (param) => {
    return http.post("/tool/handelGetArticeList", param);
}


export const UPLOAD_URL = 'http://www.taskapp.com/shop/upload/upload';