
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles/colors';


export default function AppButton(props){

    return(
        <TouchableOpacity
            style={[
                styles.containerView, 
                props?.customContainerStyle
            ]} 
            onPress={props?.disable ? null : props?.onPress}
        >
            <Text style={[ 
                styles.buttonText, 
                props?.buttonTextStyle,  
            ]} numberOfLines={props?.numberOfLines || 1}>{props?.buttonTitle}</Text>
            
        </TouchableOpacity>
    )
}



const styles =  StyleSheet.create({
    containerView:{
        backgroundColor: COLORS.buttonBackgroundColor,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 12
    },
    buttonText: {
        color: COLORS.buttonTextColor,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
})