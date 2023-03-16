import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput, StyleSheet, Button } from 'react-native';

const petBackground = require("./assets/pets.png")

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={petBackground} resizeMode="cover" style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', backgroundColor: '#00000080', fontSize: 50, width: '100%', color: '#F5A44D', textShadowColor: '#fff', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 1}}>PETS</Text>
        </ImageBackground>

        <View style={{flex: 3, margin: 12,}}>
          <TextInput style={styles.input} placeholder="Nome do Pet"/>
          <TextInput style={styles.input} placeholder="Raça"/>
          <TextInput style={styles.input} placeholder="Peso"/>
          <TextInput style={styles.input} placeholder="Nascimento"/>
          <Button title="Cadastrar"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 24,
    borderBottomWidth: 1,
  },
});