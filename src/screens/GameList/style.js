import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    background:
    {
      backgroundColor: '#181818',
      height: '100%',
      justifyContent: 'center',
    },
    title: {
        fontWeight:'300',
        fontSize: 26,
        marginLeft: 10,
        marginVertical: 10,
        alignSelf:'center',
        color: 'white',
        },
    titleBox:{
        alignSelf:'center',
        width:'95%',
        borderBottomWidth:2,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderColor:'#FFAC1C',
        backgroundColor:'#181818'
    },
    list: {
        width: '90%',
        flexDirection: 'column',
        alignSelf:'center',
        margin:10,
        borderRadius:10,
        borderWidth:2,
        borderTopColor:'#D27D2D',
        borderLeftColor:'#D27D2D',
        borderBottomColor:'#e38e00',
        borderRightColor:'#e38e00',
    },
    listImage: {
        width: '90%',
        height: 200,
        alignSelf:'center',
        margin:10,
        borderRadius:4,
    },
    listingRatingContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    name: {
        fontWeight:'500',
        fontSize: 17, 
        color: 'white',
        alignSelf:'center'
    }
    
})