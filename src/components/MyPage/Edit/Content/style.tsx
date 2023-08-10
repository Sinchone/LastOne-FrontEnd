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

export const EditForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  gap: 48px;
`;

export const EditItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  ${theme.font.ko.subTitle2}
  font-size: 15px;
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
  padding: 11px 0;
  ${theme.font.ko.subTitle2}

  &::placeholder {
    ${theme.font.ko.subTitle2}
    font-size: 15px;
    color: var(--color-gray5);
  }
`;

export const NicknameWrapper = styled.div`
  & > span {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const NicknameInputWrapper = styled.div`
  position: relative;
  flex-grow: 1;

  input {
    width: 100%;
  }

  & > span {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    text-align: right;
    color: var(--color-gray7);
  }
`;

export const NicknameCheckButton = styled.div`
  padding: 11px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-primary-main);
  border-radius: 6px;

  color: var(--color-white);
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;

  user-select: none;
  cursor: pointer;
`;

export const NicknameCheckResult = styled.div<{ isUsable?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;

  padding-top: 8px;

  color: var(${(props) => (props.isUsable ? '--color-secondary-main' : '--color-error')});
  font-size: 14px;
  font-weight: 400px;

  svg path {
    fill: var(${(props) => (props.isUsable ? '--color-secondary-main' : '--color-error')});
  }
`;

export const WorkoutPurposeInputWrapper = styled.div`
  position: relative;

  & > span {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    text-align: right;
    color: var(--color-gray7);
  }
`;

export const Gender = styled.div<{ select: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
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
  padding-top: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SmallInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: solid var(--color-gray5);
  background-color: var(--color-gray1);
  padding: 10px 0px;
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
`;

export const GymRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
`;

export const SelectWorkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const SelectWork = styled.div<{ select: boolean }>`
  width: calc((100% - (16px * 6)) / 7);
  aspect-ratio: 1 / 1;
  border-radius: 8px;
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
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

export const CancelButton = styled.button`
  color: #001b36;
  width: 100%;
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
  width: 100%;
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
