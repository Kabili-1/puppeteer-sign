/*
 * @Descripttion:  项目配置表 
 * @Author: xuess<wuniu2010@126.com>
 * @Date: 2019-06-04 17:29:18
 * @LastEditors: 午休
 * @LastEditTime: 2020-09-09 21:02:05
 */

// email 登陆账号 如：xxxx@126.com  默认使用的是 126的邮箱登录的。可以自行配置
const emailName = 'likai9876@126.com';
// email 登陆密码
const emailPassword = '992149o37';

// 接收者 邮箱
const toEmail = 'likai9876@126.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{	
		type: 'smzdm',
		username: 'kabili1',
		phone: '13006386001',
		// 数组类型的 cookies
		cookies: [{device_id=213070643316623821425242940152243188f0a03d456f96480eba2d74; homepage_sug=d; r_sort_type=score; sajssdk_2015_cross_new_user=1; Hm_lvt_9b7ac3d38f30fe89ff0b8a0546904e58=1662382147; user=user%3A1791217803%7C1791217803; smzdm_id=1791217803; ssxmod_itna=Yq0EqAxRx+haGHYKmxj2tDu77e0=8NiPrQDl2DWqeiODUxn4iaDTxPwiDDqg/Gf1GtPWTPa8jC+GPevW7Bn5aty1fvrDHxY6H8KDhDeDxx0oD5xGoDPxDeDADYEHDALPD9D0bMg9XVKDEDYp9IxDmDGA9tqDgDYQDGqDn94G2D7U9iCdKkEbSnDr58qDMUeGXWgn18qbWa1vZiQW5elmuDB=CxBjM8hXHfeDHGLNlemevbD+z3D4abre4WDh1b4xoK75PjiP4fUvo074GAf4ots5DG+h1AA5KeD=; ssxmod_itna2=Yq0EqAxRx+haGHYKmxj2tDu77e0=8NiP3D6O+QQ0D05i=D07xjRq1hCFLKt64Q8Z/nf9Gs6YiMP=46WiqxbpcjnSub8eLhco9zDwOqyLF+NSmhX0nDn+8KqD9/7kjjEynjMweN3IYERqYKek0F+wK2j8D2Djp4+bdzS2xkKG5A7A5LiiQAiG5IGREojEvbPwhrkrPkmRhFhL3eLrxAz24=Yf6HWM6w7Yn9Uc6kITqAScI78E=rCLvRz9i=1htI8LI41/Ip1S=pa8S=1T3za8OL8dZ6XF0wFVy/CUtcmy7ZWMjiqzbc+HiiTrmei0RgBh+7K+lr47A8CbN7yL8IhUHZW7C9T0CxCjxrtub9qC89kmeXWTpUKDPEoqAfIeQc7Y64QLg8GmNDEtuO08I564dyEoVDxY5sjx/WPIGg3SI4yxQv0YNa4ogalha7RDabDdeNTnDPINbT=iPmmRO5DTWdWK4NewW+Brzkm7+Kc0+ImCR+aGInQxDKLOD7=DYFQeD===; _zdmA.uid=ZDMA.HJ1R2rLpi.1662382481.2419200; smzdm_user_view=5EA6C8112485F06CF1303F6F79E23B1D; smzdm_user_source=17D4E2ECC18A5A600290B844BCA549C0; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221791217803%22%2C%22first_id%22%3A%221830db27dda8c-0dadf2a0b75d1c-26021d51-1327104-1830db27ddc3e%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%221830db27dda8c-0dadf2a0b75d1c-26021d51-1327104-1830db27ddc3e%22%7D; Hm_lpvt_9b7ac3d38f30fe89ff0b8a0546904e58=1662383246}]
	},
	{	
		type: 'smzdm',
		username: '账号2',
		phone: '账号2',
		// 数组类型的 cookies
		cookies: [{xxx:'xxx'}]
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'感谢爆料，很不错啊',
	'感谢爆料，价格不错~~',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};
