var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
     center: { // 地図の中心を指定
           lat: 33.83995, // 緯度
          lng: 132.769149 // 経度
       },
      zoom: 19 // 地図のズームを指定
   });
}