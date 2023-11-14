import * as S from './style';
import SelectImage from './Select';
import { useState } from 'react';
import { ImageType } from '../Content';

interface Props {
  img: ImageType;
  setImg: React.Dispatch<React.SetStateAction<ImageType>>;
}

const Image = ({ img, setImg }: Props) => {
  const [images, setImages] = useState(img);

  const handleChange = (index: number, image: File) => {
    const newImages = {
      files: [...images.files],
      urls: [...images.urls],
    };
    newImages.files[index] = image;
    newImages.urls[index] = URL.createObjectURL(image);
    setImages(newImages);
    setImg(newImages);
  };

  const handleDeleteImage = (index: number) => {
    const newImages = {
      files: [...images.files],
      urls: [...images.urls],
    };
    newImages.files[index] = '';
    newImages.urls[index] = '';
    setImages(newImages);
    setImg(newImages);
  };

  return (
    <S.TestWrapper>
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <SelectImage
            key={index}
            onChange={(image) => handleChange(index, image)}
            onDelete={() => handleDeleteImage(index)}
            imgUrl={images.urls[index]}
            index={index}
          />
        );
      })}
    </S.TestWrapper>
  );
};

export default Image;
