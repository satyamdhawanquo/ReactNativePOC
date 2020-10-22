import React from 'react';
import {Component} from 'react';
import {Dimensions, TextInput, StyleSheet} from 'react-native';

class SearchInput extends Component {
  render() {
    const {handleText} = this.props;
    return <TextInput style={styles.input} onChangeText={(text) => handleText(text)} />;
  }
}

const styles = StyleSheet.create({
    input: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: Dimensions.get('screen').width * 0.9,
        height:50,
        backgroundColor: 'white',
        paddingLeft: 10,
        lineHeight: 30,
        fontFamily: "SF Pro Text Regular",
        fontSize: 24
    }
});

export default SearchInput;
