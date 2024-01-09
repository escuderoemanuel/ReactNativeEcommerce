import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { colors } from '../../global/colors';

const Input = ({ label, onChange, error = '', isSecure = false }) => {
  const [input, setInput] = useState('');

  const onHandleChangeText = (text) => {
    setInput(text);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onHandleChangeText}
        secureTextEntry={isSecure}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    width: '70%',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.paleGoldenRod,
    padding: 10,
    borderRadius: 12,
    backgroundColor: colors.darkBlue,
    width: '100%',
    color: colors.textLight,
  },
  label: {
    color: colors.textLight,
    paddingRight: 10,
    marginBottom: 5,
    textAlign: 'right',
  },
  error: {
    fontSize: 14,
    color: colors.redLabel,
    fontStyle: 'italic',
  }
})