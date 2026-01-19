import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";

const QrPreview = ({ value, qrRef }) => {
  if (!value) return null;

  return (
    <View ref={qrRef} collapsable={false}>
      {/* <QRCode value={value} size={220} backgroundColor="white" color="black" /> */}
      <QRCode value={value} size={220}/>
    </View>
  );
};

export default QrPreview;
