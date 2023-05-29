import React, { useEffect } from 'react';
import CheckMarker from '@assets/png/checkMarker.png';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById('map');

        const options = {
          center: new window.kakao.maps.LatLng(37.548574956658, 126.91440348215), //지도의 중심좌표.
          level: 2, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);

        const imageSrc = CheckMarker, // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(56, 56), // 마커이미지의 크기입니다
          imageOption = { offset: new window.kakao.maps.Point(27, 56) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        //마커가 표시 될 위치
        const markerPosition = new window.kakao.maps.LatLng(37.548574956658, 126.91440348215);

        // 마커를 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);

        // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        const content = `
        <div class="custom-overlay">
          <span class="title">스포애니 성산점</span>
          <span class="address">서울 마포구 독막로 10 성지빌딩 지하 1층</span>
        </div>`;

        // 커스텀 오버레이가 표시될 위치입니다
        const position = new window.kakao.maps.LatLng(37.548574956658, 126.91440348215);

        // 커스텀 오버레이를 생성합니다
        const customOverlay = new window.kakao.maps.CustomOverlay({
          map: map,
          position: position,
          content: content,
          yAnchor: 2,
        });
        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);
      });
    };
  };
  return <div id="map" style={{ width: '100%', height: 312, borderRadius: '8px', zIndex: 80 }}></div>;
}
