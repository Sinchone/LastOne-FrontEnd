import React, { useEffect, useRef, useState } from 'react';
import CheckMarker from '@assets/png/checkMarker.png';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  searchPlace: string;
  handleClickLocation: (place: any) => void;
}

export default function SearchMap({ searchPlace, handleClickLocation }: Props) {
  const [kakaoMap, setKakaoMap] = useState<any>(null);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const customOverLay = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        //const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
        const container = document.getElementById('map');

        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);
        //마커가 표시 될 위치
        setKakaoMap(map);
        // 마커를 생성
      });
    };
  }, []);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    if (searchPlace === '') {
      return;
    }

    const ps = new window.kakao.maps.services.Places();

    //   // //검색어따라 지도에서 찾기

    const placesSearchCB = (data: any, status: any, pagination: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }

        kakaoMap.setBounds(bounds);
      }
    };
    ps.keywordSearch(searchPlace, placesSearchCB);

    // let selectedMarker: any = null;

    function displayMarker(place: any) {
      const checkMarker = new window.kakao.maps.MarkerImage(
        CheckMarker,
        new window.kakao.maps.Size(36, 36),
        new window.kakao.maps.Point(13, 34)
      );

      // 마커를 생성하고 지도에 표시
      const marker = new window.kakao.maps.Marker({
        map: kakaoMap,
        position: new window.kakao.maps.LatLng(place.y, place.x),
        image: checkMarker,
      });
      window.kakao.maps.event.addListener(marker, 'click', function () {
        setSelectedPlace(place);
        handleClickLocation(place);
      });
    }
  }, [kakaoMap, searchPlace]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }
    if (customOverLay.current !== null) customOverLay.current.setMap(null);

    const content =
      `<div style="position:relative; bottom: 40px; display: flex; flex-direction: column; align-items: center; width: 180px; height: 66px;  border-radius: 8px; padding: 12px 16px 12px 16px;  gap: 4px; background-color: #000C4A;">` +
      `<span style="font-weight: 700; font-size: 16px; line-height: 22px; color:#00DB80">${selectedPlace.place_name}</span>` +
      `<span style="font-weight: 400; font-size: 12px; line-height: 16px; color:#EEEEEE">${selectedPlace.road_address_name}</span>` +
      '</div>';

    customOverLay.current = new window.kakao.maps.CustomOverlay({
      map: kakaoMap,
      position: new window.kakao.maps.LatLng(selectedPlace?.y, selectedPlace?.x),
      content: content,
      yAnchor: 1,
    });
  }, [selectedPlace]);

  return <div id="map" style={{ width: '100%', height: '70vh', borderRadius: '8px' }}></div>;
}
