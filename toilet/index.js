var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('sample'), { // #sample���Ͽޤ�������
     center: { // �Ͽޤ��濴�����
           lat: 33.83995, // ����
          lng: 132.769149 // ����
       },
      zoom: 19 // �ϿޤΥ���������
   });
}