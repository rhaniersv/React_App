import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Button,
} from 'react-native';

export default function Registro({navigation}) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Usuário" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Confirmar Senha"
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => Alert.alert('FUNCIONA!!!', 'Você clicou no botão')}>
        <Text style={styles.botaoText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50',
  },
  input: {
    marginTop: 25,
    padding: 10,
    width: 300,
    backgroundColor: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao: {
    backgroundColor: '#888',
    width: 200,
    height: 42,
    marginTop: 15,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
});
