import React, {Component} from 'react';
import {Linking, ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';

import {connect} from 'react-redux';

const styles = require('./SearchResultsStyles');

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.searchResultsContainer}>
        <ScrollView>
            {this.props.results.map((result, key) => (
            <TouchableOpacity 
                onPress={() => { Linking.openURL(result.previewUrl) }}
                style={styles.resultLink}
            >
                <View style={styles.container}>
                    <Image
                        style={styles.stretch}
                        source={{ uri: result.artworkUrl60 }}
                    />
                    <View>
                        <Text key={key}>Artist Name : {result.artistName}</Text>
                        <Text key={key}>Collection Name{result.collectionName}</Text>
                    </View>
                </View>                
            </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.results
  };
}

export default connect(mapStateToProps, null)(SearchResults);
