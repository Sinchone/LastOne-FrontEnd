import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 38px 17px;
`;

export const ProfileImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  gap: 15px;

  span {
    ${theme.font.ko.subTitle1}
  }
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
`;
export const Label = styled.label`
  display: block;
  ${theme.font.ko.subTitle2}
  padding-left: 11px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: solid var(--color-gray5);
  background-color: var(--color-gray1);
  padding: 10px 10px;
  margin-top: 11px;
  margin-bottom: 30px;
  ${theme.font.ko.subTitle2}

  &::placeholder {
    ${theme.font.ko.subTitle2}
    color: var(--color-gray5);
  }
`;

export const Gender = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 352px;
  height: 56px;
  border-radius: 6px;
  padding: 8px;
  background-color: var(--color-gray3);
  color: #001b36;
  ${theme.font.ko.subTitle2}
  cursor: pointer;
`;

export const GenderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const SmallInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: solid var(--color-gray5);
  background-color: var(--color-gray1);
  padding: 10px 10px;
  margin-top: 5px;
  margin-bottom: 30px;
  ${theme.font.ko.subTitle2}

  &::placeholder {
    ${theme.font.ko.subTitle2}
    color: var(--color-gray5);
  }
`;

export const FitnessInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FitnessInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 30px;
`;

export const GymRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  gap: 15px;
`;

export const SearchInput = styled.div`
  width: 730px;
  height: 48px;
  padding: 8px 8px 8px 20px;
  border-radius: 6px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  gap: 13px;

  input {
    background-color: #eeeeee;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;

    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -2%;
    color: var(--color-primary-main);
  }
`;

export const NotGym = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    ${theme.font.ko.subTitle1}
  }
`;
