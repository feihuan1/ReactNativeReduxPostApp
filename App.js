
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'; 

import store from './src/redux/store';

import { Provider } from 'react-redux';

import Form from './src/components/Form';
import List from './src/components/List';

export default function App() {

 

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Form />
        <List />
      </SafeAreaView>
    </Provider>
  );
}


