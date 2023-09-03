import styled from 'styled-components';

export const DateSepatator = styled.div`
  position: relative;
  text-align: center;
  margin: 30px 0; // 위아래 여백 설정. 필요에 따라 조절

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 35%; // 선의 길이. 필요에 따라 조절
    height: 1px; // 선의 두께
    background-color: #ccc; // 선의 색상
  }

  &::before {
    left: 10px;
  }

  &::after {
    right: 10px;
  }

  span {
    background-color: transparent; // 배경색. 채팅창의 배경색과 동일하게 설정
    padding: 0 10px; // 양옆의 여백
    z-index: 1;
    position: relative;
    color: #888a8f;
  }
`;
