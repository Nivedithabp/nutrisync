import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { AlertTriangle, ShoppingCart } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AnalysisScreen() {
  const { barcode } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#E8F5E9', '#FFFFFF']}
        style={styles.headerGradient}
      >
        <View style={styles.productHeader}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300' }}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Nature Valley Granola</Text>
            <Text style={styles.productBrand}>General Mills</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Allergen Warning */}
      <View style={styles.warningCard}>
        <AlertTriangle size={24} color="#D32F2F" />
        <View style={styles.warningContent}>
          <Text style={styles.warningTitle}>Allergen Alert</Text>
          <Text style={styles.warningText}>Contains nuts and wheat</Text>
        </View>
      </View>

      {/* Nutrition Analysis */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nutrition Analysis</Text>
        <View style={styles.nutritionGrid}>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>240</Text>
            <Text style={styles.nutritionLabel}>Calories</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>6g</Text>
            <Text style={styles.nutritionLabel}>Protein</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>12g</Text>
            <Text style={styles.nutritionLabel}>Sugar</Text>
          </View>
        </View>
      </View>

      {/* AI Recommendations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Healthier Alternatives</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.alternativesScroll}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.alternativeCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=200' }}
                style={styles.alternativeImage}
              />
              <Text style={styles.alternativeName}>Organic Granola</Text>
              <Text style={styles.alternativePrice}>$5.99</Text>
              <TouchableOpacity style={styles.buyButton}>
                <ShoppingCart size={16} color="#FFF" />
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerGradient: {
    padding: 20,
    paddingTop: 60,
  },
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#1B5E20',
    marginBottom: 5,
  },
  productBrand: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#616161',
  },
  warningCard: {
    flexDirection: 'row',
    backgroundColor: '#FFEBEE',
    margin: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  warningContent: {
    flex: 1,
    marginLeft: 12,
  },
  warningTitle: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#D32F2F',
  },
  warningText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
    color: '#333',
    marginBottom: 15,
  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 12,
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutritionValue: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#1B5E20',
  },
  nutritionLabel: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666',
    marginTop: 4,
  },
  alternativesScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  alternativeCard: {
    width: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  alternativeImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  alternativeName: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    color: '#333',
    marginBottom: 4,
  },
  alternativePrice: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: '#1B5E20',
    marginBottom: 8,
  },
  buyButton: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    marginLeft: 4,
  },
}); 