var PassSec;   // 秒数カウント用変数
 
// 繰り返し処理の中身
function showPassage() {
   PassSec++;   // カウントアップ
   var msg = "ボタンを押してから " + PassSec + "秒が経過しました。";   // 表示文作成
   document.getElementById("PassageArea").innerHTML = msg;   // 表示更新
}
 
// 繰り返し処理の開始
function startShowing() {
   PassSec = 0;   // カウンタのリセット
   PassageID = setInterval('showPassage()',1000);   // タイマーをセット(1000ms間隔)
   document.getElementById("startcount").disabled = true;   // 開始ボタンの無効化
}
 
// 繰り返し処理の中止
function stopShowing() {
   clearInterval( PassageID );   // タイマーのクリア
   document.getElementById("startcount").disabled = false;   // 開始ボタンの有効化
}