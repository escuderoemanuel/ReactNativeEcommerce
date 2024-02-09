import Input from "../components/Input/Input";
import Spinner from "../components/Spinner/Spinner";
import { Image, TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { colors } from '../global/colors';
import { useLogInMutation } from '../services/authService';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { logInSchema } from '../validations/logInSchema';
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient';
import login from '../../assets/img/login.png';
import { insertSession } from '../database';


const LoginScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const [triggerLogIn, result] = useLogInMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      // Limpiar errores al intentar iniciar sesión
      setLoginError('');
      setFormErrors({
        email: '',
        password: '',
      });

      // Validar los datos con el esquema de inicio de sesión
      //await logInSchema.validate({ email, password }, { abortEarly: false }); //? Comentar para hardcodear user y pass

      // Iniciar sesión
      setIsLoading(true);
      //const response = await triggerLogIn({ email, password }); //? Comentar para hardcodear user y pass
      const response = await triggerLogIn({ email: 'test@coder.com', password: '123456' }); //? Descomentar para hardcodear user y pass

      // Verificar si el inicio de sesión fue sin éxito
      if (response.error) {
        setLoginError('Unregistered user or Incorrect password');
      } else {
        // Limpiar el estado de error si el inicio de sesión fue exitoso
        setLoginError('');
        dispatch(setUser(response.data));
      }
    } catch (error) {
      // Manejar errores de validación Yup
      if (error.name === 'ValidationError') {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        // Asignar mensajes de error a los campos correspondientes
        if (validationErrors.email) {
          setFormErrors((prevErrors) => ({ ...prevErrors, email: validationErrors.email }));
        } else if (validationErrors.password) {
          setFormErrors((prevErrors) => ({ ...prevErrors, password: validationErrors.password }));
        }
      } else {
        console.error('Error during login:', error);
      }
    } finally {
      // Detener la carga después de la ejecución
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
      insertSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken,
      })
        .then(
          result => console.log('User inserted succesfully: ', result))
        .catch(
          error => console.log('Error inserting user:', error))
    }
  }, [result]);

  return (
    <BackgroundGradient>

      {isLoading ? <Spinner /> :

        <View style={styles.loginContainer}>
          <Image source={login} style={styles.loginIcon} />
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
        </View>
      }
    </BackgroundGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  container: {
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: colors.textLight,
    borderRadius: 10,
    margin: 5,
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
    marginTop: 50,
  },
  subtitle: {
    color: colors.textLight,
    fontSize: 16,
  },
  subtitleLink: {
    color: colors.textLight,
    fontSize: 14,
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
  },
  errorText: {
    color: colors.paleGoldenRod,
    fontSize: 14,
    marginTop: 10,
  },
  loginIcon: {
    alignSelf: 'center',
    width: '45%',
    height: '20%',
  }
});
