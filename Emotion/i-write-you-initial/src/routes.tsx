import { lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  // createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const EmotionStyled = lazy(() => import('pages/EmotionStyled'));
const Composition = lazy(() => import('pages/Composition'));
const Object = lazy(() => import('pages/Object'));
const RootLayout = lazy(() => import('layout/RootLayout'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/emotionstyled" element={<EmotionStyled />} />
      <Route path="/object" element={<Object />} />
      <Route path="/composition" element={<Composition />} />
    </Route>
  )
);

export default router;
