import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 50,
        display: 'flex',
        flexDirection: 'column',
    },
    logo: {
        width: '80%',
        height: '30%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    discount: {
        fontFamily: 'open-sans-bold',
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 20
    },
    description: {
        fontFamily: 'open-sans-regular',
        width: '80%',
        alignSelf: 'center',
        marginTop: 40
    },
    animatedLogo: {
        width: '100%',
        height: 45,
        position: 'absolute',
        left: 0,
        bottom: '35%'
    },
    toDetailsButton: {
        position: 'absolute',
        bottom: '20%',
        alignSelf: 'center'
    },
    detailsButton: {
        fontSize: 15,
    },
});
