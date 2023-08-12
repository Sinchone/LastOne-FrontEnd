import * as S from './style';
import SelectImage from './Select';
import { useEffect, useState } from 'react';

interface Props {
  imgFiles: string[];
  setImgFiles: React.Dispatch<React.SetStateAction<string[]>>;
}

const Image = ({ imgFiles, setImgFiles }: Props) => {
  const [images, setImages] = useState(imgFiles);

  const handleChange = (index: number, image: string) => {
    const newImages = [...images];
    newImages[index] = image;
    setImages(newImages);
    setImgFiles(newImages);
  };

  const handleDeleteImage = (index: number) => {
    const newImages = [...images];
    newImages[index] = '';
    setImages(newImages);
    setImgFiles(newImages);
  };

  useEffect(() => {
    console.log('images', images);
  }, [images]);

  return (
    <S.TestWrapper>
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <SelectImage
            key={index}
            onChange={(image) => handleChange(index, image)}
            onDelete={() => handleDeleteImage(index)}
            image={images[index]}
            index={index}
          />
        );
      })}
    </S.TestWrapper>
  );
};

export default Image;
