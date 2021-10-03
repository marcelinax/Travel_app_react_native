import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import HomeScreen from './screens/Home.screen';
import PreviewOfferScreen from './screens/PreviewOffer.screen';
import {Provider} from 'react-redux';
import store from './store';
import ShoppingBagScreen from './screens/ShoppingBag.screen';

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Route component={HomeScreen} exact path={'/'} />
        <Route component={PreviewOfferScreen} path={'/offer'} />
        <Route component={ShoppingBagScreen} path={'/shopping-bag'} />
      </NativeRouter>
    </Provider>
  );
};

export default App;
