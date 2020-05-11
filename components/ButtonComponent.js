import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const StartEndButton = (props) =>{
    if (props.disabled){
        var buttonColor = 'grey'
    }
    else {
        var buttonColor = '#071045'
    }
    return(
        <TouchableOpacity onPress = {props.onPress} disabled={props.disabled} >
        <View style = {{...styles.buttonContainer,backgroundColor:buttonColor}}>
            <Text style = {styles.buttonContainerText}>{props.text}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        paddingHorizontal: 30,
        padding: 10,
        borderRadius: 50,
        alignItems:"center",
        width:"50%"
      },
      buttonContainerText:{
        fontSize:30,
        color:"white",
      },
});

export default StartEndButton;