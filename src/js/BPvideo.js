/*
 * @*      ____       _             :  ******************************
 * @*     / __ )___  (_)___  __  __ :  Author:Beipy
 * @*    / __  / _ \/ / __ \/ / / / :  WebURL:http://www.beipy.com
 * @*   / /_/ /  __/ / /_/ / /_/ /  :  Github:http://github.com/beipy
 * @*  /_____/\___/_/ .___/\__, /   :  别有梓人传，精艺夺天工。便使玉人雕琢，妙手略相同。
 * @*              /_/    /____/    :  ******************************
 * @Descripttion: 
 * @version: v1.0.0
 * @Date: 2021-08-21 15:05:00
 * @LastEditors: Beipy
 * @FilePath: /Beipy-Video-player/src/js/BPvideo.js
 * @LastEditTime: 2021-08-22 17:48:12
 */

import {getId} from './utools';

export default class BpVideo {
  constructor(opt) {
      //当前视频总容器
      this.container = document.getElementById(opt.container)
    }
  
  init () {
    this.container.innerHTML='<h1>akljasdfl</h1>'
    console.log(this.container)
    
    let videoss = document.createElement('video')
    videoss.src='https://m3u8tv.sh.svp.tencent-cloud.com/gzc_1000102_0b53m4adcaaaomaisvirrnq4az6dgfvqanka.f2.mp4?vkey=B72DB8312E3E8654BB4D66DD7245CD7F87A5F6418C13C9EE53238B4A0D73F8B432509CF2C95CBD403A47993D9CFE79126AB3803520980C7DAB4EC4904B5FB214BD093A8686AA91EE00880CBB13239A4D3A598E44EF3F43D07B5CA73581D303AC94F5EBBD5C44E000E0FEA774D569A66371507496E9358F21'
    videoss.controls = true
    videoss.autoplay=true
    videoss.classList.add('beipyVideo')

    this.container.appendChild(videoss)
  }
}

