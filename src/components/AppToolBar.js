
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../styles/colors';

export default function AppToolBar({ title, rightSideShow, rightSideOnPress}){



    return(
        <View style={[styles.toolBar]}>
            <Text style={styles.titleTextView} numberOfLines={1}>{title}</Text>
        
            {
                rightSideShow?
                    <TouchableOpacity
                        onPress={rightSideOnPress} 
                        style={ styles.rightSideStyle }
                    >
                        <Icon name={'settings'} color={COLORS.placeholderTextColor} size={24} />           
                    </TouchableOpacity> 
                : null
            }
        </View>
    )
}



const styles = StyleSheet.create({
    toolBar: {
        justifyContent: 'center'
    },
    titleTextView:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 16
    },
    rightSideStyle:{
        height: 48,
        width: 48,
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'absolute',
        top: 2,
        bottom: 0,
        right: 0
    }
})