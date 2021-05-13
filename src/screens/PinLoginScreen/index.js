import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { emailLoginRequest, pinLoginRequest } from '../../api/authApi';
import { authLogin } from '../../store/actions/authActions';
import styles from './PinLoginScreenStyles';

class PinLoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
            email: props.navigation.getParam('email')
        };
    }

    componentDidMount() {
        console.log(this.state.email);
    }

    loginButtonHandler = async () => {
        if (pinLoginRequest(this.state.email, this.state.pin)) {
            const { firstName, lastName } = emailLoginRequest(this.state.email);
            this.props.authLogin(this.state.email, firstName, lastName);
            await AsyncStorage.setItem('userToken', 'fisnf');
            await AsyncStorage.setItem('userEmail', this.state.email);
            this.props.navigation.navigate('App');
        }
    };

    render() {
        return (
            <ImageBackground source={require('../../../assets/mainBg.png')} style={styles.wrapper}>
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Введіть пін-код</Text>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <TextInput keyboardType={'number-pad'} maxLength={4} style={styles.input} value={this.state.pin} onChangeText={(pin) => this.setState({ pin })}></TextInput>
                    </TouchableWithoutFeedback>
                    <TouchableOpacity activeOpacity={0.4} style={styles.button} onPress={() => { this.loginButtonHandler() }}>
                        <Text style={styles.buttonText}>Увійти</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default connect(null, { authLogin })(PinLoginScreen)
