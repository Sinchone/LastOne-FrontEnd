import styled from 'styled-components';

export const MessageWrapper = styled.div`
    display: flex;
    justify-content: flex-end; 
    margin-top: 15px;
    margin-bottom: 15px;

`

export const Message = styled.div`
    border-radius: 10px 0px 10px 10px;
    background-color: white;
    padding: 20px;
    margin-right: 20px;
    max-width: 300px;  // 최대 너비 설정
    box-shadow: -1px 5px 10px rgba(0, 0, 0, 0.5);
`


export const SendTime = styled.div`
    align-self: flex-end;  // 밑으로 위치하게 함
    margin-right: 10px;
    color: #888A8F;
`