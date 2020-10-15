import React, {useState} from 'react';
import { StyleSheet, Animated } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const FloatingButton = ({icon,handlePress}) => {

    const [value] = useState(new Animated.Value(0));
    return (
        <TouchableWithoutFeedback style={styles.button} onPress={(e) => handlePress(e)}>
            <Animated.Text style={styles.buttonText}>{icon}</Animated.Text>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius: 50,
        marginEnd:20,
        shadowColor:'#ccc',
        shadowOpacity: 0.7,
        shadowRadius:4,
        zIndex: 100,
        shadowOffset: {
            width: 2,// right and left
            height: 0 // top and bottom
        },
    },
    buttonText: {
        fontSize: 40,
        color: '#19d3da'
    }
});

export default FloatingButton;