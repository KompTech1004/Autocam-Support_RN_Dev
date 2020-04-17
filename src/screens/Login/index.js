import React, {useContext} from 'react';
import {
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContext} from 'react-navigation';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Logo from '~/components/Logo';
import Title from '~/components/Title';

import styles from './styles';
import bg from '~/assets/background/bg.png';
import logo from '~/assets/logo/logo.png';

const Login = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <Title title="Login" />

      <Logo img={logo} />

      <Input content="Email Address" />
      <Input content="Password" password />

      <TouchableOpacity
        style={styles.alignRight}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.instructions}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.bottomView}>
        <Button title="Log In" />

        <View>
          <Text style={[styles.instructions, styles.bottomText]}>
            Don't Have An Account?
          </Text>

          <Button title="Sign Up" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;