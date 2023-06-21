import { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function CategoryList() {
  const [active, setActive] = useState("All");
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginStart: 10 }}
    >
      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryTitle}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryTitle}>Squats</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryTitle}>Pushups</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryTitle}>Biceps</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryTitle}>Beginners</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryTitle}>Advanced</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  category: {
    backgroundColor: "#C12323",
    paddingHorizontal: 50,
    paddingVertical: 40,
    marginVertical: 20,
    marginHorizontal: 5,
    borderRadius: 8,
    color: "#fff",
    fontWeight: 500,
    fontSize: 100,
  },
  categoryTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 500,
  },
});
