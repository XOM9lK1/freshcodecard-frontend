import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        minHeight: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        position: 'absolute',
        left: 0,
        bottom: 0,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        padding: 32,
        paddingBottom: 70,
    },
    closeModal: {
        alignSelf: 'flex-end',
    },
    description: {
        marginTop: 32,
        marginBottom: 32,
        fontSize: 16,
    },
    detailItem: {
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    detailContent: {
        borderBottomWidth: 1,
        borderBottomColor: '#3FCD7E',
        fontSize: 16,
    },
    detailTitle: {
        fontFamily: 'open-sans-bold',
        color: '#2886F0',
        fontSize: 16,
    }
});
