define("location",[],function(){var e=location.href,t=function(t){var t=t||e,n=t.replace(/\:\d+/,"").match(/http(?:s)?:\/\/([^?&#]+)/)||[];return n[1]&&n[1].replace(/\/$/,"")||""},n=function(e){var t=new RegExp("([\\w\\d\\_\\-]+)=([^\\s\\&]+)","ig"),n={};return e.replace(t,function(e,t,r){n[t]=r}),n},r=function(e){var t=[],n="&";if(typeof data=="string")return data;var r=function(e){for(var n in e)e.hasOwnProperty(n)&&(angular.isObject(e[n])?r(e[n]):t.push(n+"="+e[n]))};return r(data),t.join(n)},i=function(){return n(location.search)},s=function(t){var t=t||e,n=e.match(/\#([^\s&\?]+)/);return n&&n[1]||""};return{url:t(),hash:s(),parseObj:n,parseUrl:r,search:i(),getUrl:t,getHash:s}}),define("dep",[],function(){return{"www.zhe800.com":["route/b8ac7350db627e49"],"www.zhe800.com/?**":["route/d1e546f3ada6f66e"],"www.zhe800.com/page/**":["route/0c84b48f535a36d3"],"brand.zhe800.com":["route/ba29a9070cb427a6"],"brand.zhe800.com/**":["route/3a84848d3d96dae0"],"www.zhe800.com/p/**":["route/dcc48f3ed82190a2"],"www.zhe800.com/ju_type/**":["route/8caf7457a305d208"],"www.zhe800.com/ju_tag/**":["route/97af2ac30a6a1e4f"],"www.zhe800.com/ju_tag/taomuying**":["route/adf3da0e75c9b8f0"],"www.zhe800.com/ju_tag/taonanzhuang**":["route/20f765ca630b7845"],"www.zhe800.com/ju_tag/taoertong**":["route/3238fb32ff7e482a"],"www.zhe800.com/jingxuanyugao**":["route/ff18a4ab070edcdf"],"top.zhe800.com**":["route/e23b87728ee092f6"],"www.zhe800.com/n/meirishijian**":["route/5cb03c4d5075bf45"],"search.zhe800.com/search**":["route/4b4681dc9d2b83ce"],"search.zhe800.com/search/z**":["route/2b4bbd351b7ee795"],"www.zhe800.com/search**":["route/165d9549f07febfa"],"www.zhe800.com/n/youpinhui**":["route/42747000da2d13e3"],"new.zhe800.com**":["route/322b2a0a96135564"],"www.zhe800.com/n/huodong/newappuser**":["route/a8465ab77a86f333"],"www.zhe800.com/n/daiyanrenzhuanti**":["route/f172e4904777d7f2"],"zhi.zhe800.com**":["route/5b8c3437e0cab11a"],"zhi.zhe800.com/deal/**":["route/74c2f492a5085890"],"www.zhe800.com/tmall**":["route/85da8c8baf81bc1b"],"/n/huodong/wuxianbaiduqianbao**":["route/fb964eb66df1a8ee"],"www.zhe800.com/n/jifen/shetuan**":["route/fbb91ad0e5f39431"],"www.zhe800.com/n/jifen/gongyi**":["route/707f4abf7c54fb2a"],"last.zhe800.com**":["route/05bef629ecc561f4"],"www.zhe800.com/tea**":["route/2e6fa59c18cc0fda"],"www.zhe800.com/n/huodong/APP0yuan**":["route/5010b7dc0bdac392"],"www.zhe800.com/n/0420**":["route/206ad300d4e534d8"],"www.zhe800.com/n/0423**":["route/43ac70ae78e9965d"],"www.zhe800.com/n/520yure**":["route/c99263c3d34617b8"],"www.zhe800.com/n/zhutiguan**":["route/9c6fac597e23b6b0"],"www.zhe800.com/n/xinshoubimai**":["route/3096ac023a1cdded"],"www.zhe800.com/n/yure625**":["route/3b900cf5149c83d4"],"www.zhe800.com/n/xianshiqiang**":["route/74f25c646fc46be0"],"www.zhe800.com/n/help/zhe800_description**":["route/4c9d552ab5f445f0"],"www.zhe800.com/n/hd/APP0yuan**":["route/260f91219f836c10"],"www.zhe800.com/n/update**":["route/6127a544dcddb452"],"guang.zhe800.com**":["route/1b176d77703f25d5"],"guang.zhe800.com/deal/**":["route/55b18eac76ec3d5d"],"www.zhe800.com/jifen**":["route/8aa45b36256d72f2"],"www.zhe800.com/jifen/auction**":["route/64cef55b339117a5"],"www.zhe800.com/jifen/raffle**":["route/83ef2b14877fad5a"],"www.zhe800.com/jifen/welfare**":["route/e444274a55dba0f1"],"www.zhe800.com/jifen/raffle/0yuanbaoyo**":["route/ffa87b5bc59c5b39"],"www.zhe800.com/jifen/lottery**":["route/ba1c51652af4ada0"],"www.zhe800.com/jifen/auction/0yuanbaoyo**":["route/4148ea1da9798e1d"],"www.zhe800.com/jifen/welfare/0yuanbaoyo**":["route/ea5edf28cdbd4056"],"www.zhe800.com/jifen/lottery/confirm_order**":["route/801f56ced7953e0c"],"www.zhe800.com/jifen/raffle/confirm_order**":["route/f27c8b57ceebc2da"],"www.zhe800.com/jifen/auction/confirm**":["route/ccbbebc2aa6ed160"],"www.zhe800.com/jifen/welfare/confirm_order**":["route/61de69bc95008377"],"www.zhe800.com/jifen/raffle/exchange**":["route/be567178a02a9822"],"www.zhe800.com/jifen/welfare/exchange**":["route/790d8252c434fcf5"],"www.zhe800.com/jifen/auction/success**":["route/d290e7ec62c98f7f"],"www.zhe800.com/cn/lottery/return/**":["route/a0e2033d27b37e5f"],"www.zhe800.com/jifen/jifen/profile**":["route/a1024c0d62af54bb"],"www.zhe800.com/n/pcxindacu/**":["route/07f89ccfbeca151c"],"www.zhe800.com/jifen/profile/welfare**":["route/d85cb583658ece44"],"www.zhe800.com/jifen/zhetangfuliri**":["route/6960627d32be1839"],"www.zhe800.com/pindao**":["route/de8f24e7eaab1564"],"www.zhe800.com/zhuanchang**":["route/3e8dbfbe9a4265b1"],"www.zhe800.com/topic**":["route/0bbad38f4a15eb50"],"help.zhe800.com**":["route/c31bbbc6eef55d96"],"www.zhe800.com/profile**":["route/812165d41bcf4244"],"www.zhe800.com/orders/lottery**":["route/ad0ac7ec9f828147"],"www.zhe800.com/friendly_links**":["route/f18d52d126d2578a"],"www.zhe800.com/ju_deal/**":["route/b03ed45486b889ee"],"www.zhe800.com/word/**":["route/15d8071c23428d68"],"www.tuan800.com/topic**":["route/19d05be0cbb92326"],"www.zhe800.com/n/checkin**":["route/aed3d77b2089dad3"],"www.zhe800.com/n/xienayimai**":["route/3208bfaa4916cc36"],"www.zhe800.com/n/receive_coupons**":["route/1cfb9c46e4b06127"],"www.zhe800.com/hd/firsttask**":["route/c8e41112db935309"],"www.zhe800.com/n/1111kaijiang**":["route/a41c1d58a1a56d98"]}}),define("common/glob",["type"],function(e){var t=["[^/]+",".*"],n=function(n,r){var i=/(\*{2,})|(\*)/g,s,o;if(e(n)==="string")while((s=i.exec(n))!=null)s[1]?n=n.replace(s[1],t[1]):s[2]&&(n=n.replace(s[2],t[0]));return(new RegExp(n+"$")).test(r)};return n}),require(["location","dep","queue","common/glob"],function(e,t,n,r){var i=["common/core/common"];window.isNowDacu&&i.push("dacu/dacu2015_diedai");var s=function(e){var n=[],s=[];for(var o in t)t.hasOwnProperty(o)&&r(o,e)&&(n=t[o]);return s.push(i),s.push(n),s},o=s(e.url),u=[];for(var a=0,f=o.length;a<f;a++){var l=o[a];(function(e){u.push(function(t){require(e,function(){t.resolve()})})})(l)}n.series(u)}),define("common/router",function(){});