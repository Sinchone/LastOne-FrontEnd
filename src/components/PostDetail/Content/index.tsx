import Image from 'next/image';
import * as S from './style';
import CheckMarker from '@assets/png/checkMarker.png';
import Marker from '@assets/icon/mapmarker.svg';
import { Map } from '@components/PostDetail';

const Content = () => {
  return (
    <S.Wrapper>
      <S.WriterWrapper>
        <h3>청춘의 끓는 피다</h3>
        <S.Writer>
          <div>
            <S.ImageBox>
              <Image src={CheckMarker} fill alt="profile" style={{ objectFit: 'cover' }} />
            </S.ImageBox>
            <S.WriterInfo>
              <div>
                <span>운동관</span>
                <S.Gender>남성</S.Gender>
              </div>
              <span>30분전</span>
            </S.WriterInfo>
          </div>
          <S.ProfileButton>프로필 상세</S.ProfileButton>
        </S.Writer>
        <S.HealthInfoWrapper>
          <div>
            <span>데드리프트</span>
            <span>000 kg</span>
          </div>
          <div>
            <span>스쿼트</span>
            <span>000 kg</span>
          </div>
          <div>
            <span>벤치</span>
            <span>000 kg</span>
          </div>
          <div>
            <span>운동목표</span>
            <span>다이어트</span>
          </div>
        </S.HealthInfoWrapper>
      </S.WriterWrapper>
      <S.HealthCondition>
        <div>
          <span>운동날짜</span>
          <span>2023.03.03 20:00</span>
        </div>
        <div>
          <span>선호 성별</span>
          <span>남성만</span>
        </div>
      </S.HealthCondition>
      <S.PlaceWrapper>
        <span>헬스장 위치</span>
        <div>
          <Marker />
          <span>위치 스포애니 성산점</span>
        </div>
        <Map />
      </S.PlaceWrapper>
      <S.DescriptionWrapper>
        <span>상세설명</span>
        <div>
          <div>
            <Image src={CheckMarker} fill alt="profile" style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <Image src={CheckMarker} fill alt="profile" style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <Image src={CheckMarker} fill alt="profile" style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <p>
          안녕하세요 같이 운동하고 싶어서 메이트 찾고 있습니다! 저는 3대 350이고 3대 300이상 남성분 구하고 있습니다 많은
          신청 부탁드립니다~!
        </p>
      </S.DescriptionWrapper>
      <S.ButtonsWrapper>
        <S.ChatButton>채팅하기</S.ChatButton>
        <S.ApplyButton>신청하기</S.ApplyButton>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};

export default Content;
