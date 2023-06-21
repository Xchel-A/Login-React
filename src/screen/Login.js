import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import ButtonLogin from "../components/ButtonLogin";
import ButtonSecundary from "../components/ButtonSecundary";
import { useNavigation } from '@react-navigation/native';

export default function Login(props) {

  console.log(props)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSvg}>
        <SvgXml
          width="390"
          height="350"
          xml={fondoSvg}
          style={styles.fondoLogin}
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.titulo}> Hola</Text>
        <Text style={styles.subTitulo}>Ingresa a tu cuenta</Text>
        <TextInput placeholder="example@example.com" style={styles.inputText} />
        <TextInput placeholder="*********" style={styles.inputText} />
        <Text
          style={styles.btnSecundary}
          onPress={() => props.navigation.navigate("Reset Password")}
        >
          Olvidaste tu contraseña
        </Text>
        <ButtonLogin
          onPress={() => props.navigation.navigate("Tab")}
          title="Enviar"
        />
        <ButtonSecundary
          onPress={() => props.navigation.navigate("Registrarse")}
          text="Crear cuenta"
        />
      </View>
    </View>
  );
}

const fondoSvg = `<svg width="360" height="236" viewBox="0 0 360 236" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H360V236L307.36 205.478C303.148 203.035 297.923 203.152 293.824 205.78L281 214L212.941 170.053C201.969 162.969 187.394 165.523 179.485 175.915L150.5 214L79.8001 145.738C71.4656 137.691 57.8098 139.499 51.8561 149.437L0 236V0Z" fill="url(#paint0_linear_10_21)" fill-opacity="0.76"/>
<defs>
<linearGradient id="paint0_linear_10_21" x1="309.5" y1="-11" x2="312" y2="334.5" gradientUnits="userSpaceOnUse">
<stop offset="0.406494" stop-color="#FF0909"/>
<stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="1" stop-color="#E78F8F" stop-opacity="0.356746"/>
<stop offset="1" stop-color="#F34C4C" stop-opacity="0.673924"/>
<stop offset="1" stop-color="#FF0909"/>
</linearGradient>
</defs>
</svg>
`;
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
  },
  containerSvg: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  fondoLogin: {
    top: -20,
  },
  containerForm: {
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 70,
    color: "#232323",
    fontWeight: "bold",
  },
  subTitulo: {
    fontSize: 20,
    color: "#232323",
  },
  inputText: {
    height: 60,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 15,
    marginTop: 15,
    paddingStart: 20,
  },
  btnSecundary: {
    fontSize: 15,
    color: "#848484",
    marginTop: 10,
    marginBottom: 10,
  },
});
