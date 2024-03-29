import asios from 'axios'

const requests = axios.create({
    baseURL:'/api',
    timeout:5000,

});

// 2\请求拦截器-
requests.interceptors.request.use((config)=>{
	//对响应数据做些什么
	return config;
},(err)=>{
	//对响应错误做些社么
	return Promise.reject(err);
});

// 3、响应拦截器

requests.interceptors.responce.use((res)=>{
	//对响应数据做些什么
	return res;
},(err)=>{
	//对响应错误做些什么
	return Promise.reject(err );
});


export default requests;
















