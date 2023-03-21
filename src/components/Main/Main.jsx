import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Main.styles';
import { Loader } from 'components/Loader/Loader';

const Main = () => {
  return (
    <MainContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Main;
