import Image from 'next/image';
import * as S from './style';
import CheckMarker from '@assets/png/checkMarker.png';
import Marker from '@assets/icon/mapmarker.svg';
import Check from '@assets/icon/check.svg';
import { useState } from 'react';
import ModalLayout from '@components/Common/ModalLayout';
import { Map } from '@components/Common';

const Content = () => {
  const [isPartnerRequested, setIsPartnerRequested] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  const [isPartnerCancelRequested, setIsPartnerCancelRequested] = useState(false);
  const [isPartnerCancel, setIsPartnerCancel] = useState(false);

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
        {/* 조회 API 응답결과로 받은 주소 넘겨줘야 함 */}
        {/* <Map searchPlace={}/> */}
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
        <S.ChatButton onClick={() => alert('구현 예정입니다.')}>채팅하기</S.ChatButton>
        {isPartner ? (
          <S.CancelButton
            onClick={() => {
              setIsPartnerRequested(false);
              setIsPartnerCancelRequested(true);
            }}
          >
            취소하기
          </S.CancelButton>
        ) : (
          <S.PrimaryButton
            onClick={() => {
              setIsPartnerRequested(true);
              setIsPartner(true);
            }}
          >
            신청하기
          </S.PrimaryButton>
        )}
      </S.ButtonsWrapper>

      {isPartnerRequested && (
        <ModalLayout isOpen={isPartnerRequested} handleClose={() => setIsPartnerRequested(false)}>
          <S.ModalWrapper>
            <S.ModalSpanWrapper>
              <span>파트너가 신청되었습니다.</span>
              <span>신청 목록을 확인해주세요</span>
            </S.ModalSpanWrapper>
            <S.ModalBtnsWrapper>
              <S.PrimaryButton onClick={() => alert('신청목록 확인')}>신청목록 확인</S.PrimaryButton>
              <div onClick={() => setIsPartnerRequested(false)}>나중에 다시 확인</div>
            </S.ModalBtnsWrapper>
          </S.ModalWrapper>
        </ModalLayout>
      )}

      {isPartnerCancelRequested && (
        <ModalLayout isOpen={isPartnerCancelRequested} handleClose={() => setIsPartnerCancelRequested(false)}>
          <S.ModalWrapper>
            <S.ModalSpanWrapper>
              <span>정말로 파트너 매칭신청을</span>
              <span>취소하시겠어요?</span>
            </S.ModalSpanWrapper>
            <S.ModalBtnsWrapper>
              <S.CancelButton
                onClick={() => {
                  alert('취소하기');
                  setIsPartner(false);
                  setIsPartnerCancelRequested(false);
                  setIsPartnerCancel(true);
                }}
              >
                취소하기
              </S.CancelButton>
              <div onClick={() => setIsPartnerCancelRequested(false)}>아니요</div>
            </S.ModalBtnsWrapper>
          </S.ModalWrapper>
        </ModalLayout>
      )}

      {isPartnerCancel && (
        <ModalLayout isOpen={isPartnerCancel} handleClose={() => setIsPartnerCancel(false)}>
          <S.CancelModalWrapper>
            <div>
              <Check />
              <S.ModalSpanWrapper>
                <span>성공적으로</span>
                <span>취소되었습니다!</span>
              </S.ModalSpanWrapper>
            </div>
          </S.CancelModalWrapper>
        </ModalLayout>
      )}
    </S.Wrapper>
  );
};

export default Content;
