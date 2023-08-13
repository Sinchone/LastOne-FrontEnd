import styled from 'styled-components';

export const MessageWrapper = styled.div`
    display: flex;
    justify-content: flex-start; 
    margin-top: 30px;
`

export const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
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

export const ProfileButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin-right: 20px;
  margin-left: 20px;
`;

export const Message = styled.div`
    border-radius: 0px 10px 10px 10px;
    background-color: #2A3642;
    color: white;
    padding: 20px;
    max-width: 300px;  // 최대 너비 설정
`


export const SendTime = styled.div`
    align-self: flex-end;  // 밑으로 위치하게 함
    margin-left: 10px;
    color: #888A8F;
`