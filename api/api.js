// import Request, { config, requestConfig, response } from '../js_sdk/luch-request/request.js'
// const http = new Request();
import Request from '../js_sdk/luch-request/luch-request/index.js' // 下载的插件
// import Request from 'luch-request' // 使用npm

const http = new Request();




export const getSlides = (param) => {//获取轮播图
    return http.get("/api/index/getSlides", param);
}

export const getBenefitGoods = (param) => {//获取促销商品
    return http.get("/api/index/getBenefitGoods", param);
}

export const getNavs = (param) => {//获取导航图表
    return http.get("/api/index/getNavs", param);
}


export const getRootGoodsType = (param) => {//根据类型查询一级分类
     return http.get("/api/goodsType/getRootGoodsType/"+param.type, param);
}




export const getRecommendGoods = (param) => {//获取推荐商品 所有有推荐的商品的都用这个接口
    return http.get("/api/index/getRecommendGoods", param);
}

export const goodsDetail = (param) => {//获取商品详情数据
    return http.get("/api/goods/goodsDetail/"+param.id, param);
}

export const addressAdd = (param) => {//新增地址
    return http.post("/api/address/add", param);
}

export const getChildGoodsType = (param) => {//根据一级分类查询二级分类
    return http.get("/api/goodsType/getChildGoodsType/"+param.pid, param);
}


