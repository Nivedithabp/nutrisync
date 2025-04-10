import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../../context/auth';

export default function OnboardingPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);
  const [diseaseList, setDiseaseList] = useState<string[]>([]);
  const [drugList, setDrugList] = useState<string[]>([]);
  const [allergies, setAllergies] = useState('');
  const [alcoholOrDrugUse, setAlcoholOrDrugUse] = useState('');

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  if (!user) return <Text style={styles.error}>User not logged in</Text>;

  const handleSubmit = async () => {
    try {
      await setDoc(doc(db, 'users', user.uid), {
        weight,
        height,
        dietaryRestrictions,
        diseases: diseaseList,
        drugs: drugList,
        allergies,
        alcoholOrDrugUse,
        createdAt: serverTimestamp(),
      });
      router.replace('/(app)/(tabs)');
    } catch (error) {
      console.error('Firestore error:', error);
    }
  };

  const toggleItem = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <ImageBackground source={require('../../assets/backround.jpg')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Complete Your Profile</Text>

        <TextInput style={styles.input} placeholder="Weight (kg)" value={weight} onChangeText={setWeight} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Height (cm)" value={height} onChangeText={setHeight} keyboardType="numeric" />

        <Text style={styles.label}>Dietary Restrictions</Text>
        <View style={styles.optionGroup}>
          {['Vegetarian', 'Vegan'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.option, dietaryRestrictions.includes(item) && styles.selectedOption]}
              onPress={() => toggleItem(item, dietaryRestrictions, setDietaryRestrictions)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Diseases</Text>
        <TextInput
          style={styles.input}
          placeholder="Add diseases (comma separated)"
          onChangeText={(text) => setDiseaseList(text.split(',').map((s) => s.trim()))}
        />

        <Text style={styles.label}>Drugs / Prescriptions</Text>
        <TextInput
          style={styles.input}
          placeholder="Drugs taken (comma separated)"
          onChangeText={(text) => setDrugList(text.split(',').map((s) => s.trim()))}
        />

        <Text style={styles.label}>Allergies</Text>
        <TextInput style={styles.input} placeholder="Allergy details" value={allergies} onChangeText={setAllergies} />

        <Text style={styles.label}>Alcohol/Drug Use (optional)</Text>
        <TextInput style={styles.input} placeholder="E.g., Occasionally" value={alcoholOrDrugUse} onChangeText={setAlcoholOrDrugUse} />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 20,
    paddingBottom: 50,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#1B5E20',
    fontFamily: 'Inter_700Bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontFamily: 'Inter_400Regular',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  label: {
    marginBottom: 5,
    fontFamily: 'Inter_600SemiBold',
    color: '#333',
  },
  optionGroup: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  option: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  },
  selectedOption: {
    backgroundColor: '#A5D6A7',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});
