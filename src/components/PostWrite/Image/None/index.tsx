import * as S from './style';
import AddImgIcon from '@assets/icon/addImg.svg';

const NoImage = () => {
  return (
    <S.Wrapper>
      <label htmlFor="image-input">
        <input
          type="file"
          id="image-input"
          name="image"
          multiple
          accept=".gif, .jpg, .png, .jpeg"
          // onChange={handleImageChange}
        />
      </label>
      <AddImgIcon />
      <div></div>
      <div>
        <S.Image></S.Image>
        <S.Image></S.Image>
        <S.Image></S.Image>
      </div>
    </S.Wrapper>
  );
};

export default NoImage;
