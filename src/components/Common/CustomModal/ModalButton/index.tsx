import * as S from './style';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  color?: 'blue' | 'red' | 'green' | 'gray';
}

const ModalButton = ({ children, onClick, color = 'blue' }: Props) => {
  return (
    <S.Button onClick={onClick} color={color}>
      {children}
    </S.Button>
  );
};

export default ModalButton;
