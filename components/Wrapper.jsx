import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'i18next';
import { apiConfig } from '../../config/server/server.index';
import { createStore } from 'redux';
import { mainTheme } from '../../src/styles/theme.sc';
import { ThemeProvider } from 'styled-components';

const { Provider } = require('react-redux');

const initialState = {
  app: {
    name: 'Pizza Delivery',
  },
  user: {
    session: {
      media: 'desktop',
    },
  },
};
const store = createStore((state = initialState, action) => { return state; });

export default class Wrapper extends Component {

  initI18n(availableLanguages, language, fallbackLanguage) {
    /** configure translation package */
    i18n.init({
      whitelist: availableLanguages,
      fallbackLng: fallbackLanguage,
      lng: language,
      keySeparator: '/',

      initImmediate: false,
      preload: availableLanguages,
      debug: apiConfig.debug,

      resources: (() => {
        const map = {};
        for(const i in availableLanguages) {
          map[availableLanguages[i]] = {
            translation: { x: '' },
          };
        }

        return map;
      })(),

      returnEmptyString: true,
      returnNull: true,
      interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ',',
        format(value, format, lng) {
          if(format === 'uppercase') return value.toUpperCase();
          return value;
        },
      },
    });

    return i18n;
  }

  render() {
    return (
      <I18nextProvider i18n={this.initI18n(['de', 'en'], 'en', 'en')}>
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={mainTheme}>
              <div style={{ backgroundColor: 'rgb(237, 237, 237)' }}>
                {this.props.children}
              </div>
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      </I18nextProvider>
    );
  }
}
