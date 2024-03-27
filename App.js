
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'; 

import store from './src/redux/store';

import { Provider } from 'react-redux';

import Header from './src/components/Header';
import List from './src/components/List';

export default function App() {

  const RootApp = () => {
    return (
      <SafeAreaView>
        <Header />
        <List />
      </SafeAreaView>
    );
  };

  return (
    <Provider store={store}>
      {RootApp()}
    </Provider>
  );
}


