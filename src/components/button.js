import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
export default function Button({ activo, setActivo }) {
  const handleCambio = () => {
    setActivo(!activo);
    PlaySonido();
  };

  const PlaySonido = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/goofy.mp3")
    );
    await sound.playAsync();
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleCambio()} style={styles.boton}>
        <Text style={styles.texto}>{activo ? "Para" : "Arrancar"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    margin: 15,
    padding: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
