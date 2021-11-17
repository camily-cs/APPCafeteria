import { StatusBar } from 'expo-status-bar';
import { estilo } from './css/Estilo';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={estilo.cabecalho}>
        <Text style={estilo.titulo}>Cafeteria</Text>
      </View>
      <View>
        <Image source={{uri:"https://i.ytimg.com/vi/AFBcHr4H1CI/maxresdefault.jpg"}} style={estilo.painel} />
      </View>


      <View style={estilo.elmenu}>
        {/* café */}
        <View>
          <Image source={{uri:"http://blog.chefsclub.com.br/wp-content/uploads/2019/08/historia_do_cafe-968x660.jpg"}} style={estilo.menu} />
        </View>

        {/* salgados */}
        <View>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxI9zyJZGKfm-70kistghZ6j1M2_Jr15Rag&usqp=CAU"}} style={estilo.menu} />
        </View>

        {/* doces */}
        <View>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5qD3fNGkvQHWxHO0ErMRsr_2z8122TuF2g&usqp=CAU"}} style={estilo.menu} />
        </View>
        
        {/* bebidas */}
        <View>
          <Image source={{uri:"https://images8.alphacoders.com/859/859454.jpg"}} style={estilo.menu} />
        </View>
      </View>
    </View>
  );
}


