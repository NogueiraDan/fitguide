import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import CategoryList from "../../components/CategoryList";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bem vindo</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={true}>
        <CategoryList />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 16 }}>Mais acessados</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: "#C12323" }}>Veja mais</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={"fast"}
          pagingEnabled
          snapToInterval={290}
        >
          {[1, 1, 1, 1, 1, 1].map((workout, index) => (
            <TouchableOpacity
              key={index}
              style={styles.workouts}
              onPress={() => navigation.navigate("Detalhes")}
            >
              <Image
                source={require("../../assets/workout.jpg")}
                style={{ width: "auto", height: 150 }}
              />
              <View style={{ padding: 10 }}>
                <View
                  style={{
                    marginBottom: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18 }}>leg Muscle Strength</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "#111", fontSize: 14 }}>5.0</Text>
                    <AntDesign name="star" size={24} color="gold" />
                  </View>
                </View>

                <Text style={{ fontSize: 16 }}>Daisha Gaivornk</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>Em Alta!</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: "#C12323" }}>Veja mais</Text>
          </TouchableOpacity>
        </View>
        {[1, 1, 1, 1, 1, 1].map((workout, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "#ffff",
              padding: 10,
              marginRight: 15,
              marginBottom: 10,
              borderRadius: 10,
              flexDirection: "row",
            }}
            onPress={() => navigation.navigate("Detalhes")}
          >
            <Image
              source={require("../../assets/workout.jpg")}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
            <View style={{ marginLeft: 10, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 18 }}>leg Muscle Strength</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="calendar" size={24} color="#111" />
                <Text style={{ color: "#111", fontSize: 14 }}>
                  8 Weeks | Home
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="star" size={24} color="gold" />
                <Text style={{ color: "#111", fontSize: 14 }}>Beginner</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
  },
  header: {
    paddingTop: 30,
    height: 100,
    width: "100%",
    backgroundColor: "#C12323",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingStart: 10,
    paddingEnd: 10,
  },
  headerTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: 500,
  },
  homeContent: {
    height: "100%",
    width: "100%",
  },
  workouts: {
    backgroundColor: "#ffff",
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
    width: 280,
    marginStart: 10,
  },
});
