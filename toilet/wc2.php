<?php
$base_url = 'https://www.geocoding.jp/api/?q='.$_GET['address'];
$tag = 'PHP';

$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $base_url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 証明書の検証を行わない
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);  // curl_execの結果を文字列で返す
$response = curl_exec($curl);

$xmlObject = new SimpleXMLElement($response);

curl_close($curl);


?>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>トイレ12</title>
<style type="text/css">
#container {
	width: 100%;
	margin: 0 auto;
}
#sample {
	width: 800px;
	height: 600px;
}
</style>
</head>
<body>

<div id="container">
	<div id="sample"></div>
</div>

<script>






var map;
var marker = [];
var infoWindow = [];

var images = [];
var MAX = 100;
 
window.onload = function () {

  for (var v = 0; v < MAX; ++v) {
    images.push('red.png');
    images.push('yellow.png');
    images.push('green.png');
    images.push('blue.png');
    images.push('violet.png');
  }

var markerData = [ // マーカーを立てる場所名・緯度・経度
  {
       name: '<a href="reservation.html">予約する</a>',
       lat: <?php echo $xmlObject->coordinate->lat ?>,
        lng: <?php echo $xmlObject->coordinate->lng ?>,
       icon: images[<?php echo $_GET['color'] ?>]
 }
];



/*
  for (var v = 0; v < MAX; ++v) {
    markerData[v] = {
       name:'',
       lat:'',
       lng:'',
       icon:''
    };
  }

  for (var v = 0; v < MAX; ++v) {

    markerData[v].name = 'トイレ' + v;
    markerData[v].lat = 0.04 * Math.random() + 33.840000 - 0.02;
    markerData[v].lng = 0.04 * Math.random() + 132.760000 - 0.02;
    markerData[v].icon = images[v];
  }
*/
 // 地図の作成
    var mapLatLng = new google.maps.LatLng({lat: <?php echo $xmlObject->coordinate->lat ?>, lng: <?php echo $xmlObject->coordinate->lng ?>}); // 緯度経度のデータ作成
   map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
     center: mapLatLng, // 地図の中心を指定
      zoom: 15 // 地図のズームを指定
   });
 
 // マーカー毎の処理
 for (var i = 0; i < markerData.length; i++) {
        markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
        marker[i] = new google.maps.Marker({ // マーカーの追加
         position: markerLatLng, // マーカーを立てる位置を指定
            map: map // マーカーを立てる地図を指定
       });
 
     infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
         content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
       });
 
     markerEvent(i); // マーカーにクリックイベントを追加
 }

 for (var i = 0; i < markerData.length; i++) { 
   marker[i].setOptions({// TAM 東京のマーカーのオプション設定
        icon: {
         url: markerData[i]['icon']// マーカーの画像を変更
       }
   });
}

}
 
// マーカーにクリックイベントを追加
function markerEvent(i) {
    marker[i].addListener('click', function() { // マーカーをクリックしたとき
      infoWindow[i].open(map, marker[i]); // 吹き出しの表示
  });
}








</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7mgZG_eiXwH2TEWNIQkJ8vQtmnUgWq18"></script>

<form action="wc.php" method="get" name="f1">
  住所<input type="text" name="address"><br>
  評価<select name="color">
    <option value="0">赤</option>
    <option value="1">黄</option>
    <option value="2">緑</option>
    <option value="3">青</option>
    <option value="4">紫</option>
  </select>
  <input type="submit" value="送信">
</form>

</body>
</html>



