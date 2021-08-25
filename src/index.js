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
 * @LastEditTime: 2021-08-25 14:39:50
 */
import "./css/index.scss";

// 查看所有的icon图标
// import seeIcon from "./js/seeIcon.js";

import { markCopy } from "./js/utools";
markCopy();

import BpVideo from "./js/BPvideo";
// 注册并引用

new BpVideo({
  container: document.getElementById("BpVideo"),
  lang: "zh-cn",
  live: true,
  radius: "8px", //圆角
  style: "",
  title: "扫黑风暴",
  loop: true, //循环
  episode: [
    {
      title: "第一集",
      url: "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4",
    },
  ], //续集
  utools: ["screenshot", "gif", "area", "download", "identify", "shop", "more"],
});
