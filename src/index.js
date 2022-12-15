import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {TranslationValueProvider} from './Services/Translation/TranslationContext';
import i18n from './Services/Translation/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TranslationValueProvider>
    <App />
    </TranslationValueProvider> 
  </React.StrictMode>
);

