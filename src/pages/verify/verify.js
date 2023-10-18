import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";


export default function Login ( props ){

    const { navigation } = props;

    const gotoRegister = () => {
        navigation.navigate("Registro");
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.firstSecction}>
            <Text style = {styles.title}>Verify your email</Text>
            <Text style = {{ marginTop: 10}}>We sent OTP code to your email</Text>
            </View>
        
            <View style={styles.secondSecction}>
                <Text style={{ fontSize: 20, marginTop: 20 }}>Enter your code</Text>
                <View>
                    <Text style= {styles.lines}>_ _ _ _ _ _</Text>
                </View>

                <View>
                    <Text style = {{ marginTop: -255 }}>jonadoe@gmail.com is not your email?</Text>
                </View>
                <View>
                    <Text style = {{ marginTop: -410 }}>Change it here</Text>
                </View>

            </View>
        </SafeAreaView>
        
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
        flex: 3,
        backgroundColor: 'white',
        width: "100%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 30,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    title: {
        fontSize: 35,
        color: 'black',
        marginTop: 50,

    },
    label: {
        color: '#ccc'
    },
    TextInput: {
        color: '#000',
        padding: 8,
    },
    fotgotpassword: {
        color: 'black',
        textAlign: 'right'
    },
    button: {
        backgroundColor: 'pink',
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        width: '100%',
        height: '40%'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 11
    },
    spacing: {
        marginTop: 10
    },
    raw: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -1
    },
    signup: {
        color: 'pink',
        paddingLeft: 5
    },
    top: {
        marginTop: -30
    },
    lines: {
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: -160
    }

})