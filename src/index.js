import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Analizy from './components/Analizy/Analizy';
import Home from './components/Home/Home';
import NoPage from './pages/NoPage'
import Kontakt from './components/Kontakt/Kontakt'
import Omnie from './components/Omnie/Omnie';
import FAQ from './components/FAQ/FAQ';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />}>
          <Route index element={<Home />} />
          <Route path='oferta' element={<Analizy />} />
          <Route path='kontakt' element={<Kontakt />} />
          <Route path='omnie' element={<Omnie />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

