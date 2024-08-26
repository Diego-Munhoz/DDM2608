import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

let charset = "abcdefghijklmnopqrstuvwxyz!#$&%0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function App() {

  const [senhaGerada, setSenhaGerada] = useState("");

  function gerarSenha(){
    let senha = "";

    for( let i = 0, n = charset.length; i < 10; i++ ){
      senha += charset.charAt(Math.floor(Math.random() * n))
    }

    setSenhaGerada(senha);
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('./src/img/logolock.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>LockGen</Text>
      <TouchableOpacity onPress={gerarSenha} style={styles.button} >
        <Text style={styles.textButton}>Gerar Senha</Text>
      </TouchableOpacity>
      <Text style={styles.genText}>{senhaGerada}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 20,
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button:{
    backgroundColor: '#333',
    width: '70%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  genText:{
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
});
