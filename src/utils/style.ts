import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 16,
    alignItems: 'center', // Align items vertically in the center
  },
  detailsContainer: {
    marginLeft: 16, // Space between image and details
    flex: 1, // Take up the remaining space
  },
  TouchableOpacity: {
    backgroundColor: '#FFD700',
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start', // Align button to the start
  },
  TouchableOpacityText: {
    color: '#FFFFFF',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productname: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  productprice: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  productdescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  productisfeatured: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#FFD700',
    padding: 4,
    borderRadius: 4,
    textAlign: 'center',
    alignSelf: 'flex-start', // Align featured tag to the start
  },
});

export default styles;
