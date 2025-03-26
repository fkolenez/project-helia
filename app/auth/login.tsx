import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login(){   
    const [user, setUser] = useState("");
    const [password, setPassword] = useState(""); 

    const handleLogin = async() => {
        try{
            const response = await fetch("http://192.168.0.103:3000/users/authentication", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user, password }),
            });

            const data = response.json();
        } catch(error) {
            console.error(error)
            Alert.alert("error rs");
        }    
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu usuario"
                value={user}
                onChangeText={setUser}
                keyboardType="email-address"
            />

            
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
      /* ocupa todo o espaço da tela */
      flex: 1,
      /* cor de fundo */ 
      backgroundColor: "#000000",
      /* distancia os elementos na horizontal */ 
      paddingHorizontal: 20,
  },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    input: {
      width: "80%",
      height: 50,
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: "#ccc",
    },
    button: {
      backgroundColor: "#6200ee",
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 10,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
});

