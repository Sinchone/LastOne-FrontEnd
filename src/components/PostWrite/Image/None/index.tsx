import { ImageType } from '@components/PostWrite/Content';
import * as S from './style';
import AddImgIcon from '@assets/icon/addImg.svg';

interface Props {
  setImg: React.Dispatch<React.SetStateAction<ImageType>>;
}

const NoImage = ({ setImg }: Props) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFiles = e.target.files as any;
    const maxLength = uploadFiles.length > 3 ? 3 : uploadFiles.length;
    const files: File[] = [];
    const urls: string[] = [];

    if (uploadFiles.length > 3) alert('최대 3장까지 첨부할 수 있습니다.');

    for (let i = 0; i < maxLength; i++) {
      files.push(uploadFiles[i]);
      urls.push(URL.createObjectURL(uploadFiles[i]));
    }

    setImg({ files, urls });
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
