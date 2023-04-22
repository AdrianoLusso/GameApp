import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        //alignItems:'center',
        backgroundColor: '#181818'
      },
      title: {
        fontSize: 32,
        fontWeight: "700",
        color:'white'
      }
      ,
      inputContainer: {
        width: "90%",
        padding:10,
        marginVertical: 6,
        borderColor: "#D27D2D",
        borderWidth: 1,
        color:'white',
        borderRadius: 6,
        margin: 12
      },
      validInput:{
        borderColor:'green',
      }
      ,
      unvalidInput:{
      }
      ,
      buttonContainer: {
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-between",
        width: 320,
        height: 130,
      },
      button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        color:'green'
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
      },
      imagen: {
        fontSize: 100,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        padding: 10,
        marginVertical: 6,
      },
})