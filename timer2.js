var PassSec;   // 秒数カウント用変数
AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    this.startShowing();

    el.addEventListener(data.on, function () {

    });
  },

  startShowing: function () {
    PassSec = 0;   // カウンタのリセット
    PassageID = setInterval('showPassage()',1000);   // タイマーをセット(1000ms間隔)
  }

  /**
   * Setup fade-in + fade-out.
   */
   
});
function showPassage() {
   PassSec++;   // カウントアップ
   var msg = "ボタンを押してから " + PassSec + "秒が経過しました。";   // 表示文作成
   document.getElementById("PassageArea").innerHTML = msg;   // 表示更新
}
function stopShowing() {
   clearInterval( PassageID );   // タイマーのクリア
   document.getElementById("startcount").disabled = false;   // 開始ボタンの有効化
}