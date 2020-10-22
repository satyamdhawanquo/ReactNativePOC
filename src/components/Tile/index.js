import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tile = ({navigation,item}) => {
    return (
        <TouchableOpacity onPress={()=> navigation.navigate('Details', { id: item.item.id})}>
        <View style={styles.tile}>
            <Text>{item.item.original_title}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tile: {
        borderRadius: 10,
        shadowOffset: {
            width: 3,
            height: 0
        },
        shadowColor: '#ccc',
        shadowOpacity: 0.7,
        width: Dimensions.get('screen').width * 0.9,
        height: 100,
        backgroundColor:'#D2C3C3',
        marginBottom: 5,
        padding: 20 
    }
});

export default Tile;