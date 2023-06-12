import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  function handleNavigate() {
    navigation.navigate("Categoria");
  }
  return (
    <View style={styles.container}>
      <Text>Home View</Text>
      <TouchableOpacity onPress={handleNavigate}>
      <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          Categoria
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
