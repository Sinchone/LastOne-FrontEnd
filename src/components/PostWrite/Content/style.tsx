import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  height: fit-content;
  padding: 40px 24px;
`;

export const Subject = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: var(--color-gray8);
`;

export const TitleInputWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: relative;

  & input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--color-gray5);
    padding-right: 50px;
    padding-bottom: 16px;
    background-color: inherit;
    font-size: 24px;
    font-weight: 500;

    ::placeholder {
      color: var(--color-gray5);
    }
  }

  & span {
    position: absolute;
    right: 0;
    font-weight: 400;
    color: var(--color-gray7);
  }
`;

export const SelectWrapper = styled.div`
  width: 100%;
  height: 48px;
  border: 1px solid var(--color-gray8);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 8px;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const SelectArea = styled.div`
  width: 347px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;

export const GenderArea = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
`;
export const GenderWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 8px;
`;

export const Gender = styled.div<{ selected: string; gender: string }>`
  width: 100%;
  height: 72px;
  border-radius: 8px;
  box-shadow: 0px 0px 7px rgba(102, 109, 117, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: var(${(props) => (props.selected === props.gender ? '--color-white' : '--color-gray8')});
  background-color: var(${(props) => (props.selected === props.gender ? '--color-primary-main' : '--color-white')});
`;

export const ExercisePartArea = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
`;
export const ExercisePartWrapper = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 8px;
`;

export const ExercisePart = styled.div<{ selected: string; part: string }>`
  width: 105px;
  height: 72px;
  border-radius: 8px;
  box-shadow: 0px 0px 7px rgba(102, 109, 117, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: var(${(props) => (props.selected === props.part ? '--color-white' : '--color-gray8')});
  background-color: var(${(props) => (props.selected === props.part ? '--color-primary-main' : '--color-white')});
`;

export const ExercisePlaceSearchArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
`;

export const ExercisePlaceSearchInputWrapper = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: var(--color-gray2);
  position: relative;
  padding: 8px;
  display: flex;
  align-items: center;

  > :first-child {
    position: absolute;
  }

  & input {
    width: 100%;
    height: 100%;
    padding-left: 24px;
    border: none;
    outline: none;
    background-color: inherit;
    font-size: 20px;

    ::placeholder {
      font-weight: 400;
    }
  }
`;

export const DescriptionArea = styled.div``;

export const DescriptionImageWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  & svg {
    z-index: 2;
    position: absolute;
  }

  > div:first-of-type {
    width: 100%;
    height: 180px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
  }
  > div:nth-of-type(2) {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 16px;
  }
`;

export const DescriptionImage = styled.div`
  width: 230px;
  height: 180px;
  background-color: var(--color-gray2);
  border-radius: 8px;
`;

export const ImageAreaWrapper = styled.div`
  input {
    display: none;
  }
`;

export const DescriptionTextAreaWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 36px;
  position: relative;

  & span {
    position: absolute;
    right: 0;
    font-weight: 400;
    color: var(--color-gray7);
  }

  & textarea {
    width: 100%;
    margin-top: 15px;
    border: none;
    outline: none;
    resize: none;
    background-color: inherit;
    font-size: 16px;
    overflow: hidden;
    ::placeholder {
      font-weight: 400;
    }
  }
`;

export const UploadBtn = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 6px;
  background-color: var(--color-primary-main);
  color: var(--color-white);
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
