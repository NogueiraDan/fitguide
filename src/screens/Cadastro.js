import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

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

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text>Cadastro View</Text>
      <TouchableOpacity onPress={handleLoginPress}>
        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          Tem conta? Faça Login aqui
        </Text>
      </TouchableOpacity>

      <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Button
        title="Enviar"
        onPress={handleEnviarPress}
      />
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
