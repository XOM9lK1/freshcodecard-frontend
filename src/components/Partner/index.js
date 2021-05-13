import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './PartnerStyles';

export default Partner = ({ partner, onOpen }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(partner)}>
            <View style={styles.wrapper}>
                <View style={styles.partner}>
                    <ImageBackground style={styles.image} source={{ uri: partner.bgimage }}>
                        <Image style={styles.logo} source={{ uri: partner.logo }}></Image>
                    </ImageBackground>
                    <Text style={styles.name}>{partner.name}</Text>
                    <Text style={styles.discount}>{partner.discount}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};
