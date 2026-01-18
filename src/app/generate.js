import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { colors } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
    backgroundColor: colors.background,
  },

  titleText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },

  listContainer: {
    paddingLeft: 20,
  },

  orderList: {
    width: "100%",
    maxHeight: 180,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  bullet: {
    marginRight: 10,
    fontSize: 14,
    color: "#fff",
  },
  itemText: {
    fontSize: 14,
    color: "#fff",
  },

  input: {
    height: 44,
    width: "100%",
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#fff",
  },

  generateButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 8,
  },

  generateTextButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const data = [
  { id: "1", value: "Subir archivo a drive y establecerlo como publico" },
  { id: "2", value: "Copiar el link de drive y pegarlo en el campo" },
  { id: "3", value: "Presionar en generar qr" },
  { id: "4", value: "Se descargara automaticamente en descargas" },
  {
    id: "5",
    value: "Felicidades, creaste tu QR. Revisa la carpeta de descargas ",
  },
];

const renderItem = ({ item }) => (
  <View style={styles.listItem}>
    <Text style={styles.bullet}>{item.id}.</Text>
    <Text style={styles.itemText}>{item.value}</Text>
  </View>
);

const Generate = () => {
  const [value, setValue] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Instrucciones: </Text>
          <FlatList
            style={styles.orderList}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="handled"
          />

          <TextInput
            style={styles.input}
            placeholder="https://drive.google.com/...."
            placeholderTextColor="#aaa"
            value={value}
            onChangeText={setValue}
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={[styles.generateButton, !value && { opacity: 0.5 }]}
            disabled={!value}
          >
            <Text style={styles.generateTextButton}>Generar QR</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Generate;
