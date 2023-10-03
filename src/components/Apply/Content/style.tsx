import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  min-height: calc(100vh - 75px);
  padding-bottom: 120px;
  user-select: none;
`;

export const MenuTab = styled.ul`
  position: sticky;
  top: 60px;

  width: 100%;
  padding: 20px;
  padding-bottom: 0;
  background: var(--color-gray1);

  display: flex;
  align-items: center;
  gap: 15px;

  ${theme.media.laptop} {
    top: 75px;
  }
`;

export const Tab = styled.li<{ isSelected: boolean }>`
  padding: 12px;
  cursor: pointer;

  ${(props) =>
    props.isSelected &&
    `
    border-bottom: 2px solid var(--color-primary-main);
  `}

  span {
    ${theme.font.ko.subTitle2}
    color: var(${(props) => (props.isSelected ? '--color-primary-main' : '--color-gray5')});
  }
`;

export const ApplyPostList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;

  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export const ApplyPost = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 21px;
`;

export const EmptyList = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
