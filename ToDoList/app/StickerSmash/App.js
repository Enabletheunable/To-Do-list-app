import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.productImageContainer}>
        <Image source={require('./assets/plant-image.jpg')} style={styles.productImage} />
      </View>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}>Plant Name</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>5.0</Text>
          <Text style={styles.stars}>★★★★★</Text>
          <Text style={styles.reviews}>(7054 reviews)</Text>
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Lacus vitae viverra id habitant proin elementum urna pellentesque.
        </Text>
        <View style={styles.variationsContainer}>
          <Image source={require('./assets/variation1.jpg')} style={styles.variationImage} />
          <Image source={require('./assets/variation2.jpg')} style={styles.variationImage} />
          <Image source={require('./assets/variation3.jpg')} style={styles.variationImage} />
          <Image source={require('./assets/variation4.jpg')} style={styles.variationImage} />
        </View>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
  },
  productImageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  productInfoContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stars: {
    fontSize: 18,
    color: '#ffd700',
    marginLeft: 5,
  },
  reviews: {
    fontSize: 14,
    color: '#888',
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 20,
  },
  variationsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  variationImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buyNowButton: {
    backgroundColor: '#006400',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buyNowText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
