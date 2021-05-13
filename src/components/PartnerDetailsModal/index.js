import React from 'react';
import { View, Text, Linking, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import styles from './PartnerDetailsModalStyles';

export const PartnerDetailsModal = ({ setModalVisible, modalVisible, partner }) => {

    const { adress, phone, site, siteURL, adressURL, description } = partner;

    return (
        <Modal
            isVisible={modalVisible}
            style={{ margin: 0 }}
            onRequestClose={() => { setModalVisible(false) }}
        >
            <View style={styles.modalContainer}>
                <Ionicons name="close" size={32} color='#3FCD7E' style={styles.closeModal} onPress={() => setModalVisible(false)} />
                <Text style={styles.description}>{description}</Text>
                <Pressable style={styles.detailItem} onPress={() => Linking.openURL(adressURL)}>
                    <Text style={styles.detailTitle}>Адреса: </Text>
                    <Text style={styles.detailContent}>{adress}</Text>
                </Pressable>
                <Pressable style={styles.detailItem} onPress={() => Linking.openURL(`tel:${phone}`)}>
                    <Text style={styles.detailTitle}>Телефон: </Text>
                    <Text style={styles.detailContent}>{phone}</Text>
                </Pressable>
                <Pressable style={styles.detailItem} onPress={() => Linking.openURL(siteURL)}>
                    <Text style={styles.detailTitle}>{site.indexOf('@') !== -1 ? `Instagram: ` : 'Сайт: '}</Text>
                    <Text style={styles.detailContent}>{site}</Text>
                </Pressable>
            </View>
        </Modal >
    )
};
