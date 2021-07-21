import SearchBar from './src/components/SearchBar/SearchBar';
import SearchResults from './src/components/SearchResults/SearchResults';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/reducer';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SearchBar/>
          <SearchResults/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});