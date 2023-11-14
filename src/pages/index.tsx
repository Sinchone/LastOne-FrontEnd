import React from 'react';
import { MainLayout } from '@components/Common';
import { Banner, Contents } from '@components/Main';

const Main = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <MainLayout>
        <Banner />
        <Contents />
      </MainLayout>
    )
  );
};

export default Main;

import { useState, useEffect } from 'react';
