import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.article<{ size: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.size === 'main' ? '32%' : '46%')};
  height: 269px;
  gap: 15px;
  margin-bottom: 15px;

  ${theme.media.mobile2} {
    width: 48%;
  }

  padding: 5px;
  border-radius: 8px;
  transition: ease all 0.3s;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

export const ImgBox = styled.div<{ imgUrl: string }>`
  position: relative;
  width: 100%;
  height: 208px;
  border-radius: 8px;
  background: no-repeat center/contain url(${(props) => process.env.NEXT_PUBLIC_IMAGE_URL + props.imgUrl});
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  padding: 0 5px;

  .title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${theme.font.ko.subTitle1}
    font-size: 16px;

    ${theme.media.mobile2} {
      font-size: 17px;
    }
  }
  > span {
    ${theme.font.ko.body1}
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 6px;
    ${theme.media.mobile2} {
      font-size: 13px;
    }
  }
  .gym {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 7px;
  > div {
    width: 43px;
    height: 23px;
    border-radius: 4px;
    padding: 6px 8px 6px 8px;
    color: var(--color-white);
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Recruit = styled.div`
  background-color: var(--color-secondary-main);
`;

export const Gender = styled.div`
  background-color: var(--color-primary-main);
`;
