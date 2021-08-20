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
 * @LastEditTime: 2021-08-20 12:24:29
 */
//
import "./css/beipy-video.scss";
import VideoIcon from "./js/icon";

const test = () => {
  console.log("执行Icon渲染 ", VideoIcon);

  let data = "";
  for (const key in VideoIcon) {
    data =
      data +
      '<div style="text-align: center; padding: 10px;display: inline-block;"> <div>' +
      VideoIcon[key].InitHtml +
      "</div> <p>" +
      VideoIcon[key].desc +
      "</p> <p>" +
      VideoIcon[key].key +
      "</p></div>";
  }
  document.getElementById("box").innerHTML = data;
};
test();
