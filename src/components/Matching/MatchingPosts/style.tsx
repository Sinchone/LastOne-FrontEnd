import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  min-height: calc(100vh - 300px);
  padding: 30px 6px;
  padding-bottom: 100px;
`;

export const CardList = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-wrap: wrap;
  padding-left: 25px;
  gap: 20px;
`;

export const EmptyList = styled.div`
  width: 100%;
  height: calc(100vh - 450px);

  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    content: '검색 결과가 없습니다.';
  }
`;
