import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Detalhes({ navigation: { navigate, goBack } }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20, marginBottom: 70 }}>
        <View
          style={{
            alignItems: "center",
            paddingVertical: 10,
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderWidth: 1,
              borderColor: "c2c2c2",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
            onPress={() => {
              goBack();
            }}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#111",
              fontSize: 20,
              marginLeft: 12,
              fontWeight: 500,
            }}
          >
            Leg Muscle Strength
          </Text>
        </View>

        <ImageBackground
          source={require("../../assets/background.jpg")}
          style={{
            height: 250,
            marginVertical: 16,
            borderRadius: 10,
            overflow: "hidden",
            justifyContent: "space-between",
            paddingVertical: 12,
          }}
        >
          <View
            style={{
              paddingHorizontal: 12,
              alignItems: "flex-end",
              borderWidth: 0,
            }}
          >
            <FontAwesome name="bookmark-o" size={24} color="#fff" />
          </View>

          <View
            style={{
              borderRadius: 10,
              overflow: "hidden",
              marginHorizontal: 18,
              backgroundColor: "#fff",
              opacity: 0.8,
              padding: 8,
            }}
          >
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    color: "#111",
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  Barbell Curl
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    color: "#111",
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  Barbell Curl
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    color: "#111",
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  Beginner
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#111",
              fontSize: 25,
              fontWeight: 500,
            }}
          >
            Barbell Curl
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "#111",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              test
            </Text>
          </View>
        </View>

        <Text
          style={{
            color: "#111",
            fontSize: 20,
            fontWeight: 400,
            marginTop: 16,
          }}
        >
          Descrição
        </Text>

        <Text style={{ color: "#111", marginTop: 4, fontSize: 16 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>

        <Text
          style={{
            color: "#111",
            marginTop: 20,
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          Steps (4)
        </Text>
        {[1, 1, 1, 1].map((workout, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#ffff",
              padding: 10,
              marginRight: 15,
              marginBottom: 10,
              borderRadius: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ marginLeft: 10, justifyContent: "space-between" }}> 
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                <Ionicons name="barbell" size={24} color="black" />
                <Text style={{ fontSize: 18, marginLeft: 8 }}>Step {index + 1}</Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#111", fontSize: 14 }}>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    paddingTop: 40,
  },
});
