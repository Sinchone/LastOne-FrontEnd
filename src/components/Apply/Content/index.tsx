import React, { useState } from 'react';
import * as S from './style';

import Item from '../Item';
import PostInfo from '../PostInfo';

const Content = () => {
  const [currentTab, setCurrentTab] = useState('received');

  const handleCurrentTab = (selectedTab: string) => {
    setCurrentTab(selectedTab);
  };

  return (
    <S.Wrapper>
      <S.MenuTab>
        <S.Tab onClick={() => handleCurrentTab('received')} isSelected={currentTab === 'received'}>
          <span>받은 신청</span>
        </S.Tab>
        <S.Tab onClick={() => handleCurrentTab('requested')} isSelected={currentTab === 'requested'}>
          <span>요청한 신청</span>
        </S.Tab>
      </S.MenuTab>
      <S.ApplyPostList>
        {currentTab === 'received' && (
          <>
            <S.ApplyPost>
              <PostInfo />
              <Item menu={'received'} type={'default'} />
              <Item menu={'received'} type={'default'} />
              <Item menu={'received'} type={'default'} />
            </S.ApplyPost>
            <S.ApplyPost>
              <PostInfo />
              <Item menu={'received'} type={'disabled'} />
              <Item menu={'received'} type={'cancel'} />
              <Item menu={'received'} type={'disabled'} />
            </S.ApplyPost>
          </>
        )}
        {currentTab === 'requested' && (
          <>
            <S.ApplyPost>
              <PostInfo status={'waiting'} />
              <Item menu={'requested'} type={'default'} />
            </S.ApplyPost>
            <S.ApplyPost>
              <PostInfo status={'confirm'} />
              <Item menu={'requested'} type={'cancel'} />
            </S.ApplyPost>
          </>
        )}
      </S.ApplyPostList>
    </S.Wrapper>
  );
};

export default Content;
