import styled from 'styled-components';
import theme from '@styles/theme';

export const Wrapper = styled.div<{ imgUrl: string }>`
  position: relative;

  width: 100%;
  height: 270px;
  padding: 30px;

  background: url(${(props) => props.imgUrl}) no-repeat center/cover;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(61, 64, 72, 0.1);

  ${theme.media.tablet} {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
`;

export const Label = styled.div`
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  position: relative;
  z-index: 1;

  width: 250px;
  font-family: 'SBAggroB';
  font-size: 34px;
  color: var(--color-primary-main);

  user-select: none;
`;

export const Button = styled.button`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  margin-top: 9px;
  padding: 10px 18px 10px 22px;
  border-radius: 100px;
  border: none;

  background-color: var(--color-primary-main);
  color: var(--color-white);
  font-size: 16px;

  cursor: pointer;
  user-select: none;

  svg {
    height: 16px;

    path {
      fill: var(--color-white);
    }
  }
`;
