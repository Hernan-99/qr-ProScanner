import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Logo from "../components/Logo";
import { colors } from "../constants";
import { Link } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 16,
    backgroundColor: colors.background,
  },

  getStartedButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  getStartedText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Link href="/getStarted" asChild>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedText}>Comenzar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Home;
