import Input from "../components/Input/Input";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { colors } from '../global/colors';
import { useLogInMutation } from '../services/authService';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const [triggerLogIn, result] = useLogInMutation()

  const onSubmit = () => {
    triggerLogIn({ email, password });
    console.log(result)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data))
    }
  }, [result])

  return (
    <View style={styles.container}>
      <Input
        label='Email'
        onChange={setEmail}
        error=''
      />
      <Input
        label='Password'
        onChange={setPassword}
        error=''
        isSecureEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.subtitle}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
          <Text style={styles.subtitleLink}>Create One</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  title: {
    fontSize: 30,
    color: colors.textLight,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    padding: 10,
    backgroundColor: colors.textLight,
    borderRadius: 10,
    margin: 5
  },
  buttonText: {
    color: colors.darkBlue,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  subtitle: {
    color: colors.textLight,
    fontSize: 16,
  },
  subtitleLink: {
    color: colors.textLight,
    fontSize: 14,
    textDecorationLine: 'underline',
    textTransform: 'uppercase'
  }


})