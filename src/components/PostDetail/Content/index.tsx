import { useEffect, useState } from 'react';
import * as S from './style';

import Image from 'next/image';
import moment from 'moment';

import { PostDetailType } from '@typing/post';
import { Application } from '@typing/application';

import { Map, Modal } from '@components/Common';
import ProfileIcon from '@assets/icon/profilelarge.svg';
import Marker from '@assets/icon/mapmarker.svg';

import { createImageUrl } from '@utils/createImageUrl';
import { createApplication, deleteApplication } from '@apis/application';
import { useGetRequestedApplications } from '@hooks/application/queries';

interface Props {
  isOther: boolean;
  post: PostDetailType;
}

const Content = ({ isOther, post }: Props) => {
  const { data: requestedApplications } = useGetRequestedApplications();
  const [applicationId, setApplicationId] = useState();
  const [isPartner, setIsPartner] = useState<boolean>();

  const [isPartnerRequested, setIsPartnerRequested] = useState(false);
  const [isPartnerCancelRequested, setIsPartnerCancelRequested] = useState(false);
  const [isPartnerCancel, setIsPartnerCancel] = useState(false);

  useEffect(() => {
    const recruitmentId = post.recruitmentId;
    const applications = requestedApplications?.data || [];
    const filteredApplication = applications.filter(
      (application: Application) => application.recruitmentId === recruitmentId
    );
    const applicationId = filteredApplication.length ? filteredApplication[0].applicationId : null;

    setApplicationId(applicationId);
    setIsPartner(applicationId ? true : false);
  }, [post, requestedApplications]);

  const handleCreateApplication = () => {
    createApplication(post.recruitmentId)
      .then((response) => {
        console.log(response);
        setIsPartnerRequested(true);
        setIsPartner(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancelApplication = () => {
    if (applicationId) {
      deleteApplication(applicationId)
        .then((response) => {
          console.log(response);
          setIsPartnerCancel(true);
          setIsPartner(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <S.Wrapper>
      <S.WriterWrapper>
        <h3>{post.title}</h3>

        <S.Writer>
          <div>
            <S.ImageBox>
              {post.profileUrl ? (
                <Image
                  src={createImageUrl(post.profileUrl as string)}
                  fill
                  alt="profile"
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <ProfileIcon />
              )}
            </S.ImageBox>
            <S.WriterInfo>
              <div>
                <span>{post.nickname}</span>
                <S.Gender>{post.gender}</S.Gender>
              </div>
              <span>{moment(post.createdAt.date).format('yyyy.MM.DD')}</span>
            </S.WriterInfo>
          </div>
          <S.ProfileButton onClick={() => alert('프로필 상세 페이지로 이동')}>프로필 상세</S.ProfileButton>
        </S.Writer>

        <S.HealthInfoWrapper>
          <div>
            <span>데드리프트</span>
            <span>{post.sbd.deadLift ? `${post.sbd.deadLift} kg` : '-'}</span>
          </div>
          <div>
            <span>스쿼트</span>
            <span>{post.sbd.squat ? `${post.sbd.squat} kg` : '-'}</span>
          </div>
          <div>
            <span>벤치</span>
            <span>{post.sbd.benchPress ? `${post.sbd.benchPress} kg` : '-'}</span>
          </div>
          <div>
            <span>운동목표</span>
            <span>{post.workoutPurpose || '-'}</span>
          </div>
        </S.HealthInfoWrapper>
      </S.WriterWrapper>

      <S.HealthCondition>
        <div>
          <span>운동날짜</span>
          <span>{moment(post.startedAt.date).format('yyyy.MM.DD HH:mm')}</span>
        </div>
        <div>
          <span>선호 성별</span>
          <span>{post.preferGender}</span>
        </div>
      </S.HealthCondition>

      <S.PlaceWrapper>
        <span>헬스장 위치</span>
        <div>
          <Marker />
          <span>{post.gym.name}</span>
        </div>
        <Map searchPlace={post.gym.name} />
      </S.PlaceWrapper>

      <S.DescriptionWrapper>
        <span>상세설명</span>

        {post.imgUrls.length ? (
          <S.ImageWrapper>
            {post.imgUrls.map((imgUrl) => (
              <div key={imgUrl}>
                <Image src={imgUrl} fill alt="image" style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </S.ImageWrapper>
        ) : (
          <></>
        )}

        <p>{post.description}</p>
      </S.DescriptionWrapper>

      {isOther ? (
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
            <S.PrimaryButton onClick={handleCreateApplication}>신청하기</S.PrimaryButton>
          )}
        </S.ButtonsWrapper>
      ) : (
        <S.ButtonsWrapper>
          <S.EditButton onClick={() => alert('수정 페이지로 이동')}>수정하기</S.EditButton>
        </S.ButtonsWrapper>
      )}

      {isPartnerRequested && (
        <Modal
          isOpen={isPartnerRequested}
          handleClose={() => setIsPartnerRequested(false)}
          handleConfirm={() => alert('요청한 신청 탭으로 이동')}
          text={{
            label: '파트너가 신청되었습니다.\n확정은 신청 목록을 확인해주세요.',
            confirm: '신청목록 확인',
            cancel: '나중에 다시 확인',
          }}
        />
      )}

      {isPartnerCancelRequested && (
        <Modal
          isOpen={isPartnerCancelRequested}
          handleClose={() => setIsPartnerCancelRequested(false)}
          isSuccess={isPartnerCancel}
          setIsSuccess={setIsPartnerCancel}
          handleConfirm={handleCancelApplication}
          text={{
            label: '정말로 파트너 매칭신청을\n취소하시겠어요?',
            confirm: '취소하기',
            cancel: '아니요',
            success: '성공적으로\n취소되었습니다!',
          }}
          buttonColor={'green'}
        />
      )}
    </S.Wrapper>
  );
};

export default Content;
