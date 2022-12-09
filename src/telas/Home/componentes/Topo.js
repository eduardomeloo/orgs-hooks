import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import logo from '../../../assets/logo.png'
import topo from "../../../mocks/topo";

export default function Topo() {
    return  <View style={estilos.topo} >
                <Image source={logo} style={estilos.imagem} />
                <Text style={estilos.boasVindas} >{topo.boasVindas}</Text>
                <Text style={estilos.legenda} >{topo.legenda}</Text>
            </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26
    }
})