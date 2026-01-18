import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  data: {
    color: "#ccc",
    marginBottom: 24,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

const Result = () => {
  const { data } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qr detectado</Text>
      <Text style={styles.data}>{data}</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;
