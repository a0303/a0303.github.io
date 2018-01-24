AFRAME.registerComponent('set-image1', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    var m="こ";
    document.getElementById("ko").innerHTML=m;

    this.setupFadeAnimation();  //

    el.addEventListener(data.on, function () {
      // Fade out image.
      data.target.emit('set-image-fade');
      // Wait for fade to complete.
      setTimeout(function () {
        time();
      }, data.dur);
    });
  },

  setupFadeAnimation: function () {
    
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

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

});
// 時間のカウント(終了まで)
function time(){
  var count=0;
  var countup=function(){
    //console.log(count++);
    count++;
    //PassSec=count;
    //showPassage();
    var msg = "ボタンを押してから " + count + "秒が経過しました。";   // 表示文作成
    document.getElementById("ko").innerHTML = msg;   // 表示更新
    var id=setTimeout(countup,1000);
    /*if (count>=5) {
      clearTimeout(id);
    }*/
  }
  countup();
}