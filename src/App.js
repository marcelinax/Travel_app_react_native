import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import HomeScreen from './screens/Home.screen';

const App = () => {
  return (
    <NativeRouter>
      <Route component={HomeScreen} exact path={'/'} />
    </NativeRouter>
  );
};

export default App;
