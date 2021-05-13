import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPartners } from '../../store/actions/partnerActions';
import Partner from '../../components/Partner';
import styles from './MainScreenStyles';

export default MainScreen = ({ navigation }) => {

    const openPostHandler = (partner) => {
        navigation.navigate('Partner', { partnerId: partner.id });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPartners());
    }, [dispatch]);

    const partners = useSelector(state => state.partner.partners);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.pageTitle}>Партнери</Text>
            <FlatList
                contentContainerStyle={{ paddingBottom: 50 }}
                data={partners}
                keyExtractor={partner => partner.id.toString()}
                renderItem={({ item }) => {
                    return <Partner partner={item} onOpen={openPostHandler} />
                }}
            />
        </View>
    )
}

