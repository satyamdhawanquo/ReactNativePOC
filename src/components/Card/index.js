import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children}) => {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    );
}


const styles = StyleSheet.create({
    cardContainer: {
        width: 250,
        height: 290,
        shadowColor: '#ccc',
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 2,
            height: 0
        },
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: '#3333',
        margin: 10,
        alignItems: "center"
    }
});

export default Card;