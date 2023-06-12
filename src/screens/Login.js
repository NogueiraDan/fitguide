import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
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
    if (!nome && !email) {
      alert("Digite algo");
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "AppTabs" }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Fit <Text style={styles.guideTitle}>Guide</Text>
      </Text>
      <Text style={styles.subTitle}>Bem vindo!</Text>
      <Text style={styles.subTitle2}>Faça login na sua conta</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Email*"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha*"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.btnLogin} onPress={handleEnviarPress}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleCadastroPress} style={styles.linkSignUp}>
        <Text style={styles.textSignUp}>
          Não tem uma conta? <Text style={{color: "#C12323", textDecorationLine:"underline"}}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: 500,
    paddingTop: 100,
    letterSpacing: 5,
  },
  guideTitle: {
    fontSize: 60,
    fontWeight: 500,
    color: "#C12323",
    letterSpacing: 5,
  },
  subTitle: {
    fontSize: 28,
    fontWeight: 500,
    letterSpacing: 2,
    marginTop: 80,
  },
  subTitle2: {
    fontSize: 16,
    fontWeight: 400,
    opacity: 0.5,
  },
  input: {
    minWidth:"90%",
    margin: 6,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#C6C6C6',
  },
  btnLogin:{
    height: 54,
    backgroundColor: "#C12323",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10
  },
  btnText:{
    fontSize: 20,
    textTransform:"uppercase",
    color: "#f8f8f8",
    fontWeight: 600
  },
  linkSignUp:{
    marginTop: 250,
  },
  textSignUp:{
    color: "#777777",
    opacity: 0.9,
    fontWeight: 400,
    fontSize:14
  }
});
