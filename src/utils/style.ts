import { StyleSheet, Touchable, TouchableOpacity } from "react-native";
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#DED9E2',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 8,
    },
    TouchableOpacity: {
        backgroundColor: '#80A1D4',
        padding: 12,
        borderRadius: 8,
        marginTop: 16,
        width: 100,
    },
    TouchableOpacityText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
});
export default styles;