import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";


export default function Login ( props ){

    const { navigation } = props;

    const gotoRegister = () => {
        navigation.navigate("Registro");
    }

}
