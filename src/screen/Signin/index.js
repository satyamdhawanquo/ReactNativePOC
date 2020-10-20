import React, {useState} from 'react';
import {
  useWindowDimensions,
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FloatingButton from '../../components/FloatingButton';
import {welcome, back, signIn, signUp} from '../../constants';

// thrid-party
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const SigninHeader = () => {
  return (
    <View style={styles.headerImage}>
      <SafeAreaView>
        <Text style={styles.headerText}>{welcome}</Text>
        <Text style={styles.backText}>{back}</Text>
      </SafeAreaView>
    </View>
  );
};

const SigninContent = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const enterPassword = (text) => {
    setPassword(text);
  };
  const enterEmail = (text) => {
    setEmail(text);
  };

  const submit = async () => {
    const users = await AsyncStorage.getItem('users');
    const allUsers = JSON.parse(users);
    if (email !== '' && password!=='') {
      const user = allUsers.filter((item) => {
        return item.email == email && item.password == password;
      });
      // redirect the user to home screen
      if (user && user.length === 1) {
        navigation.navigate('Home');
      }
      // error
      else {
        Alert.alert('Incorrect email and password.');
      }
    }
    else {
      Alert.alert('Email and password cannot be empty');
    }
  };

  return (
    <View style={styles.contentContainer}>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#747474"
        style={styles.textInput}
        onChangeText={enterEmail}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="#747474"
        accessibilityElementsHidden={true}
        style={styles.textInput}
        onChangeText={enterPassword}
      />
      <View style={styles.signInButton}>
        <Text style={styles.signinText}>{signIn}</Text>
        <FloatingButton
          handlePress={submit}
          icon={<Icon name="arrow-right" size={40} style={styles.arrow} />}
        />
      </View>
    </View>
  );
};

const SignupText = ({navigation}) => {
  const navigate = () => {
    navigation.navigate("Signup");
  }

return (
  <View style={styles.signupTextContainer}>
  <TouchableWithoutFeedback onPress={navigate}>
    <Text style={styles.signupText}>Sign Up</Text>
  </TouchableWithoutFeedback>
  </View>
)
}

const Signin = ({navigation}) => {
  return (
    <View style={styles.signUpContainer}>
      <SigninHeader />
      <SigninContent navigation={navigation} />
      <SignupText navigation={navigation}></SignupText>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200,
  },
  headerImage: {
    height: Dimensions.get('screen').height * 0.3,
    width: '100%',
    borderBottomEndRadius: 50,
    backgroundColor: '#FCAD47',
    position: 'absolute',
    top: 0,
  },
  headerText: {
    fontSize: 38,
    fontFamily: 'Open Sans Bold',
    letterSpacing: -2,
    paddingTop: '10%',
    paddingLeft: 20,
    color: 'white',
  },
  backText: {
    fontSize: 33,
    fontFamily: 'SF Pro Text Regular',
    paddingLeft: 20,
  },
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
  contentContainer: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.4,
    justifyContent: 'center',
  },
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signinText: {
    paddingLeft: 30,
    fontSize: 30,
    fontFamily: 'Open Sans Bold',
    color: '#3F434C',
  },
  arrow: {
    color: '#FCAD47',
    fontSize: 36,
  },
  signupText: {
    color: '#3F434C',
    textDecorationLine: 'underline',
  },
  signupTextContainer: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.08,
    alignItems: 'flex-start',
    justifyContent: "flex-end",
    paddingLeft: 33
  }
});

export default Signin;
