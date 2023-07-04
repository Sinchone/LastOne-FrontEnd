import * as S from './style';
import Item from '../Item';
import PostInfo from '../PostInfo';
import { RequestedApplication, ReceivedApplications } from '@typing/application';
import { useRecoilState } from 'recoil';
import { currentMenuState } from '@recoil/application';

interface Props {
  requestedApplications: RequestedApplication[];
  receivedApplications: ReceivedApplications[];
}

const Content = ({ requestedApplications, receivedApplications }: Props) => {
  const [currentMenu, setCurrentMenu] = useRecoilState(currentMenuState);

  const applications = {
    requested: requestedApplications.length ? (
      requestedApplications.map((application, idx) => (
        <S.ApplyPost key={idx}>
          <PostInfo data={application} status={application.status} recruitmentId={application.recruitmentId} />
          <Item data={application} recruitmentId={application.recruitmentId} />
        </S.ApplyPost>
      ))
    ) : (
      <>요청한 신청이 없습니다.</>
    ),
    received: receivedApplications.length ? (
      receivedApplications.map((recruitment, idx) => (
        <S.ApplyPost key={idx}>
          <PostInfo data={recruitment} recruitmentId={recruitment.id} />
          {recruitment.applications.map((application, idx) => (
            <Item key={idx} data={application} recruitmentId={recruitment.id} />
          ))}
        </S.ApplyPost>
      ))
    ) : (
      <>받은 신청이 없습니다.</>
    ),
  };

  return (
    <S.Wrapper>
      <S.MenuTab>
        <S.Tab onClick={() => setCurrentMenu('received')} isSelected={currentMenu === 'received'}>
          <span>받은 신청</span>
        </S.Tab>
        <S.Tab onClick={() => setCurrentMenu('requested')} isSelected={currentMenu === 'requested'}>
          <span>요청한 신청</span>
        </S.Tab>
      </S.MenuTab>

      <S.ApplyPostList>{applications[currentMenu]}</S.ApplyPostList>
    </S.Wrapper>
  );
};

export default Content;
