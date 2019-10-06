import React from 'react';
import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import home from './pages/home';
import cart from './pages/cart';
import Header from './components/header/index';

const Routes = createAppContainer(
  createStackNavigator(
    {home, cart},
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      headerTintColor: '#fff',
    },
  ),
);

export default Routes;
