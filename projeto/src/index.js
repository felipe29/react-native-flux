import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt';
import './config/ReactronConfig';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Routes from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <Routes />
    </Provider>
  );
};

export default App;
