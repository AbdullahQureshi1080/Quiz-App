import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const StartEndButton = (props) =>{
    return(
        <TouchableOpacity onPress = {props.onPress} >
        <View style = {styles.buttonContainer}>
            <Text style = {styles.buttonContainerText}>{props.text}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:"grey",
        paddingHorizontal: 30,
        padding: 10,
        borderRadius: 50,
      },
      buttonContainerText:{
        fontSize:30,
        color:"white",
      },
});

export default StartEndButton;