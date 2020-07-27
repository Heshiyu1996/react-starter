import { get, post } from '../http';

export const getDanmuList = () => get({ url: '/api/danmaku/list' }); // 获取弹幕列表
export const logout = data => post({ url: '/api/logout', data }); // 退出登录
