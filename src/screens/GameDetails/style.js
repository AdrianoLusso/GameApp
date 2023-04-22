import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    background:
    {
      backgroundColor: '#181818',
      height: '100%',
      padding:20,
        justifyContent:'center'
    },
    listImageBox:
    {
        borderRadius:10,
        borderWidth:3,
        borderTopColor:'#D27D2D',
        borderLeftColor:'#D27D2D',
        borderBottomColor:'#e38e00',
        borderRightColor:'#e38e00',
    },
    listImage: {
        width: '100%',
        height: 200,
        borderRadius:5
    },
    title:{
        alignSelf:'center',
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        marginBottom:20
    },
    info:
    {
        color:'white',
        fontSize:20,
        alignSelf:'center',
        marginBottom:20
    },
    infoRow:
    {
        flexDirection:'row',
        justifyContent:'space-between'
    }
})