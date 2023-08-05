import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 38px 24px;
`;

export const Input = styled.div`
  width: 100%;
  padding: 8px;
  padding-left: 13px;

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

export const PartnerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Partner = styled.div`
  width: 100%;
  padding: 24px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  border-bottom: 1px solid var(--color-gray3);

  cursor: default;

  svg {
    width: 80px;
    height: 80px;
  }
`;

export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--color-secondary-main);
  overflow: hidden;
`;

export const PartnerInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    font-size: 18px;
    font-weight: 700;
  }

  & > span {
    font-size: 16px;
    color: var(--color-gray7);
  }
`;

export const Gender = styled.div`
  width: fit-content;
  padding: 6px 8px;
  border-radius: 4px;

  background-color: var(--color-primary-main);
  color: var(--color-white);

  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  width: 106px;
  padding: 10px 0;

  border: none;
  border-radius: 6px;

  font-size: 16px;

  cursor: pointer;
  user-select: none;
`;

export const ProfileButton = styled(Button)`
  background-color: transparent;
`;

export const ChattingButton = styled(Button)`
  background-color: var(--color-white);
  border: 1px solid var(--color-primary-main);
  color: var(--color-primary-main);
`;
