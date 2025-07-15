import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS } from '../styles/colors';



export default function AppInput(props){



    return(
        <View style={[styles.containerView, props?.customContainerStyle]}>
            
            <TextInput
                style={[styles.inputText, props.inputStyle]}
                onPressIn={props.onPress}
                pointerEvents={props.type == "select" ? "none" : "auto"}
                multiline={props?.multiline ? props?.multiline : false}
                numberOfLines={props.lineNum ? props.lineNum : null}
                placeholder={props.placeHolder || props.placeholder}
                autoFocus={props.autofocus}
                autoCapitalize={props.autoCapitalize || 'none'}
                maxLength={props?.maxLength}
                placeholderTextColor={props.holderStyle ? props.holderStyle : COLORS.placeholderTextColor}
                value={props?.value}
                keyboardType={'default'}
                {...props}
            />
            {
                props?.rightSection?
                    <>{props?.rightSection}</>
                : null
            }
            
        </View>
    )
}


const styles =  StyleSheet.create({
    containerView: {
        backgroundColor: COLORS.inputFieldBackColor,
        borderRadius: 8,
        padding: 16,
        marginVertical: 12
    },
    inputText: {
        color: COLORS.titleTextColor,
        fontSize: 16,
        textAlign: 'left'
    },
})