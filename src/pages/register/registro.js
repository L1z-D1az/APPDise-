import { Platform, StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';




export default function Registro (props) {
    const { navigation } = props;

    //Para seleccionar imagen
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    

      //Navegation to verification page
    const gotoVerify = () => {
        navigation.navigate("Verificar");
    }

    //Navegation to Login page
    const gotoLogin = () => {
        navigation.navigate("Login");
    }

    return (
        <SafeAreaView style = {styles.container}>
            <View style= {styles.firstSecction}>
                <Text style= {styles.title}>
                    Sign up for a {"\n"}new account
                </Text>
                <Text style = {{ marginTop: 20}}>
                   We just need some more information
                </Text>
            </View>

            <View style={styles.addImage}>

                <View>
                    <Button title="Añadir imagen"
                        color="#006400"
                        onPress={pickImage}
                        style={ styles.buttonText } />
                </View>
                {image && <Image source={{ uri: image }} style={{ width: 100, height: 100}} />}
            </View>

            
            <View style= {styles.secondSecction}>
            <View>
            <View style= {[styles.spacing, styles.top, styles.color1]}>
                    <Text style= {styles.label}>Name</Text>
                    <TextInput 
                        style = {styles.TextInput}
                            underlineColorAndroid="#2f4f4f"
                        placeholder="Alizee Blue"
                        returnKeyType='next'
                    >
                    </TextInput>
                </View>

                <View style= {styles.spacing}>
                    <Text style= {styles.label}>Email address</Text>
                    <TextInput 
                        style = {styles.TextInput}
                            underlineColorAndroid="#2f4f4f"
                        placeholder="ejemplo@ejem.com"
                        keyboardType="email-address"
                        returnKeyType='next'>
                    </TextInput>
                </View>

                <View style= {styles.spacing}>
                    <Text style= {styles.label}>password</Text>
                        <TextInput 
                            underlineColorAndroid="#2f4f4f"
                        placeholder="*********" style = {styles.TextInput}
                        secureTextEntry={true}>
                    </TextInput>
                </View>

                <View style= {styles.spacing}>
                    <Text style= {styles.label}>Confirm password</Text>
                        <TextInput 
                            underlineColorAndroid="#2f4f4f"
                        placeholder="*********" style = {styles.TextInput}
                        secureTextEntry={true}>
                    </TextInput>
                </View>

                <View style= {styles.spacing}>
                    <TouchableOpacity style = {styles.button} onPress={gotoVerify}>
                        <Text style= {styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
                </View>

                <View style= {[styles.spacing, styles.raw]}>
                <Text style= {styles.label}>Already have an account?</Text>
                <TouchableOpacity onPress={gotoLogin}>
                    <Text style= {styles.signup}>Log In</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    )

    
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstSecction: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 30,
        width: "100%",
        fontWeight: 'bold'
    },
    secondSecction: {
        flex: 4,
        backgroundColor: '#f0f8ff',
        width: "100%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 30,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25,
        color: 'black',
        marginTop: 20,
        fontWeight: "bold",


    },
    label: {
        color: '#ccc'
    },
    TextInput: {
        color: '#c34568',
        padding: 7,
    },
    fotgotpassword: {
        color: 'pink',
        textAlign: 'right'
    },
    button: {
        backgroundColor: '#2f4f4f',
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        width: '90%',
        height: '35%'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 1
    },
    spacing: {
        marginTop: 30
    },
    raw: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -1
    },
    signup: {
        color: '#c34568',
        paddingLeft: 5
    },
    top: {
        marginTop: -30
    },
    addImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

})