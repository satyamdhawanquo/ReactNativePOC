import React, {useEffect, useRef, useState} from 'react';
import {
  useWindowDimensions,
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Animated
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FloatingButton from '../../components/FloatingButton';
import {welcome, back, signIn, signUp} from '../../constants';
import HomeScreen from '../../screen/HomeScreen';

// thrid-party
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

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
    if (email !== '' && password !== '') {
      const user = allUsers.filter((item) => {
        return item.email == email && item.password == password;
      });
      // redirect the user to home screen
      if (user && user.length === 1) {
        navigation.navigate('Home');
        await AsyncStorage.setItem('loggedInUser', JSON.stringify(user));
      }
      // error
      else {
        Alert.alert('Incorrect email and password.');
      }
    } else {
      Alert.alert('Email and password cannot be empty');
    }
  };

  return (
    <View style={styles.contentContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? 'padding' : 'padding'}
        style={styles.container}>
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
      </KeyboardAvoidingView>
    </View>
  );
};

const SignupText = ({navigation}) => {
  const navigate = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.signupTextContainer}>
      <TouchableWithoutFeedback onPress={navigate}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const Signin = ({navigation}) => {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getUser = async () => {
    const loggedInUser = JSON.parse(await AsyncStorage.getItem('loggedInUser'));
    const users = JSON.parse(await AsyncStorage.getItem('users'));
    if (users && loggedInUser) {
      const user = users.filter((item) => {
        return (
          item.email == loggedInUser[0].email &&
          item.password == loggedInUser[0].password
        );
      });
      setUser(() => {
        setLoading(false);
        return user;
      });
    }
    else {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    setLoading(true);
    getUser();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loading}>Loading</Text>
        <Animated.View style={styles.dots}>
          <View style={styles.dot1}></View>
          <View style={styles.dot2}></View>
          <View style={styles.dot3}></View>
        </Animated.View>
      </View>
    );
  }
   else if (user.length === 1 && !isLoading) {
    return <HomeScreen />;
  } else if (user.length === 0) {
    return (
      <View style={styles.signUpContainer}>
        <SigninHeader />
        <SigninContent navigation={navigation} />
        <SignupText navigation={navigation}></SignupText>
      </View>
    );
  }
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
    justifyContent: 'flex-end',
    paddingLeft: 33,
  },
  loading: {
    fontFamily: 'SF Pro Text Regular',
    fontSize: 27,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot1: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#ccc',
    margin: 5
  },
  dot2: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#ccc',
    margin: 5
  },
  dot3: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#ccc',
    margin: 5
  },
  dots: {
    flexDirection: "row"
  }
});

export default Signin;
