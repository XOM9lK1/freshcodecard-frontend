import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export const BackButton = ({ onPress, color }) => {

    return (
        <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
            <View style={styles.wrapper}>
                <FontAwesome name="angle-left" size={24} color={color} style={{marginRight: 8}}/>
                <Text style={{color: color}}>Назад</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        width: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 12,
    },
});