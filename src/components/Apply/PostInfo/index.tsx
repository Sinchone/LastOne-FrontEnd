import * as S from './style';
import MapMarkerIcon from '@assets/icon/mapmarker.svg';
import RightArrowIcon from '@assets/icon/right-arrow.svg';
import { ReceivedApplications, RequestedApplication } from '@typing/application';
import moment from 'moment';
import { useRouter } from 'next/router';

interface Props {
  recruitmentId: number;
  data: ReceivedApplications | RequestedApplication;
  status?: 'WAITING' | 'CANCEL' | 'FAILURE' | 'SUCCESS';
}

const PostInfo = ({ recruitmentId, data, status }: Props) => {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.ApplyPostInfo>
        <div>
          {status && <S.Status status={status}>{status === 'WAITING' ? '대기' : '확정'}</S.Status>}
          <span className="title">{data.title}</span>
        </div>
        <span className="date">{moment(data.startedAt, 'YYYY.MM.DD HH:mm').format('YYYY.MM.DD HH:mm')}</span>
        <span className="location">
          <MapMarkerIcon />
          {data.gym}
        </span>
      </S.ApplyPostInfo>
      <S.MovePost onClick={() => router.push(`/post/${recruitmentId}`)}>
        게시글 더보기
        <RightArrowIcon />
      </S.MovePost>
    </S.Wrapper>
  );
};

export default PostInfo;
