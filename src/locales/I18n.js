/*
 * @*      ____       _             :  ******************************
 * @*     / __ )___  (_)___  __  __ :  Author:Beipy
 * @*    / __  / _ \/ / __ \/ / / / :  WebURL:http://www.beipy.com
 * @*   / /_/ /  __/ / /_/ / /_/ /  :  Github:http://github.com/beipy
 * @*  /_____/\___/_/ .___/\__, /   :  Do not have catalpa people, the essence of art to seize the work. Then the jade carving, the same hand slightly.
 * @*              /_/    /____/    :  ******************************
 * @Descripttion: translation text
 * @version:
 * @Date: 2021-08-22 21:44:48
 * @LastEditors: Beipy
 * @FilePath: /Beipy-Video-player/src/locales/I18n.js
 * @LastEditTime: 2021-08-24 14:36:08
 */

import zhCn from "./lang/zh-cn";
import en from "./lang/en";

export default function I18n(lang = "zh-cn") {
  this.lang = lang;
  // translation text method
  this.t =(text) =>{
    if (locales[this.lang] && locales[this.lang][text]) {
      return locales[this.lang][text];
    } else {
      console.log(this.lang,text);
      return text;
    }
  }
}

// Translation language library
const locales = {
  "zh-cn": zhCn,
  en,
};


