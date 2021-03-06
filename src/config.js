// api root
const HOST = PRODUCTION ? '' : 'http://127.0.0.1:3000';
export const CDN_ROOT = HOST;
export const API_ROOT = `${HOST}/api/v1`;
export const SiteName = 'CUIT ACM 校队水表';

export function joinCDN(url) {
  if (url == null) return '';
  return `${CDN_ROOT}${url}`;
}

export const NavbarMenu = [
  // {
  //   to: '/meter/main',
  //   text: '首页',
  //   children: []
  // },
  {
    to: '/meter/train',
    text: '训练',
    children: [
      { to: '/meter/train/rank', text: '排行榜', icon: 'rank' },
      { to: '/meter/train/submits', text: '最近提交', icon: 'list' },
    ]
  },
  {
    to: '/meter/blog',
    text: '解题报告',
    children: []
  },
  {
    to: '/meter/achievement',
    text: '成就',
    children: []
  },
  {
    to: '/meter/principal',
    text: '我的主页',
    children: []
  },
];
