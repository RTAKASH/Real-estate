import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Property from './components/Property';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<App />} />
        <Route path="/property" element={<Property/>} />
        </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


