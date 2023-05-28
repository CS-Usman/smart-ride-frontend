import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[ '#145cfe','#3489FD','#5FFBF1']}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            {/* Profile image component goes here */}
          </View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>johndoe@example.com</Text>
        </View>
        <View style={[styles.section, styles.statisticsSection]}>
          <Text style={styles.sectionTitle}>Account Data</Text>

        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    elevation: 5,
    // Add additional styling as needed
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#ffffff',
  },
  section: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statisticsSection: {
    backgroundColor: '#ffffff',
    elevation: 5,
    // Add additional styling as needed
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProfileScreen;
