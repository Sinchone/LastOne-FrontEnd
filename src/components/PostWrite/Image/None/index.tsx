import * as S from './style';
import AddImgIcon from '@assets/icon/addImg.svg';

interface Props {
  setImgFiles: React.Dispatch<React.SetStateAction<string[]>>;
}

const NoImage = ({ setImgFiles }: Props) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as any;
    const maxLength = files.length > 3 ? 3 : files.length;
    const images: string[] = [];

    if (files.length > 3) alert('최대 3장까지 첨부할 수 있습니다.');

    for (let i = 0; i < maxLength; i++) {
      images.push(files[i]);
    }

    setImgFiles(images);
  };

  return (
    <S.Wrapper>
      <label htmlFor="image-input">
        <input
          type="file"
          id="image-input"
          name="image"
          multiple
          accept=".gif, .jpg, .png, .jpeg"
          onChange={handleImageChange}
        />
        <AddImgIcon />
      </label>
      <div>
        <S.Image></S.Image>
        <S.Image></S.Image>
        <S.Image></S.Image>
      </div>
    </S.Wrapper>
  );
};

export default NoImage;
