import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';

export function ModalPassword({senha, fecharModal, salvarSenha}) {

    function copyToClipboard() {
        Clipboard.setStringAsync(senha);
        Toast.show({
            type: 'success',
            text1: 'Senha copiada!',
            text2: 'A senha foi copiada para a área de tranferência!'
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>
                <Pressable style={styles.innerPassword} onPress={copyToClipboard}>
                    <Text style={styles.text}>{senha}</Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.buttonBack}>
                        <Text style={styles.buttonTextBack} onPress={fecharModal}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSave} onPress={salvarSenha}>
                        <Text style={styles.buttonTextSave}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Toast/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        backgroundColor: '#fff',
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        paddingBottom: 18,
    },
    innerPassword:{
        backgroundColor: '#e6e6e6',
        width: '90%',
        padding: 14,
        borderRadius: 8,
    },
    text:{
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonArea:{
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 14,
    },
    buttonBack:{
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    buttonSave:{
        flex: 1,
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#333',
        borderRadius: 8,
    },
    buttonTextSave:{
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    buttonTextBack:{
        fontSize: 14,
        fontWeight: 'bold',
    },
});