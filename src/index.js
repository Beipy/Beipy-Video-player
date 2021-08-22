/*
 * @*      ____       _             :  ******************************
 * @*     / __ )___  (_)___  __  __ :  Author:Beipy
 * @*    / __  / _ \/ / __ \/ / / / :  WebURL:http://www.beipy.com
 * @*   / /_/ /  __/ / /_/ / /_/ /  :  Github:http://github.com/beipy
 * @*  /_____/\___/_/ .___/\__, /   :  别有梓人传，精艺夺天工。便使玉人雕琢，妙手略相同。
 * @*              /_/    /____/    :  ******************************
 * @Descripttion:
 * @version:
 * @Date: 2021-08-09 17:42:06
 * @LastEditors: Beipy
 * @FilePath: /Beipy-Video-player/src/index.js
 * @LastEditTime: 2021-08-22 16:53:51
 */
import "./css/index.scss";

// 查看所有的icon图标
import seeIcon from "./js/seeIcon.js";

import { markCopy } from "./js/utools";
markCopy();



import BpVideo from './js/BPvideo';
// 注册并引用

new BpVideo({
  container: 'BpVideo',
}).init()