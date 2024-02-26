import ContentDetail from "./ContentDetail";
import TitleBar from "./TitleBar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TitleBar title="Detail" />
      <ContentDetail />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 45,
  },
});
