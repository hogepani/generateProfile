// script.js

function generateImage() {
  var inputText1 = document.getElementById("inputText1").value;
  var inputText2 = document.getElementById("inputText2").value;
  var inputText3 = document.getElementById("inputText3").value;
  var inputText4 = document.getElementById("inputText4").value;

  // ベースとなる画像とCanvas要素を取得
  var baseImage = document.getElementById("baseImage");
  var textCanvas = document.getElementById("textCanvas");
  var ctx = textCanvas.getContext("2d");

  // Canvasのサイズをベース画像と同じに設定
  textCanvas.width = baseImage.width;
  textCanvas.height = baseImage.height;

  // ベース画像をCanvasに描画
  ctx.drawImage(baseImage, 0, 0);

  // テキストを描画
  ctx.fillStyle = "#000000";
  ctx.font = "30px Arial";

  ctx.fillText(inputText1, 200, 390); // テキスト1の位置
  ctx.fillText(inputText2, 200, 600); // テキスト2の位置
  ctx.fillText(inputText3, 650, 390); // テキスト3の位置
  ctx.fillText(inputText4, 650, 600); // テキスト4の位置

  // ベース画像を非表示にする
  baseImage.style.display = "none";

  // 生成された画像を表示
  textCanvas.style.display = "block";
}
