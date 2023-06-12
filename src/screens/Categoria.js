import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Categoria() {

  const navigation = useNavigation();
  function handleNavigate() {
    navigation.navigate("Pagina de Produto");
  }
  return (
    <View style={styles.container}>
      <Text>Categoria View</Text>
      <TouchableOpacity onPress={handleNavigate}>
      <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          PDP
        </Text>
      </TouchableOpacity>
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
