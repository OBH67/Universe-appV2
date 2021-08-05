import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next';
import global_es from './traslations/es/global.json'
import global_eu from './traslations/eu/global.json'

i18next.init({
  interpolation: {escapeValue: false},
  lng: "eu",
  resources: {
    es: {
      global: global_es
    },
    eu: {
      global: global_eu
    },
  },
})
 
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
