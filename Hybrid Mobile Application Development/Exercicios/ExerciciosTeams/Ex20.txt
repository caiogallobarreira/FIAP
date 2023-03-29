import React from 'react';
import {Text, View, ScrollView, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import imageBg from './assets/imagem.png';

export default class App extends React.Component{
    constructor(){
        super()
        this.state = {
            nome: "",
            destino: "",
            data: "",
            lista: []
        }
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground style={{flex: 30}} source={imageBg} resizeMode="cover">
                    <View style={{flex: 1, margin: 20, padding: 10, borderRadius: 15, backgroundColor: "#00000070", justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: 'white', fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>Venda de Passagens Aéreas</Text>
                    </View>
                </ImageBackground>
                <View style={{backgroundColor:"#eeeeee70", flex: 70}}>
                    <View style={{margin: 10}}>
                        <Text>Nome</Text>
                        <TextInput style={{backgroundColor: "#fff", borderRadius: 5, padding: 10,  marginBottom: 10}} value={this.state.nome} onChangeText={(txt) => {this.setState({nome: txt})}}/>

                        <Text>Destino</Text>
                        <TextInput style={{backgroundColor: "#fff", borderRadius: 5, padding: 10, marginBottom: 10}} value={this.state.destino} onChangeText={(txt) => {this.setState({destino: txt})}}/>
                        
                        <Text>Data do embarque:</Text>
                        <TextInput style={{backgroundColor: "#fff", borderRadius: 5, padding: 10, marginBottom: 10}} value={this.state.data} onChangeText={(txt) => {this.setState({data: txt})}}/>

                        <TouchableOpacity style={{backgroundColor: "lightblue", borderRadius: 5, padding: 10, alignItems: 'center'}} onPress={() => {
                            this.setState({lista: [...this.state.lista, {
                              nome: this.state.nome,
                              destino: this.state.destino,
                              data: this.state.data,
                            }]});
                            
                            this.setState({nome:""});
                            this.setState({destino:""});
                            this.setState({data:""});
                        }}>
                            <Text style={{color: "#fff"}}>VENDER</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{backgroundColor: "yellow"}}>
                        {this.state.lista.map((objeto, i) => {
                            return (
                                <View key={i} style={{margin:10, padding: 10, backgroundColor: "lightblue", borderRadius:5}}>

                                    <Text><Text style={{fontWeight: 'bold'}}>Nome do passageiro:</Text> {objeto.nome}</Text>
                                    <Text><Text style={{fontWeight: 'bold'}}>Destino:</Text> {objeto.destino}</Text>
                                    <Text><Text style={{fontWeight: 'bold'}}>Data do embarque:</Text> {objeto.data}</Text>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}