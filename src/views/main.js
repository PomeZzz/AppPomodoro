import { SafeAreaView, Text, View, Platform } from "react-native";
import Tabs from "../components/tabs";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import Tiempo from "../components/tiempo";
import Button from "../components/button";

export default function Main() {
  const colores = ["#5D735C", "#2F482E", "#193318"];
  const [seleccion, setSeleccion] = useState("POME" | "SHORT" | "LONG");
  const [activo, setActivo] = useState(false);
  const [tiempo, setTiempo] = useState(25 * 60);

  useEffect(() => {
    let interval = null;

    if (activo) {
      interval = setInterval(() => {
        setTiempo(tiempo - 1);
      }, 1);
    } else {
      clearInterval(interval);
    }

    if (tiempo === 0) {
      setActivo(false);
      setTiempo(seleccion === 0 ? 1500 : seleccion === 1 ? 300 : 600);
      PlaySonido();
    }

    return () => clearInterval(interval);
  }, [tiempo, activo]);

  const PlaySonido = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/heisenburger.mp3")
    );
    await sound.playAsync();
  };

  return (
    <SafeAreaView
      style={[{ flex: 1 }, { backgroundColor: colores[seleccion] }]}
    >
      <View style={{ marginTop: Platform.OS === "android" && 30 }}>
        <Tabs
          seleccion={seleccion}
          setSeleccion={setSeleccion}
          tiempo={tiempo}
          setTiempo={setTiempo}
        />
        <Tiempo t={tiempo} />
        <Button activo={activo} setActivo={setActivo}></Button>
      </View>
    </SafeAreaView>
  );
}
