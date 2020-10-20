import React from 'react';
import {Component} from 'react';
import {View, TextInput, StyleSheet, Alert, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FloatingButton from '../../components/FloatingButton';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
class Signup extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    error: false,
    message: '',
  };
  enter = (text, category) => {
    this.setState({[category]: text});
  };

  storeData = async (navigation) => {
    const {email, password, name, error} = this.state;
    if (email) {
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email.toLowerCase(),
        )
      ) {
        this.setState({
          error: true,
          message: 'Please enter a valid email address',
        });
      } else {
        this.setState({error: false, message: ''});
      }
    } else if (password) {
      if (password.length < 8) {
        this.setState({
          error: true,
          message: 'Please enter minimum 8 characters for password',
        });
      } else {
        this.setState({message: '', error: false});
      }
    } else if (name) {
      if (name === '') {
        this.setState({error: true, message: 'Name cannot be empty'});
      } else {
        this.setState({error: false, message: ''});
      }
    }
    if (!error) {
      try {
        await AsyncStorage.setItem(
          'users',
          JSON.stringify([{email: email, password: password, name: name}]),
        );
      } catch (e) {
        console.log(e);
      }
      navigation.navigate('Login');
    }
  };
  render() {
    const {message, error} = this.state;
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <Text></Text>
        {error ? Alert.alert(message) : <></>}
        <View>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#747474"
            style={styles.textInput}
            onChangeText={(text) => this.enter(text, 'name')}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#747474"
            style={styles.textInput}
            onChangeText={(text) => this.enter(text, 'email')}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#747474"
            style={styles.textInput}
            onChangeText={(text) => this.enter(text, 'password')}
          />
          <View style={styles.signUpButton}>
            <Text style={styles.signupText}>{`Signup`}</Text>
            <FloatingButton
              handlePress={() => this.storeData(navigation)}
              icon={<Icon name="arrow-right" size={40} style={styles.arrow} />}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'lightgrey',
    borderBottomWidth: 2,
    marginHorizontal: 30,
    height: 65,
    fontSize: 20,
    marginBottom: 30,
    color: '#545454',
    fontFamily: 'Open Sans Regular',
  },
  signUpButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signupText: {
    paddingLeft: 30,
    fontSize: 30,
    fontFamily: 'Open Sans Bold',
    color: '#3F434C',
  },
  arrow: {
    color: '#FCAD47',
    fontSize: 36,
  },
});

export default Signup;
