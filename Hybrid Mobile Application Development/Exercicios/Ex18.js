import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const petBackground = require("./assets/pets.png")

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contador: 0
    }
  }

  onPress() {
    this.setState({contador: this.state.contador+1})
  } 

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: "#FF4273"}}>
          <Text style={{textAlign: 'center', fontSize: 24, width: '100%', color: '#FFF'}}>App Contador</Text>
        </View>

        <View style={{flex: 3, margin: 20,}}>
          <Text style={{color: '#8F8E8E', marginTop: 60, marginBottom: 60, fontSize: 18}}>CONTADOR: {this.state.contador}</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.onPress()}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Incrementar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF4F63",
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
});