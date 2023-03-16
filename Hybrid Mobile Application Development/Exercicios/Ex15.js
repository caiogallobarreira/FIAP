import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const coffeeBackground = require("./assets/coffee.png")

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "#FFBD59"}}>
        <ImageBackground source={coffeeBackground} resizeMode="cover" style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', backgroundColor: '#61616180', fontSize: 50, width: '60%', borderRadius: 15, padding: 5, color: '#000', textShadowColor: '#00000090', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 1}}>Café FIAP</Text>
        </ImageBackground>

        <View style={{flex: 3, margin: 12, justifyContent: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Faça o login para continuar</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>EMAIL</Text>
            <TextInput style={styles.input} placeholder="E-mail"/>
            <Text style={styles.inputLabel}>PASSWORD</Text>
            <TextInput style={styles.input} placeholder="Senha"/>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: "#fff", fontWeight: "bold", fontSize: 18, textAlign: "center"}}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signup}>
              <Text style={{fontSize: 16, textAlign: "center"}}>Signup!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputLabel:{
    margin: 5 
  },
  title:{
    margin: 5,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle:{
    margin: 5 ,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#1C2120",
    padding: 15,
    borderRadius: 5
  },
  signup: {
    marginTop: 5,
    padding: 15,
    borderRadius: 5
  }
});