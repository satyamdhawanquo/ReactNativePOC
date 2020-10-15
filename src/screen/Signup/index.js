import React from 'react';
import {
  useWindowDimensions,
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  Dimensions
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FloatingButton from '../../components/FloatingButton';
import {welcome, back, signIn, signUp} from '../../constants';

// thrid-party
import Icon from 'react-native-vector-icons/FontAwesome';

const SignupHeader = () => {
  return (
    <View style={styles.headerImage}>
      <SafeAreaView>
        <Text style={styles.headerText}>{welcome}</Text>
        <Text style={styles.backText}>{back}</Text>
      </SafeAreaView>
    </View>
  );
};

const SignUpContent = () => {
  const enterPassword = (text) => {
    console.log(text);
  };
  const enterEmail = (text) => {
    console.log(text);
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
        placeholder="Password"
        placeholderTextColor="#747474"
        accessibilityElementsHidden={true}
        style={styles.textInput}
        onChangeText={enterPassword}
      />
      <View style={styles.signInButton}>
        <Text style={styles.signinText}>Sign in</Text>
        <FloatingButton icon={<Icon name="arrow-right" size={40} style={styles.arrow} />} />
      </View>
    </View>
  );
};

const Signup = () => {
  return (
    <View style={styles.signUpContainer}>
      <SignupHeader />
      <SignUpContent />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200
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
    paddingTop: 100,
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
    height: '40%',
    justifyContent: 'center',

  },
  signInButton: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
  },
  signinText: {
      paddingLeft: 30,
      fontSize: 30,
      fontFamily:  'Open Sans Bold',
      color: "#3F434C",
  },
  arrow: {
      color: '#FCAD47',
      fontSize: 36
  }
});

export default Signup;
