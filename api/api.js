// import Request, { config, requestConfig, response } from '../js_sdk/luch-request/request.js'
// const http = new Request();
import Request from '../js_sdk/luch-request/luch-request/index.js' // 下载的插件
// import Request from 'luch-request' // 使用npm

const http = new Request();




export const getSlides = (param) => {//获取轮播图
    return http.get("/api/index/getSlides", param);
}