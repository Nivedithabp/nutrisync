import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Search, Scan, TrendingUp, Apple } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#E8F5E9', '#FFFFFF']}
        style={styles.headerGradient}
      >
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search foods or scan barcode"
            placeholderTextColor="#666"
          />
          <TouchableOpacity
            style={styles.scanButton}
            onPress={() => router.push('/(app)/scan')}
          >
            <Scan size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Daily Summary Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.cardTitle}>Today's Nutrition</Text>
          <View style={styles.nutritionGrid}>
            <View style={styles.nutritionItem}>
              <TrendingUp size={24} color="#4CAF50" />
              <Text style={styles.nutritionValue}>1,850</Text>
              <Text style={styles.nutritionLabel}>Calories</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Apple size={24} color="#2196F3" />
              <Text style={styles.nutritionValue}>75g</Text>
              <Text style={styles.nutritionLabel}>Protein</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* Recent Scans */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Scans</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentScans}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.recentScanCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200' }}
                style={styles.recentScanImage}
              />
              <Text style={styles.recentScanTitle}>Organic Granola</Text>
              <Text style={styles.recentScanDate}>2h ago</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Health Insights */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AI Health Insights</Text>
        <View style={styles.insightCard}>
          <Text style={styles.insightTitle}>Nutrition Tip</Text>
          <Text style={styles.insightText}>
            Based on your recent scans, consider adding more whole grains to your diet for better fiber intake.
          </Text>
        </View>
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
  welcomeText: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    color: '#1B5E20',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  scanButton: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    padding: 8,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#1B5E20',
    marginBottom: 15,
  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutritionValue: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#333',
    marginTop: 8,
  },
  nutritionLabel: {
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
  recentScans: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  recentScanCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recentScanImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  recentScanTitle: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    color: '#333',
  },
  recentScanDate: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: '#666',
    marginTop: 4,
  },
  insightCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    padding: 20,
  },
  insightTitle: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#1565C0',
    marginBottom: 8,
  },
  insightText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#333',
    lineHeight: 20,
  },
});