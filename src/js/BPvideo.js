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
 * @LastEditTime: 2021-09-01 16:15:05
 */

import { getId } from "./utools";
import tplVideo from "../template/index.art";
import I18n from "../locales/I18n";
import VideoIcon from "./icon.js";
export default class BpVideo {
  constructor(opt) {
    this.options = opt;
    this.container = opt.container;
    this.lang = opt.lang && new I18n(opt.lang).t;
    this.icon = VideoIcon;
    this.radius = opt.radius; //圆角
    this.utools = opt.utools; //工具栏
    this.episode = opt.episode || []; //当前播放集数
    this.left = []; //"next", "loop", "live", "time";
    this.size = ""; //当前播放器规格大小  min middle large
    this.right = [
      "quality",
      "speed",
      "volume",
      "setting",
      "PIP",
      "pageFullOn",
      "FullOn",
    ]; //"quality", "speed", "volume", "setting", "PIP", "pageFullOn", "FullOn",

    this.process();
    this.init();
  }

  init() {
    this.container.innerHTML = tplVideo({
      logo: this.options.logo || null,
      icon: this.icon,
      size: this.size,
      lang: this.lang,
      radius: this.radius,
      footer: {
        left: this.left,
        right: this.right,
      },
      utools: this.utools,
    });

    this.beipyVideo = this.container.querySelector(".beipy-video"); //当前视频盒子
    this.video = this.container.querySelector("video"); //视频
    this.logo = this.container.querySelector(".beipy-video-logo");
    this.playButton = this.container.querySelector(".play-icon"); //Footer播放按钮图标
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
    // this.beipyVideo.addEventListener("contextmenu", (e) => {
    //   const event = e || window.event;
    //   event.preventDefault();
    //   console.log("邮件点击");
    // });
    // // 播放按钮
    this.playButton.addEventListener("click", (e) => {
      if (this.video.paused) {
        this.video.play();
        this.playButton
          .querySelector("svg.paly-icon")
          .classList.remove("rotatein");
        this.playButton
          .querySelector("svg.pause-icon")
          .classList.remove("rotateout");
        this.playButton
          .querySelector("svg.paly-icon")
          .classList.add("rotateout");
        this.playButton
          .querySelector("svg.pause-icon")
          .classList.add("rotatein");
      } else {
        this.video.pause();
        this.playButton
          .querySelector("svg.paly-icon")
          .classList.remove("rotateout");
        this.playButton
          .querySelector("svg.pause-icon")
          .classList.remove("rotatein");
        this.playButton
          .querySelector("svg.paly-icon")
          .classList.add("rotatein");
        this.playButton
          .querySelector("svg.pause-icon")
          .classList.add("rotateout");
      }
    });
  }
  process() {
    // 处理尺寸
    if (this.options.width && this.options.height) {
      this.shape(this.options.width);
      this.container.style.width = this.options.width + "px";
      this.container.style.height = this.options.height + "px";
    } else if (this.options.width) {
      if (this.options.ratio && this.options.ratio.length == 2) {
        this.container.style.height =
          this.options.width / this.ratio(this.options.ratio) + "px";
        this.container.style.width = this.options.width + "px";
        this.shape(this.options.width);
      } else {
        this.container.style.height =
          this.options.width / this.ratio([16, 9]) + "px";
        this.container.style.width = this.options.width + "px";
        this.shape(this.options.width);
      }
    } else if (this.options.height) {
      if (this.options.ratio && this.options.ratio.length == 2) {
        this.container.style.width =
          this.options.height * this.ratio(this.options.ratio) + "px";
        this.container.style.height = this.options.height + "px";
        this.shape(this.options.width);
      } else {
        this.container.style.width =
          this.options.height * this.ratio([16, 9]) + "px";
        this.container.style.width = this.options.width + "px";
        this.shape(this.options.width);
      }
    } else {
      console.log(
        "所有尺寸都没有",
        this.container.parentNode.offsetWidth,
        this.container.parentNode.offsetWidth / this.ratio([16, 9])
      );
      // 都不存在获取父级节点看他老子有多大我就变多大
    }
  }
  /* 设置布局min middle large */
  shape(width) {
    if (width <= 400) {
      console.log("-4");
      this.size = "min";
      this.episode &&
        this.episode.length > 0 &&
        this.left.push({ type: "next", show: false });
      this.options.loop && this.left.push({ type: "loop", show: false });
      this.options.live && this.left.push({ type: "live", show: true });
      this.left.push({ type: "time", show: false });
    } else if (width <= 650) {
      this.size = "middle";
      this.episode &&
        this.episode.length > 0 &&
        this.left.push({ type: "next", show: true });
      this.options.loop && this.left.push({ type: "loop", show: false });
      this.options.live && this.left.push({ type: "live", show: true });
      this.left.push({ type: "time", show: true });
    } else if (650 < width) {
      this.size = "large";
      this.episode &&
        this.episode.length > 0 &&
        this.left.push({ type: "next", show: true });
      this.options.loop && this.left.push({ type: "loop", show: true });
      this.options.live && this.left.push({ type: "live", show: true });
      this.left.push({ type: "time", show: true });
    }
  }
  /* 计算容器比例 */
  ratio(data) {
    return data[0] / data[1];
  }
}
