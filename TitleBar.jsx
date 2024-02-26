import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const TitleBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.icon} source={require("./assets/icon_left.png")} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require("./assets/icon_share.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default TitleBar;
