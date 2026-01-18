import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/images/logo.png";

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 80,
  },

  titleLogo: {
    fontSize: 28,
    fontWeight: "600",
    color: "#ffffff",
  },
});
const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={logo} />
      <View>
        <Text style={styles.titleLogo}>QR</Text>
        <Text style={styles.titleLogo}>ProScanner</Text>
      </View>
    </View>
  );
};

export default Logo;
