import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Loading = lazy(() => import('./components/Loading'));
const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./pages/Home'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Technology = lazy(() => import('./pages/Technology'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/technologie' element={<Technology />} />
          <Route path='/kontakt' element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
