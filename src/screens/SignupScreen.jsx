import Input from '../components/Input/Input'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import { useSignUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { signUpSchema } from '../validations/signUpSchema'

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [triggerSignUp, result] = useSignUpMutation()

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = () => {
    try {
      signUpSchema.validateSync({ email, password, confirmPassword }, { abortEarly: false });
      triggerSignUp({ email, password });
    } catch (error) {
      if (error.inner) {
        const errors = {};
        error.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setFormErrors(errors);
      }
    }
  }


  const dispatch = useDispatch()

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data))
    }
  }, [result])

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>

      <Input
        label='Email:'
        onChange={setEmail}
        error={formErrors.email}
      />
      <Input
        label='Password:'
        onChange={setPassword}
        error={formErrors.password}
        isSecureEntry={true}
      />
      <Input
        label='Confirm Password:'
        onChange={setConfirmPassword}
        error={formErrors.confirmPassword}
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

    </KeyboardAvoidingView>
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