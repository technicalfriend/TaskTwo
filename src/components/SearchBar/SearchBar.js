import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
//import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux'

const styles = require('./SearchBarStyles');

export default class SearchBar extends Component {
  render() {
    return(

      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder = 'Enter your search terms'
          style = {styles.textInputSearch}
          underlineColorAndroid={'transparent'}
        />
        <TouchableOpacity
          style = {styles.textSearchButton}
          onPress={() => dispatch({ type: "SEARCH" })}
       >
          {/* <FontAwesome name="search" size={16} color="#000" /> */}
          <Text>search</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
    return {
      Data: state,
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      search: () => dispatch({ type: 'SEARCH' }),     
    }
  }


  connect(mapStateToProps, mapDispatchToProps)(SearchBar);