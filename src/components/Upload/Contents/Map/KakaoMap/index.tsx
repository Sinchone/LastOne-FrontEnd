import React, { useEffect, useRef, useState } from 'react';
import CheckMarker from '@assets/png/checkMarker.png';
import NomalMarker from '@assets/png/nomalMarker.png';

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = ({ address }: any) => {
  const container = useRef();
  const [kakaoMap, setKakaoMap] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [markerInfo, setMarkerInfo] = useState('');

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

        setKakaoMap(map);
      });
    };
  }, [container]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    if (address === '') {
      return;
    }

    const ps = new window.kakao.maps.services.Places();

    // //검색어따라 지도에서 찾기

    const placesSearchCB = (data: string | any[], status: any, pagination: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }

        kakaoMap.setBounds(bounds);
      }
    };
    ps.keywordSearch(address, placesSearchCB);

    let selectedMarker: unknown = null;

    function displayMarker(place: React.SetStateAction<string>) {
      const nomalMarker = new window.kakao.maps.MarkerImage(
        NomalMarker,
        new window.kakao.maps.Size(36, 36),
        new window.kakao.maps.Point(13, 34)
      );
      const checkMarker = new window.kakao.maps.MarkerImage(
        CheckMarker,
        new window.kakao.maps.Size(36, 36),
        new window.kakao.maps.Point(13, 34)
      );

      // 마커를 생성하고 지도에 표시
      const marker = new window.kakao.maps.Marker({
        map: kakaoMap,
        position: new window.kakao.maps.LatLng(place.y, place.x),
        image: nomalMarker,
      });

      window.kakao.maps.event.addListener(marker, 'click', function () {
        // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
        // 마커의 이미지를 클릭 이미지로 변경합니다
        if (!selectedMarker || selectedMarker !== marker) {
          // 클릭된 마커 객체가 null이 아니면
          // 클릭된 마커의 이미지를 기본 이미지로 변경하고
          !!selectedMarker && selectedMarker.setImage(nomalMarker);

          // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
          marker.setImage(checkMarker);
          selectedMarker = marker;

          setMarkerInfo(place);
        } else {
          marker.setImage(nomalMarker);
          // 클릭된 마커를 빈값으로 설정합니다
          selectedMarker = null;

          setMarkerInfo(null);
        }
      });

      window.kakao.maps.event.addListener(kakaoMap, 'click', function () {
        marker.setImage(nomalMarker);
        selectedMarker = null;

        setMarkerInfo(null);
      });
    }

    // function displayMarker(place) {
    //   const nomalMarker = new window.kakao.maps.MarkerImage(
    //     NomalMarker,
    //     new window.kakao.maps.Size(36, 36),
    //     new window.kakao.maps.Point(13, 34)
    //   );

    //   let marker = new window.kakao.maps.Marker({
    //     map: kakaoMap,
    //     position: new window.kakao.maps.LatLng(place.y, place.x),
    //     image: nomalMarker,
    //   });

    //   window.kakao.maps.event.addListener(marker, 'click', function () {
    //     infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
    //     infowindow.open(map, marker);
    //   });
    // }
  }, [kakaoMap, address]);

  return <div id="map" style={{ width: '100%', height: 312, borderRadius: '8px' }} />;
};

export default KakaoMap;
