import { useState } from 'react';
import * as S from './style';
import AddImgIcon from '@assets/icon/addImg.svg';
import Image from 'next/image';

interface Props {
  onChange: (image: File) => void;
  onDelete: () => void;
  imgUrl: string;
  index: number;
}

const SelectImage = ({ onChange, onDelete, index, imgUrl }: Props) => {
  const uploadedImageURL = imgUrl;
  const [showImage, setShowImage] = useState<any>(uploadedImageURL);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as any;
    setShowImage(URL.createObjectURL(file));
    onChange(file);
  };

  const SelectedImage = () => {
    const handleDeleteImage = (e: any) => {
      e.preventDefault();
      setShowImage('');
      onDelete();
    };

    return (
      <S.CardWrapper>
        <Image src={showImage} alt={showImage} fill style={{ objectFit: 'contain' }} />
        <S.CloseIcon onClick={(e) => handleDeleteImage(e)} />
      </S.CardWrapper>
    );
  };

  return (
    <>
      <S.Wrapper>
        {showImage ? (
          <SelectedImage />
        ) : (
          <>
            <label htmlFor={`image-input-${index}`}>
              <S.Wrapper>
                <AddImgIcon />
              </S.Wrapper>
              <input
                type="file"
                id={`image-input-${index}`}
                name="image"
                accept=".gif, .jpg, .png, .jpeg"
                onChange={handleImageChange}
              />
            </label>
          </>
        )}
      </S.Wrapper>
    </>
  );
};

export default SelectImage;
