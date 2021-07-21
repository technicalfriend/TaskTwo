const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  searchResultsContainer: {
    width: Dimensions.get('window').width - 20,
    alignItems: 'center',
    flex: 9
  },
  resultLink: {
    display: 'flex',
    backgroundColor: '#ddd',
    borderRadius: 5,
    height: 60,
    width: Dimensions.get('window').width - 10,
    marginVertical: 5,
    padding: 5,
   // alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flexDirection:'row',
    alignItems:'flex-start',
    padding: 5,
  },
  stretch: {
    width: 50,
    height: 50,
    marginRight:10,
    resizeMode: 'stretch',
  },
})