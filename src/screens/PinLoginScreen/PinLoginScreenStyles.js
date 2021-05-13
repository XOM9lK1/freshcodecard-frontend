import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: null,
        height: null,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    modal: {
        width: '100%',
        minHeight: '30%',
        borderRadius: 10,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        paddingTop: 64,
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 40
    },
    modalTitle: {
        marginBottom: 32,
    },
    input: {
        width: '100%',
        height: 64,
        borderWidth: 1,
        borderColor: 'rgba(213, 241, 225, 1)',
        borderRadius: 30,
        paddingLeft: 18,
        fontSize: 36,
        letterSpacing: 20,
    },
    button: {
        width: '100%',
        height: 40,
        borderWidth: 0,
        backgroundColor: 'rgba(63, 205, 126, 1)',
        borderRadius: 30,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'open-sans-regular'
    },
});
