import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    partner: {
        width: '90%',
        marginBottom: 15,
        overflow: 'hidden',
        borderRadius: 10,
        backgroundColor: '#D5F1E1',
        fontSize: 17,
    },
    name: {
        paddingTop: 16,
        paddingLeft: 16,
        fontFamily: 'open-sans-regular',
    },
    discount: {
        paddingTop: 4,
        paddingLeft: 16,
        paddingBottom: 16,
        fontFamily: 'open-sans-bold',
        color: '#2886F0'
    },
    image: {
        width: '100%',
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    }
});
