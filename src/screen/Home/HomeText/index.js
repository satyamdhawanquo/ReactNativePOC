import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const HomeText = ({text}) => <Text style={styles.text}>{text}</Text>;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Open Sans SemiBold',
        fontSize: 20,
        fontStyle: "normal",
        textTransform: "capitalize"
    }
});
export default HomeText;
