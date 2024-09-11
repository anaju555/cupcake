// Import react-native
import { StyleSheet, Text, View, Image } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

// Import AntDesign
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [font] = useFonts({
    Rokkitt: require("../cupcake/src/fontes/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../cupcake/src/imagem/4.png")}
      />

      <Text style={styles.txt}>Cupcake de Morango</Text>
      <View style={styles.row}></View>

      <Image
        style={styles.cupcakedemorango}
        source={require("../cupcake/src/imagem/cupcakedemorango.png")}
      />

      <Text style={styles.txtcupcake}>blablabla</Text>

      <Image
        style={styles.cupcake1}
        source={require("../cupcake/src/imagem/cupcakedemorango.png")}
      />

      <Image
        style={styles.cupcake2}
        source={require("../cupcake/src/imagem/cupcakedemorango.png")}
      />

      <Image
        style={styles.cupcake3}
        source={require("../cupcake/src/imagem/cupcakedemorango.png")}
      />

      <Image
        style={styles.cupcake4}
        source={require("../cupcake/src/imagem/cupcakedemorango.png")}
      />

      <Image
        style={styles.cupcake5}
        source={require("../cupcake/src/imagem/cupcakedemorango.png")}
      />

      <View style={{ top: 550, right: "20%" }}>
        <AntDesign name="hearto" size={30} color="black" />

        <Text style={styles.valor}> 25,00 </Text>

        <View style={{ left: 200, top: -60 }}>
          <AntDesign name="shoppingcart" size={35} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },

  row: {
    width: "50%",
    height: 2,
    backgroundColor: "lightpink",
  },

  logo: {
    width: "15%",
    height: "15%",
    left: "40%",
    top: "5%",
  },

  txt: {
    fontSize: 40,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "55%",
    textAlign: "center",
  },

  txtcupcake: {
    fontSize: 30,
    top: "50%",
    fontFamily: "Rokkitt",
  },

  cupcakedemorango: {
    width: 600,
    height: 500,
    position: "absolute",
    top: "17%",
    right: "-22%",
  },

  cupcake1: {
    width: 200,
    height: 150,
    position: "absolute",
    right: "70%",
    transform: [{ rotate: "20deg" }],
    top: "5%",
  },

  cupcake2: {
    width: 120,
    height: 100,
    position: "absolute",
    top: "60%",
    right: "85%",
  },

  cupcake3: {
    width: 120,
    height: 100,
    position: "absolute",
    top: "20%",
    left: "85%",
  },

  cupcake4: {
    width: 150,
    height: 150,
    position: "absolute",
    top: "70%",
    left: "82%",
  },

  cupcake5: {
    width: 140,
    height: 110,
    position: "absolute",
    top: "90%",
    right: "75%",
    transform: [{ rotate: "5deg" }],
  },

  valor: {
    fontSize: 25,
    fontFamily: "Rokkitt",
    top: "-30%",
    left: "20%",
  },
});
