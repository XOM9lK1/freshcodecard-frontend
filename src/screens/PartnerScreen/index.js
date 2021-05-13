import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { PartnerDetailsModal } from '../../components/PartnerDetailsModal';
import { Loader } from '../../components/Loader';
import { useSelector } from 'react-redux';
import styles from './PartnerScreenStyles';

export default PartnerScreen = ({ navigation }) => {

    const partnerId = navigation.getParam('partnerId');
    const partner = useSelector(state => state.partner.partners).find(p => p.id === partnerId);
    const { pageLogo, textColor, bgColor, animatedLogo, description, discount } = partner;
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const backButtonHandler = () => {
        navigation.navigate('Main');
    };

    useEffect(() => {
        setIsLoading(false);
    }, [])

    return (
        <View style={{ ...styles.wrapper, backgroundColor: bgColor }}>
            <Loader isLoading={isLoading} />
            <BackButton onPress={backButtonHandler} color={textColor} />
            <Image style={styles.logo} source={{ uri: pageLogo }}></Image>
            <Text style={{ ...styles.discount, color: textColor }}>{discount}</Text>
            <Text style={{ ...styles.description, color: textColor }}>{description}</Text>
            <Image style={styles.animatedLogo} source={{ uri: animatedLogo }}></Image>
            <TouchableOpacity activeOpacity={0.4} style={styles.toDetailsButton} onPress={() => setModalVisible(true)}>
                <Text style={{ ...styles.detailsButton, color: textColor }}>Деталі</Text>
            </TouchableOpacity>
            <PartnerDetailsModal setModalVisible={setModalVisible} modalVisible={modalVisible} partner={partner}></PartnerDetailsModal>
        </View>
    )
}

