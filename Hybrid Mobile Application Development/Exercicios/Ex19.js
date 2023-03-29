import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Botao extends React.Component{
	constructor(props){
        super(props);
    }

    // title, padding, margin, borderWidth, borderColor, shadow, shadowText

    render(){
		return (
			<TouchableOpacity style={{padding: this.props.padding, margin: this.props.margin, borderWidth: this.props.borderWidth, 
                                      shadowOffset: (this.props.shadow == true) ? {
                                        width: 10, height: 10
                                      } : {}, 
                                      shadowRadius: (this.props.shadow == true) ? 3 : 0
                                    }}>
                <Text style={{
                    textShadowColor: "#000",
                    textShadowOffset: (this.props.shadowText == true) ? {
                        width: 2, height:2
                    } : {}, 
                    textShadowRadius: (this.props.shadowText == true) ? 3 : 0
                }}>{this.props.title}</Text>
            </TouchableOpacity>
		)	
	}
}

export default class App extends React.Component{
    render(){
        return (
            <View>
                <Botao title="Olá" padding={10} margin={4} borderWidth={3} borderColor="red" shadow={true} shadowText={true}  />
            </View>
        )
    }
}