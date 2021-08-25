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
 * @LastEditTime: 2021-08-25 14:24:47
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
    this.radius = opt.radius;
    this.utools = opt.utools;
    this.episode = opt.episode || [];
    this.left = []; //"next", "loop", "live", "time";
    this.right = []; //"quality", "speed", "volume", "setting", "PIP", "pageFullOn", "FullOn",

    this.episode && this.episode.length > 0 && this.left.push("next");
    opt.loop && this.left.push("loop");
    opt.live && this.left.push("live");
    this.left.push("time");
    this.init();
  }

  init() {
    this.container.innerHTML = tplVideo({
      logo: "https://gw.alicdn.com/tfs/TB1ugm9f5cKOu4jSZKbXXc19XXa-356-76.png",
      icon: this.icon,
      lang: this.lang,
      radius: this.radius,
      footer: {
        left: this.left,
        right: this.right,
      },
      utools: this.utools,
    });

    this.beipyVideo = this.container.querySelector(".beipy-video"); //当前总盒子
    this.video = this.container.querySelector("video"); //视频

    this.palyIcon = this.container.querySelector(".play-icon svg.paly-icon"); //Footer播放按钮图标
    this.pauseIcon = this.container.querySelector(".play-icon svg.pause-icon"); //Footer暂停按钮图标
    this.tipBox = this.container.querySelector(".beipy-video-controls-tip"); //tip消息提示盒子
    this.tip = this.container.querySelector(
      ".beipy-video-controls-tip .beipy-video-controls-tip-msg"
    ); //消息本体

    /*start Progress  */
    this.progressBox = this.container.querySelector(
      ".beipy-video-controls-wrap-progress"
    ); //进度条盒子
    this.progressLoading = this.container.querySelector(
      ".beipy-video-controls-wrap-progress .progress-loading"
    ); //预加载
    this.progressCurrent = this.container.querySelector(
      ".beipy-video-controls-wrap-progress .progress-currentloading"
    ); //当前播放进度
    this.progressCurrentplay = this.container.querySelector(
      ".beipy-video-controls-wrap-progress .progress-currentplay"
    ); //加载控制钮
    this.progressHighlightBox = this.container.querySelector(
      ".beipy-video-controls-wrap-progress .progress-highlight"
    ); //进度高亮盒子
    /*end Progress  */

    // 右键菜单
    // this.beipyVideo.addEventListener('contextmenu', (e) => {
    //   const event = e || window.event;
    //   event.preventDefault();
    //   console.log('邮件点击');
    // })
    // // 播放按钮
    // this.playButton.addEventListener('click', (e) => {
    //   if (this.video.paused) {
    //     this.video.play()
    //     this.playButton.querySelector('svg.paly-icon').classList.remove('rotatein')
    //     this.playButton.querySelector('svg.pause-icon').classList.remove('rotateout')
    //     this.playButton.querySelector('svg.paly-icon').classList.add('rotateout')
    //     this.playButton.querySelector('svg.pause-icon').classList.add('rotatein')
    //   } else {
    //     this.video.pause()
    //     this.playButton.querySelector('svg.paly-icon').classList.remove('rotateout')
    //     this.playButton.querySelector('svg.pause-icon').classList.remove('rotatein')
    //     this.playButton.querySelector('svg.paly-icon').classList.add('rotatein')
    //     this.playButton.querySelector('svg.pause-icon').classList.add('rotateout')
    //   }
    // });
  }
}
