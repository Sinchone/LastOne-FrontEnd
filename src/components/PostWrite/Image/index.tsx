import * as S from './style';
import AddImgIcon from '@assets/icon/addImg.svg';

const Image = () => {
  return (
    <S.Wrapper>
      <S.DescriptionImageWrapper>
        <AddImgIcon />
        <div></div>
        <div>
          <S.DescriptionImage></S.DescriptionImage>
          <S.DescriptionImage></S.DescriptionImage>
          <S.DescriptionImage></S.DescriptionImage>
        </div>
      </S.DescriptionImageWrapper>
    </S.Wrapper>
  );
};

export default Image;
