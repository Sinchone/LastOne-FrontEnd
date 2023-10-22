import { useRouter } from 'next/router';
import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';

interface Props {
  text: string;
  gender?: string;
  handleClickLeft?: () => void;
  right?: JSX.Element;
}

const Header = ({ text, gender, handleClickLeft, right }: Props) => {
  const router = useRouter();

  const handleClickLeftButton = () => {
    if (handleClickLeft) handleClickLeft();
    else router.back();
  };

  return (
    <S.Header>
      <S.Left>
        <LeftArrowIcon onClick={handleClickLeftButton} />
      </S.Left>
      <S.Center>
        {text}
        {gender && <span>{gender}</span>}
      </S.Center>
      <S.Right>{right}</S.Right>
    </S.Header>
  );
};

export default Header;
