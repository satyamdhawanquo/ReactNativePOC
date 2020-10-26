import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import {View, Text, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Account = ({navigation}) => {
    const [user, setUser] = useState({});

    const loggout = async () => {
        await AsyncStorage.removeItem('loggedInUser');
        console.log(navigation);
        navigation.navigate('Login');
    }

    useEffect(()=>{
        
    }, [user])
    return (
        <SafeAreaView>
            <Text>Welcome</Text>

            <Button title="Logout" onPress={loggout} />
        </SafeAreaView>
    );
}

export default Account;