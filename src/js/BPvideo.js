/*
 * @*      ____       _             :  ******************************
 * @*     / __ )___  (_)___  __  __ :  Author:Beipy
 * @*    / __  / _ \/ / __ \/ / / / :  WebURL:http://www.beipy.com
 * @*   / /_/ /  __/ / /_/ / /_/ /  :  Github:http://github.com/beipy
 * @*  /_____/\___/_/ .___/\__, /   : Do not have catalpa people, the essence of art to seize the work. Then the jade carving, the same hand slightly.
 * @*              /_/    /____/    :  ******************************
 * @Descripttion:
 * @version: v1.0.0
 * @Date: 2021-08-21 15:05:00
 * @LastEditors: Beipy
 * @FilePath: /Beipy-Video-player/src/js/BPvideo.js
 * @LastEditTime: 2021-08-24 22:38:11
 */

import { getId } from "./utools";
import tplVideo from "../template/index.art";
import I18n from "../locales/I18n";
import VideoIcon from "./icon.js";
export default class BpVideo {
  constructor(opt) {
    this.container = opt.container;
    this.lang = new I18n(opt.lang).t;
    this.icon = VideoIcon;
    this.init();
  }

  init() {
    this.container.innerHTML = tplVideo({
      logo: "https://gw.alicdn.com/tfs/TB1ugm9f5cKOu4jSZKbXXc19XXa-356-76.png",
      icon: this.icon,
      lang: this.lang,
      footer: {
        left: ["next", "cycle", "live", "time"],
        right: [
          "quality",
          "speed",
          "volume",
          "setting",
          "PIP",
          "pageFullOn",
          "FullOn",
        ],
      },
      utools: [
        "screenshot",
        "gif",
        "area",
        "download",
        "identify",
        "shop",
        "more",
      ],
    });
    this.playButton = this.container.querySelector('.play-icon ');
    this.video = this.container.querySelector('video');
    this.beipyVideo = this.container.querySelector('.beipy-video')
    // 右键菜单
    this.beipyVideo.addEventListener('contextmenu', (e) => {
      const event = e || window.event;
      event.preventDefault();
      console.log('邮件点击');
    })
    // 播放按钮
    this.playButton.addEventListener('click', (e) => {
      if (this.video.paused) {
        this.video.play()
        this.playButton.querySelector('svg.paly-icon').classList.remove('rotatein')
        this.playButton.querySelector('svg.pause-icon').classList.remove('rotateout')
        this.playButton.querySelector('svg.paly-icon').classList.add('rotateout')
        this.playButton.querySelector('svg.pause-icon').classList.add('rotatein')
      } else {
        this.video.pause()
        this.playButton.querySelector('svg.paly-icon').classList.remove('rotateout')
        this.playButton.querySelector('svg.pause-icon').classList.remove('rotatein')
        this.playButton.querySelector('svg.paly-icon').classList.add('rotatein')
        this.playButton.querySelector('svg.pause-icon').classList.add('rotateout')
      }


    });
  }
}
