import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#c6def1',
        fontFamily: 'Arial',
        // alignItems: 'center',
        // justifyContent: 'center',
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
    button: {
        backgroundColor: '#f9a826',
        padding: 12,
        borderRadius: 8,
        marginTop: 16,
        width: 400,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default styles;