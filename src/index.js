import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { Provider } from 'react-redux';
import store from './redux/store';

i18n.init({
  interpolation: { escapeValue: false }, // React already handles the escaping
  lng: 'hy', // Default language
  resources: {
    hy: {
      translation: require('./locales/hy.json'),
    },
    ru: {
      translation: require('./locales/ru.json'),
    },
    en: {
      translation: require('./locales/en.json'),
    },
    // Add more languages here if needed
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
      <App />
      </Provider>
    </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


