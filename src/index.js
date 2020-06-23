import Phaser from "phaser";
import {Boot} from "./scenes/boot.js"


// 使用 Web Audio API
var audioContext;
try {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
} catch (e) {
  console.error(e);
}


const config = {
  type: Phaser.AUTO,
  parent: "minorminer-game",
  width: 640,
  height: 480,
  //静态物体属性
  physics: {
    //设置街机物理模式
    default: "arcade",
    arcade: {
      gravity: { y: 0 },//引力
      debug: true,
    }},
    //加载游戏场景
    scene:[Boot],
     //游戏画面显示比例设置
  scale: {
    mode: Phaser.Scale.FIT, //自动缩放游戏画面
    autoCenter: Phaser.Scale.CENTER_BOTH, //游戏画面居中显示

  },
    //声音配置
    audio: {
      context: audioContext,
    }
  }

  const game = new Phaser.Game(config)


