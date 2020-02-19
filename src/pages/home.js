import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo ao App</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.botao}>
          <Button
            color="#000"
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={styles.botao}>
          <Button
            title="Registrar"
            onPress={() => navigation.navigate('Registro')}
          />
        </View>
      </View>
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
    marginTop: 50,
    padding: 10,
    width: 300,
    backgroundColor: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao: {margin: 10},
  text: {fontSize: 30, color: '#FFF', marginBottom: 50},
});
