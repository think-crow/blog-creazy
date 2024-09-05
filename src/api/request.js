 import axios from 'axios'
 import {useLoadingStore} from "../stores/loading";
// import { error } from 'console';
// import querystring from "querystring"
// const axios = axios.create({ 
//     baseURL:'http://127.0.0.1:3000',
//     timeout:5000,
// });

// const errorHandle = (status, info)=>{
// 	switch(status){
// 		case 400: console.log("语义有误") 
// 		break;
// 		case 401: console.log("服务器认证失败") 
// 		break;
// 		case 403: console.log("服务器拒绝访问") 
// 		break;
// 		case 404: console.log("地址有误") 
// 		break;
// 		case 500: console.log("服务器内部异常") 
// 		break;
// 		case 502: console.log("服务器无响应") 
// 		break;

// 		default: console.log(info);
// 	}
// }
 
// 2\请求拦截器-
axios.interceptors.request.use((config)=>{
	const {loading, setLoading} = useLoadingStore()
	  // 只在不是 /ligs 路径时显示加载动画
	  if (!config.url.includes('/api/notepapers_data')) {
        setLoading(true);
    }

	// if(config.method=="post"){

	// 	config.data=querystring.stringify(config.data)
	// }
	//对响应数据做些什么

	//匹配请求头
	// config.headers.common['Authorization'] = window.sessionStorage.getItem('token') ===null? null:windows.sessionStorage.getItem('token')
	return config;
	
},(err)=>{
	const {loading, setLoading} = useLoadingStore()
	setLoading(false)
	//对响应错误做些社么
	return Promise.reject(err);
});

// 3、响应拦截器

axios.interceptors.response.use((res)=>{
	const {loading, setLoading} = useLoadingStore()
	setTimeout(() => {
        setLoading(false)
    }, 400)
	// response => {
	// 	return response.status==200?Promise.resolve(response):Promise.reject(response)
	// }
	//对响应数据做些什么
	return res;
},(err)=>{
	const {loading, setLoading} = useLoadingStore()

	setLoading(false)
	// const {response} = error
	// errorHandle(response.status, response.info)
	//对响应错误做些什么
	return Promise.reject(err );
});


export default axios;
















