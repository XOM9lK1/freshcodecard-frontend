import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Fontisto } from '@expo/vector-icons';
import { Loader } from '../../components/Loader';
import { Ionicons } from '@expo/vector-icons';
import styles from './AccountScreenStyles';

class AccountScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: false });
    }

    killAuthToken = async () => {
        console.log('kill session');
        await AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <Loader isLoading={this.state.isLoading} />
                <View style={styles.modal}>
                    <Text style={styles.title}>Аккаунт</Text>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.name}>{this.props.firstName} {this.props.lastName}</Text>
                        <View style={styles.email}>
                            <Fontisto name="email" size={16} color="rgba(40, 134, 240, 1)" style={{ marginRight: 10 }} />
                            <Text style={{ fontFamily: 'open-sans-regular' }}>{this.props.email}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="ios-information-circle-outline" size={32} color="#3FCD7E" />
                        <Text style={styles.buttonText}>Про нас</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="ios-help-buoy-outline" size={30} color="#3FCD7E" />
                        <Text style={styles.buttonText}>Підтримка</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => this.killAuthToken()}>
                    <Ionicons name="ios-log-out-outline" size={30} color="#3FCD7E" />
                    <Text style={styles.buttonText}>Вийти з аккаунту</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps)(AccountScreen)