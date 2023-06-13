import * as S from './style';
import MapMarkerIcon from '@assets/icon/mapmarker.svg';
import RightArrowIcon from '@assets/icon/right-arrow.svg';

interface Props {
  status?: string;
}

const PostInfo = ({ status }: Props) => {
  return (
    <S.Wrapper>
      <S.ApplyPostInfo>
        <div>
          {status && <S.Status status={status}>{status === 'waiting' ? '대기' : '확정'}</S.Status>}
          <span className="title">게시물 제목</span>
        </div>
        <span className="date">2023.05.15.23:00</span>
        <span className="location">
          <MapMarkerIcon />
          고산 헬스장
        </span>
      </S.ApplyPostInfo>
      <S.MovePost>
        게시글 더보기
        <RightArrowIcon />
      </S.MovePost>
    </S.Wrapper>
  );
};

export default PostInfo;
