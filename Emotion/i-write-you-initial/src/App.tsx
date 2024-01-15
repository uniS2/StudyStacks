/** @jsxImportSource @emotion/react */
import router from '@/routes';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <RecoilRoot>
      <HelmetProvider>
        <GlobalStyle />
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </HelmetProvider>
    </RecoilRoot>
  );
}

export default App;
