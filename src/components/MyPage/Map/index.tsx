import React, { useEffect } from 'react';

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
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);
        //마커가 표시 될 위치
        const markerPosition = new window.kakao.maps.LatLng(37.62197524055062, 127.16017523675508);

        // 마커를 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
      });
    };
  };
  return <div id="map" style={{ width: '100%', height: 312, borderRadius: '8px' }}></div>;
}
