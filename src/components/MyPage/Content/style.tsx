import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 38px 17px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .name {
    ${theme.font.ko.subTitle1}
  }

  .introduce {
    ${theme.font.ko.body1}
    color: var(--color-gray8);
  }
`;

export const Gender = styled.div`
  width: 39px;
  height: 28px;
  border-radius: 4px;
  padding: 6px 8px 6px 8px;
  background-color: var(--color-primary-main);
  color: var(--color-white);
  ${theme.font.ko.button}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const FitnessContents = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 114px;
  border-radius: 8px;
  padding: 24px 11px 24px 25px;
  background-color: var(--color-white);
  filter: drop-shadow(0px 0px 10px rgba(111, 120, 130, 0.15));
  margin-bottom: 42px;
`;

export const FitnessContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  gap: 10px;

  span {
    ${theme.font.ko.subTitle1}
    font-size: 15px;
  }

  .description {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -1%;
    color: var(--color-gray8);
  }
`;

export const Contour = styled.div`
  width: 0px;
  height: 66px;
  background-color: var(--color-gray3);
  border: 1px solid var(--color-gray3);
`;

export const GymWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  .title {
    ${theme.font.ko.subTitle2}
    font-size: 15px;
    margin-bottom: 15px;
    color: var(--color-black);
  }
`;

export const NotGym = styled.div`
  width: 100%;
  height: 124px;
  display: flex;
  justify-content: center;
  margin-top: 56px;

  span {
    ${theme.font.ko.subTitle1}
  }
`;

export const FitnesPartner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .title {
    ${theme.font.ko.subTitle2}
    color: var(--color-black);
  }

  .more {
    ${theme.font.ko.body1}
    color: var(--color-gray8);
    margin-right: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
    }
  }
`;

export const MyGym = styled.div<{ select: boolean }>`
  width: 254px;
  height: 56px;
  border-radius: 8px;
  padding: 8px 24px 8px 24px;
  background-color: ${(props) => (props.select ? `var(--color-primary-main)` : 'var(--color-gray3)')};
  color: ${(props) => (props.select ? `var(--color-white)` : 'var(--color-primary-main)')}; //vor-white);
  font-weight: 700px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
`;

export const MyGymWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const WorkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ImgWrapper = styled.div`
  width: 58px;
  height: 58px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 2164.5px;
  }
`;
