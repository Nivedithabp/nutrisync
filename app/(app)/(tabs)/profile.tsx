import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Activity, Apple, Bell, Heart, History, Scale, Settings as SettingsIcon } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#E8F5E9', '#FFFFFF']}
        style={styles.header}
      >
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Sarah Johnson</Text>
          <Text style={styles.subtitle}>Health Enthusiast</Text>
          
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => router.push('/(tabs)/settings')}
          >
            <SettingsIcon size={20} color="#2196F3" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Health Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Scale size={24} color="#4CAF50" />
          <Text style={styles.statValue}>65kg</Text>
          <Text style={styles.statLabel}>Weight</Text>
        </View>
        <View style={styles.statCard}>
          <Activity size={24} color="#2196F3" />
          <Text style={styles.statValue}>172cm</Text>
          <Text style={styles.statLabel}>Height</Text>
        </View>
        <View style={styles.statCard}>
          <Heart size={24} color="#F44336" />
          <Text style={styles.statValue}>22.0</Text>
          <Text style={styles.statLabel}>BMI</Text>
        </View>
      </View>

      {/* Dietary Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dietary Preferences</Text>
        <View style={styles.preferencesContainer}>
          <View style={styles.preferenceTag}>
            <Text style={styles.preferenceText}>Vegetarian</Text>
          </View>
          <View style={styles.preferenceTag}>
            <Text style={styles.preferenceText}>Low Carb</Text>
          </View>
          <View style={styles.preferenceTag}>
            <Text style={styles.preferenceText}>Gluten Free</Text>
          </View>
        </View>
      </View>

      {/* Allergies */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Allergies & Restrictions</Text>
        <View style={styles.allergyContainer}>
          <View style={styles.allergyCard}>
            <Bell size={20} color="#D32F2F" />
            <Text style={styles.allergyText}>Peanuts</Text>
          </View>
          <View style={styles.allergyCard}>
            <Bell size={20} color="#D32F2F" />
            <Text style={styles.allergyText}>Shellfish</Text>
          </View>
          <View style={styles.allergyCard}>
            <Bell size={20} color="#D32F2F" />
            <Text style={styles.allergyText}>Lactose</Text>
          </View>
        </View>
      </View>

      {/* Connected Apps */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Connected Apps</Text>
        <View style={styles.connectedAppsContainer}>
          <View style={styles.connectedApp}>
            <Apple size={24} color="#000" />
            <View style={styles.appInfo}>
              <Text style={styles.appName}>Apple Health</Text>
              <Text style={styles.appStatus}>Connected</Text>
            </View>
          </View>
          <View style={styles.connectedApp}>
            <Activity size={24} color="#00B0B9" />
            <View style={styles.appInfo}>
              <Text style={styles.appName}>Fitbit</Text>
              <Text style={styles.appStatus}>Connected</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={[styles.section, styles.lastSection]}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.activityItem}>
              <History size={20} color="#666" />
              <View style={styles.activityInfo}>
                <Text style={styles.activityTitle}>Scanned Nature Valley Granola</Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
            </View>
          ))}
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
  header: {
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#1B5E20',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#666',
    marginBottom: 16,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    marginLeft: 8,
    color: '#2196F3',
    fontFamily: 'Inter_600SemiBold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FFF',
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 12,
    minWidth: 100,
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: '#333',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666',
    marginTop: 4,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  lastSection: {
    borderBottomWidth: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#333',
    marginBottom: 16,
  },
  preferencesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  preferenceTag: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  preferenceText: {
    color: '#1B5E20',
    fontFamily: 'Inter_600SemiBold',
  },
  allergyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  allergyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFEBEE',
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  allergyText: {
    color: '#D32F2F',
    fontFamily: 'Inter_600SemiBold',
  },
  connectedAppsContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    overflow: 'hidden',
  },
  connectedApp: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  appInfo: {
    marginLeft: 12,
  },
  appName: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#333',
  },
  appStatus: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#4CAF50',
  },
  activityList: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    overflow: 'hidden',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  activityInfo: {
    marginLeft: 12,
  },
  activityTitle: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    color: '#333',
  },
  activityTime: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: '#666',
    marginTop: 2,
  },
});