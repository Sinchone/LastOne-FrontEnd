import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  background-color: var(--color-white);
  padding: 16px 24px;

  display: flex;
  align-items: center;
  gap: 15px;

  box-shadow: 0px 0px 7px rgba(102, 109, 117, 0.1);
  border-radius: 8px;

  .time {
    ${theme.font.ko.body1}
    color: var(--color-gray8);
    flex: 1;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  svg {
    width: 64px;
    height: 64px;
  }

  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -2.2%;
    color: var(--color-gray9);
    margin-top: 3px;
  }
`;

export const Contour = styled.div`
  width: 0px;
  height: 30px;
  color: var(--color-gray5);
  border: 1px solid var(--color-gray5);
`;

export const Gender = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: var(--color-white);
  background-color: var(--color-primary-main);
  padding: 6px 8px 6px 8px;
  border-radius: 4px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

interface ButtonStyleType {
  [key: string]: any;
  received: { [key: string]: string };
  requested: { [key: string]: string };
  chatting: string;
}

const buttonStyles: ButtonStyleType = {
  received: {
    WAITING: `background-color: var(--color-primary-main);`,
    FAILURE: `
    background-color: var(--color-gray4);
    color: var(--color-gray7);
    cursor: default;
    `,
    SUCCESS: `background-color: var(--color-error);`,
  },
  requested: {
    WAITING: `background-color: var(--color-secondary-main);`,
    SUCCESS: `background-color: var(--color-error);`,
  },
  chatting: `
  background-color: var(--color-white);
  border: 0.3px solid var(--color-primary-main);
  color: var(--color-primary-main);
  `,
};

const buttonText = (type: string, menu: string) => {
  if (menu === 'received') return type === 'SUCCESS' ? '취소하기' : '함께하기';
  if (menu === 'requested') return type === 'SUCCESS' ? '취소요청' : '신청취소';
};

export const Button = styled.div<{ type: string; menu?: string }>`
  padding: 10px 20px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${theme.font.ko.body1}
  color: var(--color-white);

  user-select: none;
  cursor: pointer;

  ${(props) => (props.menu ? buttonStyles[props.menu][props.type] : buttonStyles['chatting'])}

  &::after {
    content: '${(props) => (props.menu ? buttonText(props.type, props.menu) : '채팅하기')}';
  }
`;
