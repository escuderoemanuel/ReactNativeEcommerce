import Input from '../components/Input/Input'
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import { useSignUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { signUpSchema } from '../validations/signUpSchema'
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient';
import login from '../../assets/img/login.png';

const SignupScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
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
    <BackgroundGradient>

      <ScrollView>
        <View style={styles.loginIconContainer}>
          <Image source={login} style={styles.loginIcon} />
        </View>
        <View style={styles.container} behavior='height'>
          <View style={styles.signupContainer}>

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
          </View>
        </View>
      </ScrollView>

    </BackgroundGradient >
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  signupContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    gap: 10,
    paddingBottom: 10
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
  },
  loginIconContainer: {
    width: '100%',
    height: 150,
    marginVertical: 20
  },
  loginIcon: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  }
})