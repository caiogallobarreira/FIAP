import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

const tasklistBackground = require("./assets/tasklist.png")
const circle = require("./assets/circle.png")
const check = require("./assets/check.png")
export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      tasklist: [
        {
          selected: true,
          title: "Assistir aulas na faculdade.",
          date: "qua, 20 de maio"
        },
        {
          selected: false,
          title: "Estudar React Native.",
          date: "qua, 20 de maio"
        },
        {
          selected: true,
          title: "Fazer atividades de casa.",
          date: "qua, 20 de maio"
        },
        {
          selected: true,
          title: "Mandar email para o chefe.",
          date: "qua, 20 de maio"
        },
        {
          selected: true,
          title: "Preparar o almoço.",
          date: "qua, 20 de maio"
        },
      ],
      test: 0
    };
  }

  onPress = (i) => {
    let list = this.state.tasklist;
    list[i].selected = !list[i].selected
    this.setState({tasklist: list})
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={tasklistBackground} resizeMode="cover" style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', backgroundColor: '#00000080', fontSize: 50, width: '90%', color: '#fff', marginBottom: 10}}>Hoje</Text>
          <Text style={{textAlign: 'center', backgroundColor: '#00000080', fontSize: 18, width: '90%', color: '#fff'}}>qua, 20 de maio {this.state.test}</Text>
        </ImageBackground>

        <View style={{flex: 3, margin: 12,}}>
          {
            this.state.tasklist.map((tasklist, i) => 
            <View style={styles.tasklistContainer}>
              <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 18}} onPress={() => {this.onPress(i)}}>
                <Image source={tasklist.selected ? check : circle} style={{width: 30, height: 30}}/>
              </TouchableOpacity>
              <View style={{padding: 18, justifyContent: 'center'}}>
                <Text style={tasklist.selected ? {textDecorationLine: 'line-through'} : {}}>{tasklist.title}</Text>
                <Text style={{color: "#616161"}}>{tasklist.date}</Text>
              </View>
            </View>)
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tasklistContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#757575"
  },
});