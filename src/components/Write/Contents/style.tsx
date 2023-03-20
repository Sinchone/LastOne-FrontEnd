import styled from 'styled-components';

export const WriteContainer = styled.div`
  background-color: palegoldenrod;
  padding: 40px 24px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 40px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 64px;

  border: 0px;
  border-bottom: 1px solid #dddddd;

  font-size: 32px;
  font-weight: 700;
  color: #b0b0b0;
`;

export const TimeContainer = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;

  gap: 24px;
  margin-bottom: 40px;

  border: 1px solid #000000;
  border-radius: 8px;
`;

export const DateWrapper = styled.div`
  width: 50%;
  display: flex;
  gap: 16px;
`;

export const TimeWrapper = styled.div`
  width: 50%;
  display: flex;
  gap: 16px;
`;
