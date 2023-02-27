
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {TranslationValueProvider} from './Services/Translation/TranslationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TranslationValueProvider>
    <App />
    </TranslationValueProvider> 
  </React.StrictMode>
);

