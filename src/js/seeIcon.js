/*
 * @*      ____       _             :  ******************************
 * @*     / __ )___  (_)___  __  __ :  Author:Beipy
 * @*    / __  / _ \/ / __ \/ / / / :  WebURL:http://www.beipy.com
 * @*   / /_/ /  __/ / /_/ / /_/ /  :  Github:http://github.com/beipy
 * @*  /_____/\___/_/ .___/\__, /   :  别有梓人传，精艺夺天工。便使玉人雕琢，妙手略相同。
 * @*              /_/    /____/    :  ******************************
 * @Descripttion:查看所有的icon图标元素
 * @version:
 * @Date: 2021-08-20 17:00:33
 * @LastEditors: Beipy
 * @FilePath: /Beipy-Video-player/src/js/seeIcon.js
 * @LastEditTime: 2021-08-20 17:10:04
 */
import VideoIcon from "./icon.js";

let data = "";
for (const key in VideoIcon) {
  data =
    data +
    '<div style="text-align: center; padding: 10px;display: inline-block; width: 6%;"> <div>' +
    VideoIcon[key].InitHtml +
    "</div> <p>" +
    VideoIcon[key].desc +
    "</p> <p>" +
    VideoIcon[key].key +
    "</p></div>";
}
document.getElementById("box").innerHTML = data;
