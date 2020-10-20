import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HorizontalButton = ({text, width, height, navigateLink, navigation}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(navigateLink)} style={{...styles.horizonatalButton, width:width, height: height}}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    horizonatalButton: {
        backgroundColor: '#FCAD47',
        borderRadius: 5,
        justifyContent:"center",
        alignItems:'center',
    },
    text: {
        color: 'white',
    }
});

export default HorizontalButton;