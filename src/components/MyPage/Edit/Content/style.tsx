import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 38px 17px;
`;

export const ProfileImgWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  gap: 15px;
  cursor: pointer;

  span {
    ${theme.font.ko.subTitle1}
  }

  input {
    display: none;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;

    span {
      cursor: pointer;
    }
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
  font-size: 15px;
  padding-left: 11px;
  color: var(--color-black);

  span {
    ${theme.font.ko.subTitle2}
    font-size: 15px;
    color: var(--color-error);
    padding-left: 2px;
  }
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
    font-size: 15px;
    color: var(--color-gray5);
  }
`;

export const Gender = styled.div<{ select: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 282px;
  height: 56px;
  border-radius: 6px;
  padding: 8px;
  background-color: ${(props) => (props.select ? `var(--color-primary-main)` : `var(--color-gray3)`)};
  color: ${(props) => (props.select ? `var(--color-white)` : `#001b36`)};
  ${theme.font.ko.subTitle2}
  font-size: 15px;
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
  font-size: 15px;

  &::placeholder {
    ${theme.font.ko.subTitle2}
    font-size: 15px;
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
  width: 100%;
  height: 38px;
  padding: 1px 8px 1px 20px;
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
    font-size: 14px;
    line-height: 30px;
    letter-spacing: -2%;
    color: var(--color-gray8);
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

export const WorkDay = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  margin-top: 15px;
`;

export const SelectWorkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-left: 11px;
`;

export const SelectWork = styled.div<{ select: boolean }>`
  width: 56px;
  height: 50px;
  background-color: ${(props) => (props.select ? `var(--color-primary-main)` : `var(--color-gray3)`)};
  color: ${(props) => (props.select ? `var(--color-white)` : `#001b36`)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400px;
  font-size: 15px;
  cursor: pointer;
`;

export const WorkTime = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  margin-top: 28px;
  padding-left: 11px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TimeInput = styled.input`
  width: 40%;
  border: none;
  outline: none;
  border-bottom: solid var(--color-gray5);
  background-color: var(--color-gray1);
  padding: 10px 10px;
  margin-top: 5px;
  margin-bottom: 30px;
  ${theme.font.ko.subTitle2}
  font-size: 15px;
  text-align: center;

  &::placeholder {
    ${theme.font.ko.subTitle2}
    font-size: 15px;
    color: var(--color-gray5);
    text-align: center;
  }
`;

export const Divide = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
  ${theme.font.ko.subTitle2}
  font-size: 21px;
  color: var(--color-gray5);

  margin-bottom: 27px;
`;

export const ImgWrapper = styled.div`
  width: 104px;
  height: 104px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 2164.5px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 45px;
  padding-left: 11px;
  margin-top: 20px;
`;

export const CancelButton = styled.button`
  color: #001b36;
  width: 252px;
  height: 46px;
  padding: 8px;
  border-radius: 6px;
  border: none;

  ${theme.font.ko.subTitle2}

  cursor: pointer;
`;

export const Button = styled.button`
  color: var(--color-white);
  border-radius: 6px;
  width: 252px;
  height: 46px;
  padding: 8px;
  background-color: var(--color-primary-main);
  ${theme.font.ko.subTitle2}
  cursor: pointer;
`;

export const MyGym = styled.div<{ select: boolean }>`
  position: relative;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  padding: 8px 24px 8px 24px;
  background-color: ${(props) => (props.select ? `var(--color-primary-main)` : 'var(--color-gray3)')};
  color: ${(props) => (props.select ? `var(--color-white)` : 'var(--color-primary-main)')}; //vor-white);
  font-weight: 700px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const MyGymWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 12px;
`;

export const MyGymPlus = styled.div`
  width: 100%;
  height: 56px;
  padding: 8px 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background-color: var(--color-gray3);

  user-select: none;
  cursor: pointer;
`;
