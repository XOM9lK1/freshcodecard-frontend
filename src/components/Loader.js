import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export const Loader = ({ isLoading }) => {
    return (
        <Spinner
            visible={isLoading}
            overlayColor={'#fff'}
            animation={'fade'}
            customIndicator={<Image style={styles.loaderIcon} source={require('../../assets/loader.gif')}></Image>}
        />
    )
};

const styles = StyleSheet.create({
    loaderIcon: {
        width: '50%',
        height: 300
    }
});
