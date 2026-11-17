import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Statické HTML z buildu zůstává ve zdrojáku pro vyhledávače.
// Motion po startu v prohlížeči nesedí na hydrataci, proto se obsah
// po načtení skriptu vykreslí znovu a neshoda nevyvolá chybu.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
