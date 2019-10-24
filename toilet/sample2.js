var map;
var marker = [];
var infoWindow = [];

var images = [];
var MAX = 100;
var markerData = [];
/*var markerData = [ // マーカーを立てる場所名・緯度・経度
  {
       name: 'サイボウズ',
       lat: 33.83995,
        lng: 132.769149
 }, {
        name: 'マツヤマンスペース',
     lat: 33.836478,
        lng: 132.763156
 }, {
        name: 'イズミ家',
     lat: 33.845689,
        lng: 132.755304,
      icon: 's_icon2.png' 
 }
];*/
 
window.onload = function () {
/*
  for (var v = 0; v < MAX; ++v) {
    images.push('s_icon.png');
    images.push('s_icon2.png');
    images.push('s_icon3.png');
    images.push('s_icon4.png');
    images.push('s_icon5.png');
  }

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
    var mapLatLng = new google.maps.LatLng({lat: 33.840000, lng: 132.760000}); // 緯度経度のデータ作成
   map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
     center: mapLatLng, // 地図の中心を指定
      zoom: 15 // 地図のズームを指定
   });
 

/*
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

*/

}
 
// マーカーにクリックイベントを追加
function markerEvent(i) {
    marker[i].addListener('click', function() { // マーカーをクリックしたとき
      infoWindow[i].open(map, marker[i]); // 吹き出しの表示
  });
}