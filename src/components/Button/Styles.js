import { StyleSheet } from "react-native"

export const styles = StyleSheet.create(
    {
        button:
        {
            alignSelf:'center',
            justifyContent:'center',
            marginVertical:20,
            borderRadius:5,
        },
        enabledButton:{
            backgroundColor:'#FF8C00'
        },
        disabledButton:{
            backgroundColor:'#402204',
            opacity:0.2
        },
        buttonText:
        {
            textAlign:'center',
            color:'white',
        }
    }
)