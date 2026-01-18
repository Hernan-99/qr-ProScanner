import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Linking from "expo-linking";

import { colors } from "../constants";

const Scan = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: "flex-end",
      padding: 24,
    },
    text: {
      color: "#fff",
      marginBottom: 16,
      textAlign: "center",
    },
    button: {
      backgroundColor: colors.primary,
      padding: 14,
      borderRadius: 8,
      alignItems: "center",
      marginBottom: 12,
    },
    backBtn: {
      backgroundColor: colors.primary,
      padding: 14,
      borderRadius: 8,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });

  const [permission, reqPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Necesitas acceso a la cámara para poder escanear
        </Text>

        <TouchableOpacity style={styles.button} onPress={reqPermission}>
          <Text style={styles.buttonText}>Dar permisos</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleBarcodeScanned = ({ data }) => {
    setScanned(true);

    if (data.startsWith("http")) {
      Linking.openURL(data);
    } else {
      router.push({
        pathname: "/result",
        params: { data },
      });
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
      />

      {/* {scanned && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScanned(false)}
        >
          <Text style={styles.buttonText}>Escanear otra vez</Text>
        </TouchableOpacity>
      )} */}

      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Scan;
