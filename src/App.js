import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
const Loading = lazy(() => import('./components/Loading'));
const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./pages/Home'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Technology = lazy(() => import('./pages/Technology'));
const Order = lazy(() => import('./pages/Order'));
const Thanks = lazy(() => import('./pages/Thanks'));
ReactGA.initialize('UA-90672889-1');
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/technologie' element={<Technology />} />

          <Route path='/125' element={<Order />} />
          <Route path='/thank-you' element={<Thanks />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
