import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  min-height: calc(100vh - 300px);
  padding: 0 6px;
  padding-bottom: 100px;

  display: flex;
  justify-content: center;
`;

export const CardList = styled.div`
  width: calc(100% - 60px);
  min-height: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const EmptyList = styled.div`
  width: 100%;
  height: calc(100vh - 350px);

  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    content: '검색 결과가 없습니다.';
  }
`;
