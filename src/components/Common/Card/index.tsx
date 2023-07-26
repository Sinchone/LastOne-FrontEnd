import React from 'react';
import MapMarkerIcon from '@assets/icon/mapmarker.svg';
import * as S from './style';
import { useRouter } from 'next/router';

interface Props {
  size: 'main' | 'matching';
  status: '모집중' | '모집완료' | '기간만료';
  preferGender: '남성만' | '여성만' | '성별무관';
  title: string;
  gym: string;
  startedAt: string;
  imgUrl: string;
  id: number;
}

const Card = ({ size, status, preferGender, title, gym, startedAt, imgUrl, id }: Props) => {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/post/${id}`);
  };

  return (
    <S.Wrapper size={size} onClick={() => handleClick(id)}>
      <S.ImgBox imgUrl={imgUrl}>
        <S.Badge>
          <S.Recruit>{status}</S.Recruit>
          <S.Gender>{preferGender}</S.Gender>
        </S.Badge>
      </S.ImgBox>
      <S.Description>
        <span className="title">{title}</span>
        <span>
          <MapMarkerIcon />
          <span className="gym">{gym}</span>
        </span>
        <span>운동날짜 {startedAt}</span>
      </S.Description>
    </S.Wrapper>
  );
};

export default Card;
