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
      // Fade out image.
      data.target.emit('set-image-fade');
      // Wait for fade to complete.
      setTimeout(function () {
        // Set image.
        data.target.setAttribute('material', 'src', data.src);
      }, data.dur);
    });
  },
  
  startShowing: function () {
    var data = this.data;
    var targetEl = this.data.target;
    PassSec = 0;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { 
      //PassageID = setInterval('showPassage()',1000);
      return; 
    }
    targetEl.dataset.setImageFadeSetup = true;

    //PassageID = setInterval('showPassage()',1000);
    
    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  }
/*
  showPassage: function() {
   PassSec++;   // カウントアップ
   var msg = "ボタンを押してから " + PassSec + "秒が経過しました。";   // 表示文作成
   document.getElementById("PassageArea").innerHTML = msg;   // 表示更新
}
stopShowing: function() {
   clearInterval( PassageID );   // タイマーのクリア
   document.getElementById("startcount").disabled = false;   // 開始ボタンの有効化
}*/
});