import { ReactNode } from 'react';
import reactDom from 'react-dom';

interface Props {
  children: ReactNode;
}

const BottomSheetPortal = ({ children }: Props) => {
  const el = document.getElementById('bottomsheet');
  if (el === null) return <></>;
  return reactDom.createPortal(children, el);
};

export default BottomSheetPortal;
