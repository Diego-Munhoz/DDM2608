import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SavedPasswords from './src/screens/SavedPasswords.js';
import { ModalPassword } from './src/components/modal/index.js';

let charset = "abcdefghijklmnopqrstuvwxyz!#$&%0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {

  const [senhaGerada, setSenhaGerada] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [savedPasswords, setSavedPasswords] = useState([]);

  function gerarSenha(){
    let senha = "";

    for( let i = 0, n = charset.length; i < 10; i++ ){
      senha += charset.charAt(Math.floor(Math.random() * n))
    }

    setSenhaGerada(senha);
    setModalVisible(true);

  }

  function salvarSenha() {
    setSavedPasswords(prevPasswords => {
      const updatePasswords = [...prevPasswords, senhaGerada];
      setModalVisible(false);
      navigation.navigate('SavedPasswords', { savedPasswords: updatePasswords });
      return updatePasswords;
    })
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('./src/img/logoGenePassword.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>G3n3P4sSW0rD</Text>
      <TouchableOpacity onPress={gerarSenha} style={styles.button} >
        <Text style={styles.textButton}>Gerar Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={salvarSenha}>
        <Text style={styles.textButton2}>Ver Senhas Salvas</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword senha={senhaGerada} fecharModal={() => setModalVisible(false)} salvarSenha={salvarSenha}/>
      </Modal>
    </View>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name="SavedPasswords" component={SavedPasswords} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C2050',
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
    color: '#0DA5F4',
  }, 
  button:{
    backgroundColor: '#0DA5F4',
    width: '70%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2:{
    backgroundColor: '#0C2050',
    width: '70%',
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0DA5F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textButton:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textButton2:{
    color: '#0DA5F4',
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
