import styled from 'styled-components';
import theme from '@styles/theme';

export const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  padding: 16px 24px 16px 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid var(--color-gray3);
  background-color: var(--color-white);

  position: sticky;
  top: 0;
  z-index: 2;

  ${theme.media.laptop} {
    height: 75px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const BackButton = styled(Item)`
  position: absolute;
  left: 24px;

  svg {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;

export const Title = styled(Item)`
  ${theme.font.ko.h3};
`;

export const DeleteButton = styled(Item)<{ onClick: () => void }>`
  position: absolute;
  right: 24px;

  ${theme.font.ko.subTitle1}
  cursor: pointer;
`;
