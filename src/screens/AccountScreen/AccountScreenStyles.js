import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: '#fff'
    },
    modal: {
        width: '100%',
        minHeight: '33%',
        backgroundColor: '#BFDBFB',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        alignSelf: 'center',
        marginTop: 45,
    },
    userInfoContainer: {
        position: 'absolute',
        bottom: 0,
        paddingBottom: 40,
        paddingLeft: 32,
        paddingRight: 32,
        marginTop: 25,
    },
    name: {
        fontFamily: 'open-sans-bold',
        fontSize: 21,
        color: 'rgba(40, 134, 240, 1)'
    },
    email: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    buttonsContainer: {
        width: '100%',
        paddingLeft: 36,
        paddingTop: 45
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40
    },
    buttonText: {
        fontFamily: 'open-sans-regular',
        fontSize: 15,
        marginLeft: 15
    },
    logoutButton: {
        marginLeft: 36,
        position: 'absolute',
        bottom: 0
    },
});