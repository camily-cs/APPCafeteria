import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    cabecalho:{
      backgroundColor: '#ff5722' ,
      paddingTop:20,
      paddingBottom:20
    },
  
    titulo:{
      color:'white',
      textAlign:'center',
      fontSize:30
    },

    painel:{
        width:'100%',
        height:300,
        resizeMode:'cover'
    },
    
    menu:{
      marginTop: 25,
      marginLeft: 20,
      width: 150,
      height: 150,
      resizeMode: 'cover'
    },

    elmenu:{
      display: "flex",
      flexDirection: "row",
      flexWrap:"wrap"
    }
  })