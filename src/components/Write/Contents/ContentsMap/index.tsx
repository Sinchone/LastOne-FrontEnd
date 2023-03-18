import React, { useEffect, useRef, useState } from 'react';
import GreyMarker from '../../../../../public/nomalMarker.png';
import BlueMarker from './checkMarker.png';

declare global {
  interface Window {
    kakao: any;
  }
}

const ContentsMap = () => {
  const [address, setAddress] = useState('');
  const container = useRef();
  const [kakaoMap, setKakaoMap] = useState(null);

  const [markerInfo, setMarkerInfo] = useState('');

  const onChangeMap = (e) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById('map');

        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);

        const icon = new window.kakao.maps.MarkerImage('GreyMarker', new window.kakao.maps.Size(31, 35), {
          offset: new window.kakao.maps.Point(16, 16),
          alt: '마커 이미지 예제',
          shape: 'poly',
          coords: '1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33',
        });

        const marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(33.450701, 126.570667),
          image: icon,
        });

        setKakaoMap(map);
      });
    };
  }, [container]);

  // useEffect(() => {
  //   if (kakaoMap === null) {
  //     return;
  //   }

  //   if (address === '') {
  //     return;
  //   }

  //   const ps = new window.kakao.maps.services.Places();

  //   // //검색어따라 지도에서 찾기

  //   const placesSearchCB = (data, status, pagination) => {
  //     if (status === window.kakao.maps.services.Status.OK) {
  //       let bounds = new window.kakao.maps.LatLngBounds();

  //       for (let i = 0; i < data.length; i++) {
  //         displayMarker(data[i]);
  //         bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
  //       }

  //       kakaoMap.setBounds(bounds);
  //     }
  //   };
  //   ps.keywordSearch(address, placesSearchCB);

  //   let selectedMarker: any = null;

  //   function displayMarker(place) {
  //     const nomalMarker = new window.kakao.maps.MarkerImage(
  //       GreyMarker,
  //       new window.kakao.maps.Size(36, 36),
  //       new window.kakao.maps.Point(13, 34)
  //     );
  //     const checkMarker = new window.kakao.maps.MarkerImage(
  //       BlueMarker,
  //       new window.kakao.maps.Size(36, 36),
  //       new window.kakao.maps.Point(13, 34)
  //     );

  //     // 마커를 생성하고 지도에 표시
  //     const marker = new window.kakao.maps.Marker({
  //       map: kakaoMap,
  //       position: new window.kakao.maps.LatLng(place.y, place.x),
  //       image: nomalMarker,
  //     });

  //     // window.kakao.maps.event.addListener(marker, 'click', function () {
  //     //   // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
  //     //   // 마커의 이미지를 클릭 이미지로 변경합니다
  //     //   if (!selectedMarker || selectedMarker !== marker) {
  //     //     // 클릭된 마커 객체가 null이 아니면
  //     //     // 클릭된 마커의 이미지를 기본 이미지로 변경하고
  //     //     !!selectedMarker && selectedMarker.setImage(markerImage);

  //     //     // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
  //     //     marker.setImage(checkMarker);
  //     //     selectedMarker = marker;

  //     //     setMarkerInfo(place);
  //     //   } else {
  //     //     marker.setImage(nomalMarker);
  //     //     // 클릭된 마커를 빈값으로 설정합니다
  //     //     selectedMarker = null;

  //     //     setMarkerInfo(null);
  //     //   }
  //     // });

  //     // window.kakao.maps.event.addListener(kakaoMap, 'click', function () {
  //     //   marker.setImage(nomalMarker);
  //     //   selectedMarker = null;

  //     //   setMarkerInfo(null);
  //     // });
  //   }

  //   // function displayMarker(place) {
  //   //   const nomalMarker = new kakao.maps.MarkerImage(
  //   //     GreyMarker,
  //   //     new kakao.maps.Size(36, 36),
  //   //     new kakao.maps.Point(13, 34)
  //   //   );

  //   //   let marker = new kakao.maps.Marker({
  //   //     map: kakaoMap,
  //   //     position: new kakao.maps.LatLng(place.y, place.x),
  //   //     image: nomalMarker,
  //   //   });

  //   //   kakao.maps.event.addListener(marker, 'click', function () {
  //   //     infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
  //   //     infowindow.open(map, marker);
  //   //   });
  //   // }
  // }, [kakaoMap, address]);

  return (
    <div>
      <div>헬스장 위치</div>
      <div>
        <input placeholder="헬스장 위치검색" onChange={onChangeMap} />
        <div id="map" style={{ width: '100%', height: 312 }} />;
      </div>
    </div>
  );
};

export default ContentsMap;
