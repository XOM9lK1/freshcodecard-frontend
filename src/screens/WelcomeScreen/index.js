import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { authLogin } from '../../store/actions/authActions';
import { emailLoginRequest } from '../../api/authApi';
import styles from './WelcomeScreenStyles';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.getAuthToken();
        }, 2000)
    }

    getAuthToken = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        
        if (userToken) {
            const email = await AsyncStorage.getItem('userEmail');
            const { firstName, lastName } = emailLoginRequest(email);
            this.props.authLogin(email, firstName, lastName);
        }

        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <ImageBackground source={require('../../../assets/mainBg.png')} style={styles.wrapper}>
                <View style={styles.whiteWrapper}>
                    <Image source={require('../../../assets/logo.png')} style={styles.logo}></Image>
                    <Text style={styles.title}>Freshcode Card</Text>
                </View>
            </ImageBackground>
        )
    }
};

export default connect(null, { authLogin })(WelcomeScreen);

