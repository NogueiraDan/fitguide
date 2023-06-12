import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Login() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleCadastroPress = () => {
    navigation.navigate("Cadastro");
  };

  const handleEnviarPress = () => {
    // Após resetar a pilha de telas é definida aqui
    if(!nome && !email){
      alert("Digite algo")
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "AppTabs" }],
    });
  };

  return (
    <View style={styles.container}>
      <Text>Login View</Text>
      <TouchableOpacity onPress={handleCadastroPress}>
        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          Não tem uma conta? Cadastre-se aqui
        </Text>
      </TouchableOpacity>

      <View>
        <TextInput placeholder="Nome" value={nome} onChangeText={setNome} />

        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />

        <Button title="Enviar" onPress={handleEnviarPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
