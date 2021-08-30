/*
 * @*      ____       _             :  ******************************
 * @*     / __ )___  (_)___  __  __ :  Author:Beipy
 * @*    / __  / _ \/ / __ \/ / / / :  WebURL:http://www.beipy.com
 * @*   / /_/ /  __/ / /_/ / /_/ /  :  Github:http://github.com/beipy
 * @*  /_____/\___/_/ .___/\__, /   :  Do not have catalpa people, the essence of art to seize the work. Then the jade carving, the same hand slightly.
 * @*              /_/    /____/    :  ******************************
 * @Descripttion:
 * @version:
 * @Date: 2021-08-09 17:42:06
 * @LastEditors: Beipy
 * @FilePath: /Beipy-Video-player/src/index.js
 * @LastEditTime: 2021-08-30 15:14:13
 */
import "./css/index.scss";

// 查看所有的icon图标
// import seeIcon from "./js/seeIcon.js";

// import { markCopy } from "./js/utools";
// markCopy();

import BpVideo from "./js/BPvideo";
// 注册并引用

new BpVideo({
  container: document.getElementById("BpVideo"),
  logo: "https://gw.alicdn.com/tfs/TB1ugm9f5cKOu4jSZKbXXc19XXa-356-76.png",
  title: "扫黑风暴",
  lang: "zh-cn",
  width: 800, //width 和 height 同时设置将取消比例
  // height: 600,
  // ratio: [16, 20], //比例
  live: true,
  radius: "8px", //圆角
  loop: true, //循环
  episode: [
    {
      title: "第一集",
      url: "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4",
    },
  ], //续集
  utools: ["screenshot", "gif", "area", "download", "identify", "shop", "more"],
});
