import React from 'react';
import * as S from './style';
import MapMarkerIcon from '@assets/icon/mapmarker.svg';
import RightArrowIcon from '@assets/icon/right-arrow.svg';
import ProfileIcon from '@assets/icon/profile.svg';

const Content = () => {
  return (
    <S.Wrapper>
      <S.MenuTab>
        <S.Tab>
          <span>받은 신청</span>
        </S.Tab>
        <S.SecondTab>
          <span>요청한 신청</span>
        </S.SecondTab>
      </S.MenuTab>
      <S.ApplyPostList>
        <S.ApplyPost>
          <S.ApplyHeader>
            <S.ApplyPostInfo>
              <span className="title">청춘의 끓는 피다</span>
              <span className="date">2023.03.03.20:00</span>
              <span className="location">
                <MapMarkerIcon />
                스포애니 성산점
              </span>
            </S.ApplyPostInfo>
            <S.MovePost>
              게시글 더보기
              <RightArrowIcon />
            </S.MovePost>
          </S.ApplyHeader>
          <S.ApplyItem>
            <S.ApplyProfile>
              <ProfileIcon />
              <span>운동관</span>
            </S.ApplyProfile>
            <S.Contour />
            <S.Gender>남성</S.Gender>
            <S.Contour />
            <span className="time">30분전 신청</span>
            <S.ButtonGroup>
              <S.ApplyButton>함께하기</S.ApplyButton>
              <S.ChattingButton>채팅하기</S.ChattingButton>
            </S.ButtonGroup>
          </S.ApplyItem>
        </S.ApplyPost>
        <S.ApplyPost>
          <S.ApplyHeader>
            <S.ApplyPostInfo>
              <span className="title">청춘의 끓는 피다</span>
              <span className="date">2023.03.03.20:00</span>
              <span className="location">
                <MapMarkerIcon />
                스포애니 성산점
              </span>
            </S.ApplyPostInfo>
            <S.MovePost>
              게시글 더보기
              <RightArrowIcon />
            </S.MovePost>
          </S.ApplyHeader>
          <S.ApplyItem>
            <S.ApplyProfile>
              <ProfileIcon />
              <span>운동관</span>
            </S.ApplyProfile>
            <S.Contour />
            <S.Gender>남성</S.Gender>
            <S.Contour />
            <span className="time">30분전 신청</span>
            <S.ButtonGroup>
              <S.ApplyButton>함께하기</S.ApplyButton>
              <S.ChattingButton>채팅하기</S.ChattingButton>
            </S.ButtonGroup>
          </S.ApplyItem>
        </S.ApplyPost>
      </S.ApplyPostList>
    </S.Wrapper>
  );
};

export default Content;
