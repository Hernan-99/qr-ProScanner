import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../components/Logo";
import { colors } from "../constants";
import { useRouter } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 16,
    backgroundColor: colors.background,
  },

  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  customBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
  },

  btnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const GetStarted = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.customBtn}
          onPress={() => router.push("/scan")}
        >
          <Text style={styles.btnText}>Escanear</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customBtn}
          onPress={() => router.push("/generate")}
        >
          <Text style={styles.btnText}>Generar QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;
