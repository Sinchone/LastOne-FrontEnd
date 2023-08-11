import theme from '@styles/theme';
import styled from 'styled-components';



export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px - 80px);
`;

export const ChattingMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 15px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const NameAndMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .name {
    ${theme.font.ko.subTitle2}
  }

  .message {
    ${theme.font.ko.body1}
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  padding-right: 20px;
  align-items: flex-end;
`;

export const TimeAndNotRead = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  gap: 10px;


  span {
    ${theme.font.ko.body2}
  }
`;
export const NotRead = styled.div`
  width: 24px;
  height: 24px;
  background-color: var(--color-error);
  color: var(--color-white);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3px;
`;

export const ChatItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid var(--color-gray3);
  cursor: pointer;  


  &:hover {
    background-color: #f0f0f0; 
  }
`;

export const ProfileButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: transparent;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const MenuIconWrapper = styled.div`
  margin-bottom: 20px;
  padding:10px;
  cursor: pointer;
`;

export const NoChattingRoom = styled.div`
  margin: auto;
  font-size: 20px;
  font-weight: bold;
`;



