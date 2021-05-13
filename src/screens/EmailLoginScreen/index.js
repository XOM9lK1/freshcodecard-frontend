import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { emailLoginRequest } from '../../api/authApi';
import styles from './EmailLoginScreenStyles';

export default class EmailLoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
        };
    }

    loginButtonHandler = async () => {
        if (emailLoginRequest(this.state.login)) {
            this.props.navigation.navigate('LoginPin', { email: this.state.login });
        }
    };

    render() {
        return (
            <ImageBackground source={require('../../../assets/mainBg.png')} style={styles.wrapper}>
                <View style={styles.titles}>
                    <Text style={styles.title}>Привіт!</Text>
                    <Text style={styles.description}>Увійди в систему, щоб почати користуватися знижками</Text>
                </View>
                <KeyboardAvoidingView behavior={Platform === 'ios' ? 'padding' : 'height'} style={styles.modal} scrollEnabled={false}>
                        <TextInput placeholder='Логін' keyboardType={'email-address'} style={styles.input} value={this.state.login} onChangeText={(login) => this.setState({ login })}></TextInput>
                        <TouchableOpacity activeOpacity={0.4} style={styles.button} onPress={() => { this.loginButtonHandler() }}>
                            <Text style={styles.buttonText}>Увійти</Text>
                        </TouchableOpacity>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}
