import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: fit-content;
  padding: 30px 15px 50px 15px;
`;

export const WriterWrapper = styled.div``;

export const Writer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 32px;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const ImageBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  background-color: var(--color-secondary-main);
  margin-right: 24px;
`;

export const WriterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  & :first-of-type span {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Gender = styled.div`
  width: 41px;
  height: 28px;
  border-radius: 4px;
  padding: 6px 8px 6px 8px;
  background-color: var(--color-primary-main);
  color: var(--color-white);
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const ProfileButton = styled.div`
  width: 106px;
  height: 48px;
  border-radius: 6px;
  padding: 12px 16px;
  background-color: var(--color-primary-main);
  color: var(--color-white);
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HealthInfoWrapper = styled.div`
  width: 100%;
  height: 114px;
  background: #fefefe;

  box-shadow: 0px 0px 7px rgba(102, 109, 117, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 24px 0px;
  margin-bottom: 32px;

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    & :first-of-type {
      font-size: 20px;
      font-weight: 700;
    }

    & :last-of-type {
      color: var(--color-gray8);
    }
  }

  > :not(:last-of-type) {
    border-right: 1px solid var(--color-gray3);
  }
`;

export const HealthCondition = styled.div`
  width: 100%;
  display: flex;

  & div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    & :first-of-type {
      font-size: 18px;
      font-weight: 700;
    }

    & :last-of-type {
      font-size: 16px;
      font-weight: 400;
    }
  }

  & :last-child {
    & :last-child {
      width: fit-content;
      background-color: var(--color-primary-main);
      color: var(--color-white);
      padding: 6px 8px;
      border-radius: 4px;
      margin-top: -8px;
    }
  }
`;

export const PlaceWrapper = styled.div`
  margin-top: 32px;
  > span {
    font-size: 18px;
    font-weight: 700;
  }
  > div:first-of-type {
    margin: 8px 0;
    display: flex;
    align-items: center;
    gap: 4px;
    padding-left: 4px;
    & span {
      font-weight: 400;
    }
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 324px;
  border-radius: 8px;
  background-color: red;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 32px;
  font-weight: 400;
  color: var(--color-gray9);
  & span {
    color: var(--color-black);
    font-size: 18px;
    font-weight: 700;
  }

  & div {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 24px;
    > div {
      margin: 16px 0;
      width: 180px;
      height: 180px;
      position: relative;
      border-radius: 16px;
      background-color: var(--color-secondary-main);
    }
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  margin-top: 40px;
`;

const Button = styled.div`
  width: 50%;
  height: 56px;
  border: 1px solid var(--color-primary-main);
  border-radius: 6px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ChatButton = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-primary-main);
`;

export const PrimaryButton = styled(Button)`
  background-color: var(--color-primary-main);
  color: var(--color-white);
  border: none;
`;

export const CancelButton = styled(Button)`
  background-color: var(--color-secondary-main);
  color: var(--color-white);
  border: none;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 86px;
  margin: 86px 24px 24px 24px;
`;

export const ModalSpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  color: var(--color-gray9);
`;

export const ModalBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: 700;
  & div {
    width: 426px;
    height: 54px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:last-of-type {
      background-color: var(--color-gray2);
      color: var(--color-gray7);
    }
  }
`;

export const CancelModalWrapper = styled(ModalWrapper)`
  width: 474px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  > div div:first-of-type {
    margin-top: 20px;
  }
`;
