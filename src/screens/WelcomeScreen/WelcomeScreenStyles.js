import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: null,
        height: null,
    },
    whiteWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-regular',
        fontSize: 24,
        marginTop: 25,
    },
});
