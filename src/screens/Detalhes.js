import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";

export default function Detalhes({ navigation: { navigate, goBack } }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20 }}>
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

        <View style={{ borderRadius: 10 }}>
          <Video
            style={{
              height: 250,
              marginVertical: 16,
              borderRadius: 10,
              overflow: "hidden",
              justifyContent: "space-between",
              paddingVertical: 12,
              backgroundColor: "red",
            }}
            source={{
              uri: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-reverse-curl-front.mp4#t=0.1",
            }}
            useNativeControls
            resizeMode={ResizeMode.COVER}
            isLooping
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 0.3,
            borderBottomColor: "#000",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              color: "#111",
              fontSize: 20,
              fontWeight: 400,
            }}
          >
            Category
          </Text>

          <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center"}}>
            <Ionicons name="barbell-sharp" size={22} color="#C12323" />
            <Text
              style={{
                color: "#111",
                fontSize: 20,
                fontWeight: 400,
                marginLeft: 4
              }}
            >
              Beginner
            </Text>
          </View>
        </View>

        <Text
          style={{
            color: "#111",
            fontSize: 22,
            fontWeight: 500,
            marginTop: 16,
          }}
        >
          Descrição
        </Text>

        <Text style={{ color: "#111", marginTop: 4, fontSize: 16 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>

        <Text
          style={{
            color: "#111",
            marginTop: 30,
            marginLeft: 4,
            marginBottom: 4,
            fontSize: 18,
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
              marginRight: 10,
              marginBottom: 10,
              borderRadius: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ marginLeft: 10, justifyContent: "space-between" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Ionicons name="barbell" size={24} color="black" />
                <Text style={{ fontSize: 18, marginLeft: 8 }}>
                  Step {index + 1}
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#111", fontSize: 14 }}>
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
