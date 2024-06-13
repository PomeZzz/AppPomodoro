import { View, StyleSheet, Text } from "react-native";

export default function Tiempo({ t }) {
  const formatoTiempo = `${Math.floor(t / 60)
    .toString()
    .padStart(2, "0")} : ${(t % 60).toString().padStart(2, "0")}`;
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>{formatoTiempo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 110,
    alignItems: "center",
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
  },
  texto: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
