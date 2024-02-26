import { StyleSheet, Text, View, Image } from "react-native";

const ContentDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <View style={styles.imageTitle}>
          <Image
            style={styles.star}
            source={require("./assets/icon_letter.png")}
          />
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.title}>Rama Krisna Bali</Text>
            <Text>Badung, Bali</Text>
          </View>
        </View>
        <Text style={styles.titleLink}>Lihat Toko</Text>
      </View>
      <Image
        style={styles.banner}
        source={require("./assets/icon_banner.jpg")}
      />
      <Text style={styles.titleDetail}>Topeng Barong</Text>
      <View style={styles.horizontal}>
        <View style={styles.containerSubTitle}>
          {Array.from({ length: 4 }, (_, index) => (
            <Image
              key={index}
              style={styles.star}
              source={require("./assets/icon_star.png")}
            />
          ))}
          <Text style={{ marginLeft: 10 }}>| 56 Terjual</Text>
        </View>
        <Text style={styles.price}>Rp. 619.000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  imageTitle: {
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
  },
  title: {
    fontWeight: "bold",
  },
  titleLink: {
    color: "#847498",
    width: "20%",
  },
  banner: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  titleDetail: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    color: "red",
    fontSize: 22,
    fontWeight: "bold",
  },
  star: {
    width: 18,
    height: 18,
  },
  containerSubTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerTitlePrice: {
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
export default ContentDetail;
