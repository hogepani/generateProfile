// script.js

function generateImage() {
  var inputText1 = document.getElementById("inputText1").value;
  var inputText2 = document.getElementById("inputText2").value;
  var inputText3 = document.getElementById("inputText3").value;
  var inputText4 = document.getElementById("inputText4").value;

  // ベースとなる画像とCanvas要素を取得
  var baseImage = document.getElementById("baseImage");
  var textCanvas = document.getElementById("textCanvas");
  // var generatedImage = document.getElementById("generatedImage");
  var ctx = textCanvas.getContext("2d");

  // ベース画像を非表示にする
  baseImage.style.display = "none";

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
  ctx.fillText(inputText3, 630, 390); // テキスト3の位置
  ctx.fillText(inputText4, 630, 600); // テキスト4の位置

  // ベース画像を非表示にする
  baseImage.style.display = "none";
  
  // 生成された画像を表示
  textCanvas.style.maxWidth = "100%"; // 画像の最大幅を親要素に合わせる
  // textCanvas.style.display = "block";

  // 生成された画像をCanvasから取得
  // var generatedImageDataUrl = textCanvas.toDataURL();

  // 生成された画像を表示
  // generatedImage.src = generatedImageDataUrl;
  // generatedImage.style.maxWidth = "100%"; // 画像の最大幅を親要素に合わせる
  
  // スマートフォンで長押しして画像をダウンロードできるようにする
  // textCanvas.addEventListener("touchstart", function(event) {
  //   var downloadLink = document.createElement("a");
  //   downloadLink.href = textCanvas.toDataURL();
  //   downloadLink.download = "generated_image.jpg";
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);
  // });

  // 画像をクリックしてシェアダイアログを表示
  // textCanvas.addEventListener("touchstart", function(event) {
  //   if (navigator.share) {
  //     navigator.share({
  //       title: "Generated Image",
  //       text: "Check out this generated image!",
  //       url: textCanvas.toDataURL(),
  //     })
  //     .then(() => console.log("Shared successfully"))
  //     .catch((error) => console.error("Error sharing:", error));
  //   } else {
  //     // ブラウザがnavigator.shareをサポートしていない場合、ダウンロード用のリンクを作成
  //     var downloadLink = document.createElement("a");
  //     downloadLink.href = textCanvas.toDataURL();
  //     downloadLink.download = "generated_image.jpg";
  //     document.body.appendChild(downloadLink);
  //     downloadLink.click();
  //     document.body.removeChild(downloadLink);
  //   }
  // });
  
  // 画像を長押しして別タブで開く
  generatedImage.addEventListener("touchstart", function(event) {
    event.preventDefault(); // デフォルトの動作をキャンセル（選択メニューを表示するのを防ぐ）

    // 新しいウィンドウまたはタブを開く
    window.open(textCanvas.toDataURL(), '_blank');
  });
}
