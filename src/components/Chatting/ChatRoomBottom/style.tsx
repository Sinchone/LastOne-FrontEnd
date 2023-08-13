import styled from 'styled-components';

export const BottomWrapper = styled.div`
    display: flex;
    min-height: 85px;
    justify-content: center;
    align-items: center; 
`;


export const Input = styled.input`
    background-color: #E5E5E7;
    margin: 30px 10px 30px 30px;
    border-radius: 30px;
    height: 40px;
    border: none;
    width: 100%;
    padding: 10px 0px 10px 20px;

    &::placeholder {
        color: #888; // 원하는 색상을 설정하세요
    }
    &:focus {
        outline: none;
    }
`;

export const SendButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 30px;
`;

