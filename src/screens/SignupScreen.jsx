import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Input from '../components/Input/Input'
import { colors } from '../global/colors'


const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Input
        label='Email:'
        onChange={null}
        error=''
      />
      <Input
        label='Password:'
        onChange={null}
        error=''
        isSecure={true}
      />
      <Input
        label='Repeat Password:'
        onChange={null}
        error=''
        isSecure={true}
      />
      <TouchableOpacity style={styles.button} onPress={null}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.subtitle}>Already have an account? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('LoginScreen') }}>
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