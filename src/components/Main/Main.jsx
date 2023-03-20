import { MainContainer } from './Main.styles';
import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

const Main = () => {
  return (
    <MainContainer>
      {/* <Suspense fallback={<LoaderBallTriangle />}> */}
      <Outlet />
      {/* </Suspense> */}
    </MainContainer>
  );
};

export default Main;
