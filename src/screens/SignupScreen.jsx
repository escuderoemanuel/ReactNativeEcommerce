import Input from '../components/Input/Input'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import { useSignUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const [triggerSignUp, result] = useSignUpMutation()

  const onSubmit = () => {
    triggerSignUp({ email, password });
    //resetForm()
    //navigation.navigate('Login')
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setEmailError('')
    setPasswordError('')
    setConfirmPasswordError('')
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
        label='Email:'
        onChange={setEmail}
        error={emailError}
      />
      <Input
        label='Password:'
        onChange={setPassword}
        error={passwordError}
        isSecureEntry={true}
      />
      <Input
        label='Confirm Password:'
        onChange={setConfirmPassword}
        error={confirmPasswordError}
        isSecureEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
      <View style={styles.altContainer}>
        <Text style={styles.subtitle}>Already have an account? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
          <Text style={styles.subtitleLink}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default SignupScreen

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
  altContainer: {
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