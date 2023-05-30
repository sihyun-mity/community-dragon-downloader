import React, { ReactElement, useMemo } from 'react';
import { HomeContainer } from './home.styles';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import { useRecoilValue } from 'recoil';
import { downloading } from '../../stores/atoms';

const Home = (): ReactElement => {
  const isDownloading = useRecoilValue(downloading);
  const text = useMemo(() => (isDownloading ? '다운로드 중입니다...' : 'URL 주소를 입력해주세요.'), [isDownloading]);

  return (
    <HomeContainer>
      <Title>{text}</Title>
      <Input />
    </HomeContainer>
  );
};

export default Home;
