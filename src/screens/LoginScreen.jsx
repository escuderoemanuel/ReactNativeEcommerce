import Input from "../components/Input/Input";
import { TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { colors } from '../global/colors';
import { useLogInMutation } from '../services/authService';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { logInSchema } from '../validations/logInSchema';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  })


  const [triggerLogIn, result] = useLogInMutation()
  const dispatch = useDispatch()


  const onSubmit = async () => {
    try {
      // Limpiar errores al intentar iniciar sesión
      setLoginError('');
      setFormErrors({
        email: '',
        password: '',
      });
      await logInSchema.validate({ email, password }, { abortEarly: false });

      const response = await triggerLogIn({ email, password });

      // Check if the login was unsuccessful
      if (response.error) {
        setLoginError('Usuario no registrado');
      } else {
        // Clear the error state if login was successful
        setLoginError('');
        dispatch(setUser(response.data));
      }
    } catch (error) {
      // Handle Yup validation errors
      if (error.name === 'ValidationError') {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        // Assign error messages to the corresponding fields
        if (validationErrors.email) {
          setFormErrors((prevErrors) => ({ ...prevErrors, email: validationErrors.email }));
        } else if (validationErrors.password) {
          setFormErrors((prevErrors) => ({ ...prevErrors, password: validationErrors.password }));
        }
      } else {
        console.error('Error during login:', error);
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

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
      {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableOpacity>
      <View style={styles.altContainer}>
        <Text style={styles.subtitle}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
          <Text style={styles.subtitleLink}>Create One</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

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
  },
  errorText: {
    color: colors.paleGoldenRod,
    fontSize: 14,
    marginTop: 10,
  },
})