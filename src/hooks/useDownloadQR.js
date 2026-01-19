// import * as FileSystem from "expo-file-system/legacy";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";
import { captureRef } from "react-native-view-shot";

export const useDownloadQR = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const downloadQR = async (qrRef) => {
    try {
      setLoading(true);
      setError(null);

      const permission = await MediaLibrary.requestPermissionsAsync();
      if (!permission.granted) {
        setError("Permiso denegado");
        return;
      }

      const uri = await captureRef(qrRef, {
        format: "png",
        quality: 1,
      });

      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);


      // copyAsinc -> deprecated. Evito usarlo y creo el asset directamente arriba
      // const fileName = FileSystem.documentDirectory + "qr-drive.png";

      // await FileSystem.copyAsync({
      //   from: uri,
      //   to: fileName,
      // });

      // const asset = await MediaLibrary.createAssetAsync(fileName);
      // await MediaLibrary.createAlbumAsync("Download", asset, false);

      alert("QR descargado correctamente 🎉");
    } catch (e) {
      setError("Error al generar el QR, por favor vuelva a intentarlo");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return { downloadQR, loading, error };
};
